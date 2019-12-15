<?php

$args = array(
    'taxonomy' => 'product_cat',
    'include' => $sales_id
);

$product_category = get_terms( $args )[0]; // -> WP_Term Object
write_log($product_category);
write_log($product_category->name);
write_log($product_category->count);


$query = new WP_Term_Query( $args ); // -> WP_Term_Query Object
$product_category = $query->get_terms( $args )[0]; // -> WP_Term Object
write_log($product_category);
write_log($product_category->name);
write_log($product_category->count);


$args = array(
    'post_type' => 'product',
    'posts_per_page' => 200,
    'tax_query' => array(
        array(
            'taxonomy' => 'product_cat',
            'field' => 'term_id', //optional since its the default
            'terms' => $sales_id
        ),
    ),
);
$query = new WP_Query( $args );
$products = $query->get_posts();
write_log(count($products));


$args = array(
    'product_cat' => $product_category->name,
    'post_type' => 'product',
    'posts_per_page' => -1
);

$products = get_posts( $args );
write_log(count($products));


$args = array(
    'product_cat' => $product_category->name,
    'posts_per_page' => -1,
    'orderby' => 'name',
    'order' => 'ASC',
);
$query = new WC_Product_Query( $args );
$products = $query->get_products();
write_log(count($products));

foreach($products as $key => $val) {
    $has_sale = in_array($sales_id, $val->get_category_ids());
    write_log( $key . ' -> on sale: ' . $val->is_on_sale() . ' has sale: ' . $has_sale . ' - ' . $val->get_name());
}

$delete_obj = delete_sales_output($sales_id);
$add_obj = add_sales_output($sales_id);

$all_products_count = count($add_obj["product_ids"]);
$error_count_total = $delete_obj["error_count"] + $add_obj["error_count"];

?>
<h3 class="info-red m <?php echo $error_count_total == 0 ? "success" : "" ?>">
    <div>
        <span>
            <?php ( $res = ( $error_count_total > 0 ? "Upps" : "Alles Top" ) );
            echo $res . ' - ' . $error_count_total .' Fehler entdeckt' ?>
        </span>
    </div>
</h3>
<div class='sales-summary'>
    <form method='post' action=''>
        <div class='sales-top-wrapper'>
            <div class='info-box'>
                <h3>Zusammenfassung</h3>
                <p>Anzahl reduzierter Artikel: <?php echo $all_products_count ?></p>
                <p>Anzahl Artikel in der Kategorie <strong><?php echo $product_category->name ?></strong>: <?php echo $product_category->count ?></p>
            </div>
            <?php if($error_count_total > 0) { ?>
                <div class='main-button'><input type='submit' name='fix_all_sales' value='Alles Reparieren' class='fixit'></div>
            <?php } ?>
        </div>
        <?php if ( $delete_obj["error_count"] > 0 ) { ?>
        <div class='item'>
            <div class='sales-header-top'>
                <span class='header'>folgende Artikel ( <?php echo $delete_obj["error_count"] ?>) sind nicht reduziert und sollten aus <strong><?php echo $product_category->name ?></strong> entfernt werden:</span>
            </div>
            <?php echo $delete_obj["output"] ?>
        </div>
        <?php } ?>
        <?php if ( $add_obj["error_count"] > 0 ) { ?>
        <div class='item'>
            <div class='sales-header-top'>
                <span class='header'>es fehlen <?php echo $add_obj["error_count"] ?> reduzierte Artikel in der Kategorie <strong><?php echo $product_category->name ?></strong> und sollten hinzufügt werden: </span>
            </div>
            <?php echo $add_obj["output"] ?>
        </div>
        <?php } ?>
    </form>
</div>