<?php

/**
 * Initializes the plugin by setting up the CSS/JS.
 * 
 * @since 1.0.0
 * @package FAB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue assets for frontend.
 * 
 * @since 1.0.0
 */
function fab_block_assets() {
    wp_enqueue_style( 'faq-style-css', plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ) );
    wp_enqueue_script('faq-accordion-js', plugins_url( '/faq_accordion.js', dirname( __FILE__ ) ), array(), true );
}
add_action( 'enqueue_block_assets', 'fab_block_assets' );



 /**
  * Enqueue assets for editor.
  *
  * @since 1.0.0
  */
function fab_editor_assets() {

	wp_enqueue_script(
		'faq-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		true 
	);

	wp_enqueue_style(
		'faq-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'fab_editor_assets' );