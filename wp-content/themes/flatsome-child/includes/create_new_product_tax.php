<?php
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_new_product_tax', 0 );

// create two taxonomies, genres and writers for the post type "book"
function create_new_product_tax() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Genres', 'taxonomy general name', 'ha_lehmann' ),
		'singular_name'     => _x( 'Genre', 'taxonomy singular name', 'ha_lehmann' ),
		'search_items'      => __( 'Search Genres', 'ha_lehmann' ),
		'all_items'         => __( 'All Genres', 'ha_lehmann' ),
		'parent_item'       => __( 'Parent Genre', 'ha_lehmann' ),
		'parent_item_colon' => __( 'Parent Genre:', 'ha_lehmann' ),
		'edit_item'         => __( 'Edit Genre', 'ha_lehmann' ),
		'update_item'       => __( 'Update Genre', 'ha_lehmann' ),
		'add_new_item'      => __( 'Add New Genre', 'ha_lehmann' ),
		'new_item_name'     => __( 'New Genre Name', 'ha_lehmann' ),
		'menu_name'         => __( 'Genre', 'ha_lehmann' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'genre' ),
	);

	register_taxonomy( 'genre', array( 'book' ), $args );

	// Add new taxonomy, NOT hierarchical (like tags)
	$labels = array(
		'name'                       => _x( 'Writers', 'taxonomy general name', 'ha_lehmann' ),
		'singular_name'              => _x( 'Writer', 'taxonomy singular name', 'ha_lehmann' ),
		'search_items'               => __( 'Search Writers', 'ha_lehmann' ),
		'popular_items'              => __( 'Popular Writers', 'ha_lehmann' ),
		'all_items'                  => __( 'All Writers', 'ha_lehmann' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Writer', 'ha_lehmann' ),
		'update_item'                => __( 'Update Writer', 'ha_lehmann' ),
		'add_new_item'               => __( 'Add New Writer', 'ha_lehmann' ),
		'new_item_name'              => __( 'New Writer Name', 'ha_lehmann' ),
		'separate_items_with_commas' => __( 'Separate writers with commas', 'ha_lehmann' ),
		'add_or_remove_items'        => __( 'Add or remove writers', 'ha_lehmann' ),
		'choose_from_most_used'      => __( 'Choose from the most used writers', 'ha_lehmann' ),
		'not_found'                  => __( 'No writers found.', 'ha_lehmann' ),
		'menu_name'                  => __( 'Writers', 'ha_lehmann' ),
	);

	$args = array(
		'hierarchical'          => false,
		'labels'                => $labels,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'writer' ),
	);

	register_taxonomy( 'writer', 'book', $args );
}