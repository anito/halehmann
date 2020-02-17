<?php

####### Fix Sales ########
function process_sales_handler_from_post($id) {
	global $woocommerce;
    
	if ( !empty($_POST["process_all"]) ) {
		foreach ($_POST as $collection) {
            if (array_key_exists('product_id', $_POST) && !empty($collection['product_id']) && !empty($collection['sales_id'])) {
				$product_id = $collection['product_id'];
				$sales_id = $collection['sales_id'];
				process_sales_cat($product_id, $sales_id);
			}
		}
	} else {
		foreach ($_POST as $collection) {
            if (array_key_exists('submit', $collection) && isset($collection['product_id']) && isset($collection['sales_id'])) {
				$product_id = $collection['product_id'];
                $sales_id = $collection['sales_id'];
                
				process_sales_cat($product_id, $sales_id);
			}
		}
	}
}
function delete_from_sales ($sales_id) {
	
	$args = array(
		'taxonomy' => 'product_cat',
		'include'    => $sales_id
	);

	$product_category = get_terms( $args )[0];
	
	$my_sales_name = $product_category->name;
	$my_sales_count = $product_category->count;
	
	$args = array(
		'post_type' => 'product',
		'posts_per_page' => 10000000,
		'product_cat' => $my_sales_name
	);
	
	$products = get_posts( $args );
	
	$results = array("html" => [], "products" => [], "errors" => 0);
	
	$html = "";
	$error_count = 0;
	foreach( $products as $product )  { 
		$product = wc_get_product($product->ID);
		
		if($product->is_on_sale() === FALSE) {
			
			$html .= "<div class='error sales_error'>".
			"<span class='title'>{$product->get_title()}</span>".
			"<input type='submit' name='process_cat_{$error_count}' value='entfernen' class='processit'>".
			"<input type='hidden' name='process_cat_{$error_count}[product_id]' value='{$product->get_id()}'>".
			"<input type='hidden' name='process_cat_{$error_count}[sales_id]' value='{$sales_id}'>".
			"<a href=" . get_permalink($product->get_id()) . " target='_blank'>anzeigen</a>".
			"<a href='wp-admin/post.php?post={$product->get_id()}&action=edit' target='_blank'>editieren</a>".
			"</div>";
			$error_count++;
			$results["products"] = $product; 
			$results["html"] = $html; 
		}
		$results["errors"] = $error_count;
	}
	return $results;
}
function add_to_sales($sales_id) {
	
	$ids = wc_get_product_ids_on_sale();
	
	$error_count = 0;
	
	$results = array("html" => [], "products" => [], "all_product_ids" => [], "errors" => 0);
	
	$id_list = [];
	$html = "";
	foreach($ids as $id) {
		$product = wc_get_product( $id );
		$product_id = $id;
		
		if($product->is_type('variation')) {
			$variation = new WC_Product_Variation($product);
			$product_id = $variation->get_parent_id();
			$product = wc_get_product($product_id);
		}
		
		$product_title = $product->get_title();
		if(!in_array( $product_id, $id_list )) {
			$id_list[] = $product_id;
			$cat_ids = $product->get_category_ids();
			if( !in_array($sales_id, $cat_ids) ) {
//				build_output();
				$html .= "<div class='error sales_missing'>".
				"<span class='title'>{$product_title}</span>".
				"<input type='submit' name='process_cat_{$error_count}[submit]' value='hinzufügen' class='processit'>".
				"<input type='hidden' name='process_cat_{$error_count}[product_id]' value='{$product_id}'>".
				"<input type='hidden' name='process_cat_{$error_count}[sales_id]' value='{$sales_id}'>".
				"<a href=" . get_permalink($id) . " target='_blank'>anzeigen</a>".
				"<a href='" . get_home_url() . "/wp-admin/post.php?post={$product_id}&action=edit' target='_blank'>editieren</a>".
				"</div>";
				$error_count++;
				$results["products"] = $product; 
				
			}
			$results["html"] = $html;
			$results["all_product_ids"][] = $product_id;
		}
		$results["errors"] = $error_count;
	}
	return $results;
}
function sales_checker_start($sales_id, $del, $add) {
	
	$args = array(
		'taxonomy' => 'product_cat',
		'include'    => $sales_id
	);

	$product_category = get_terms( $args )[0];
	
	$my_sales_name = $product_category->name;
	$my_sales_count = $product_category->count;
	
	$del_html = $del["html"];
	$add_html = $add["html"];
	
	$all_products_count = count($add["all_product_ids"]);
	
	$error_count_del = $del["errors"];
	$error_count_add = $add["errors"];
	$error_count = $error_count_del + $error_count_add;
	
	$solution_1 = $solution_2 = '';
	$hide_add = $hide_del = 'hide';
	$f = $error_count > 0 ? "Upps" : "Alles Top";
	if ($error_count_del > 0) {
		$hide_del = '';
		$solution_1 = "<div class='sales_header_top'><span class='header'>" . "folgende Artikel ({$error_count_del}) sind nicht reduziert und sollten aus <strong>{$my_sales_name}</strong> entfernt werden:</span></div>";
	}
	if ($error_count_add > 0) {
		$hide_add = '';
		$solution_2 = "<div class='sales_header_top'><span class='header'>" . "es fehlen {$error_count_add} reduzierte Artikel in der Kategorie <strong>{$my_sales_name}</strong> und sollten hinzufügt werden: </span></div>";
	}
	$open_1 = "<div class='open {$hide_del}'>";
	$open_2 = "<div class='open {$hide_add}'>";
	$close = "</div>";
	$resume   = "<h3><div><span>{$f}  - {$error_count} Fehler entdeckt</span></div></h3>";
	$summary_start = "<div class='sales_summary'><form method='post' action=''>";
	$summary  = "<div class=''>";
	$summary .= "<div><span>Anzahl reduzierter Artikel: {$all_products_count}</span></div>";
	$summary .= "<div class='sales_top'><span>Artikel in der Kategorie <strong>{$my_sales_name}</strong>: {$my_sales_count}</span></div>";
	$summary_end = "</form>";
	?>
	<h3>
		<div>
			<span><?php ( $error_count > 0 ? "Upps" : "Alles Top" ) . ' - ' .  $error_count ?> Fehler entdeckt</span>
		</div>
	</h3>
	<div class='sales_summary'>
		<form method='post' action=''>
			<div class=''>
				<div><span>Anzahl reduzierter Artikel: {$all_products_count}</span></div>
				<div class='sales_top'>
					<span>Artikel in der Kategorie <strong><?php $my_sales_name ?></strong>: <?php $my_sales_count ?></span>
				</div>
				<?php if($error_count > 0) { ?>
					<div class='main_button'><input type='submit' name='process_all' value='alles reparieren' class='fixit'></div>
				<?php } ?>
			</div>
			<div class='open <?php $hide_del ?>'>
				<?php if ($error_count_del > 0) { ?>
				<div class='sales_header_top'>
					<span class='header'>folgende Artikel (<?php $error_count_del ?>) sind nicht reduziert und sollten aus <strong><?php $my_sales_name ?></strong> entfernt werden:</span>
				</div>
				<?php } ?>
				<?php echo $del['html'] ?>
			</div>
			<div class='open <?php $hide_add ?>'>
				<?php if ($error_count_add > 0) { ?>
				<div class='sales_header_top'>
					<span class='header'>es fehlen <?php $error_count_add ?> reduzierte Artikel in der Kategorie <strong><?php $my_sales_name ?></strong> und sollten hinzufügt werden: </span>
				</div>
				<?php } ?>
				<?php echo $del['html'] ?>
			</div>
		</form>
	</div>
	<?php
	// return $resume . $summary_start . $summary . $close . $open_1 . $solution_1 . $del_html . $close . $open_2 . $solution_2 . $add_html . $close . $summary_end . $close;
} ?>
