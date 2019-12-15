<div class='item-inner'>
    <span class='title'><a href='/wp-admin/post.php?post=<?php echo $product->get_id() ?>&action=edit' target='_blank' title='edit'><?php echo $product->get_title() ?></a></span>
    <input type='submit' name='fix_cat[submit]' value='<?php echo $button_title ?>' class='fixit'>
    <input type='hidden' name='fix_cat[product_id]' value='<?php echo $product->get_id() ?>'>
    <input type='hidden' name='fix_cat[sales_id]' value='<?php echo $sales_id ?>'>
    <span><a href="<?php echo get_permalink($product->get_id()) ?>" target='_blank'>anzeigen</a></span>
    <span><a href='/wp-admin/post.php?post=<?php echo $product->get_id() ?>&action=edit' target='_blank'>editieren</a></span>
</div>