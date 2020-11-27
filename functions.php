<?php

//adding the CSS and JS files

function umisia_setup() {
  wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');

  if (is_front_page()) {
    wp_enqueue_style('style', get_stylesheet_uri(), NULL, microtime());
    wp_enqueue_script('front', get_theme_file_uri('/js/front.js'), NULL, microtime(), true);
    
  } else {
    wp_enqueue_style('style', get_theme_file_uri('/styles/page.css'), NULL, microtime());
    wp_enqueue_script('main', get_theme_file_uri('/js/main.js'), NULL, microtime(), true);
  }
}

add_action('wp_enqueue_scripts', 'umisia_setup');

// Adding Theme Support

function umisia_init() {
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');
  add_theme_support( 'custom-logo' );
}

add_action('after_setup_theme', 'umisia_init');

function umisia_custom_nav_menu() {
  register_nav_menu('my-custom-menu',__( 'Górna nawigacja' ));
  register_nav_menu('my-custom-menu-footer',__( 'Dolna nawigacja' ));
}

add_action( 'init', 'umisia_custom_nav_menu' );
