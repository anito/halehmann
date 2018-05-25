<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>

<div class="woocommerce cart-sidebar off-canvas is--right is--active camouflage flex vbox">
	<?php
		get_template_part('custom-templates/custom-cart', 'header');
		get_template_part('custom-templates/custom-cart', 'totals');
		get_template_part('custom-templates/custom-cart', 'items');
	?>
</div>

