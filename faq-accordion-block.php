<?php
/**
 * Plugin Name: FAQ Accordion Block
 * Plugin URI: https://github.com/randi2kewl/faq-accordion-block
 * Description: The plugin adds a block for easy implementation of FAQ Accordions.
 * Author: Randi Miller
 * Author URI: https://randimiller.me
 * Version: 1.0.0
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package GTS
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';