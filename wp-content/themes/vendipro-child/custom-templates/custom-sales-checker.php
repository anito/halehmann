<?php

$args = array(
    'taxonomy' => 'product_cat',
    'include'    => $sales_id
);

$product_category = get_terms( $args )[0];

$del = delete_sales_output($sales_id);
$add = add_sales_output($sales_id);

$my_sales_name = $product_category->name;
$my_sales_count = $product_category->count;

$all_products_count = count($add["all_product_ids"]);
$del_error_count = $del["error_count"];
$add_error_count = $add["error_count"];
$del_output = $del["output"];
$add_output = $add["output"];
$error_count = $del["error_count"] + $add["error_count"];

?>
<h3 class="info-red m">
    <div>
        <span>
            <?php ( $res = ( $error_count > 0 ? "Upps" : "Alles Top" ) );
            echo $res . ' - ' . $error_count .' Fehler entdeckt' ?>
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
            <?php if($error_count > 0) { ?>
                <div class='main-button'><input type='submit' name='fix_all_sales' value='Alles Reparieren' class='fixit'></div>
            <?php } ?>
        </div>
        <?php if ( $del["error_count"] > 0 ) { ?>
        <div class='item'>
            <div class='sales-header-top'>
                <span class='header'>folgende Artikel ( <?php echo $del_error_count ?>) sind nicht reduziert und sollten aus <strong><?php echo $product_category->name ?></strong> entfernt werden:</span>
            </div>
            <?php echo $del["output"] ?>
        </div>
        <?php } ?>
        <?php if ( $add["error_count"] > 0 ) { ?>
        <div class='item'>
            <div class='sales-header-top'>
                <span class='header'>es fehlen <?php echo $add["error_count"] ?> reduzierte Artikel in der Kategorie <strong><?php echo $product_category->name ?></strong> und sollten hinzufügt werden: </span>
            </div>
            <?php echo $add["output"] ?>
        </div>
        <?php } ?>
    </form>
</div>