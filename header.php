<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <?php wp_head(); ?>

</head>
<body>
  <div class="color-bar-container">
    <div id="color-bar-line-0" class="color-bar-line"></div>
    <div id="color-bar-line-1" class="color-bar-line"></div>
    <div id="color-bar-line-2" class="color-bar-line"></div>
    <div id="color-bar-line-3" class="color-bar-line"></div>
    <div id="color-bar-line-4" class="color-bar-line"></div>
  </div>
  <header id="main-header">
    <div class="nav-container">
      <button class="nav-btn-hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="42.59" viewBox="0 0 59 42.59"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect width="59" height="9.67" rx="4.83" fill="#00FCE2"/><rect y="16.46" width="59" height="9.67" rx="4.83" fill="#FF6501"/><rect y="32.92" width="59" height="9.67" rx="4.83" fill="#FD40DD"/></g></g></svg>
      </button>
      <?php
        the_custom_logo()
      ?>
      <nav class="main-nav">
        <?php
          wp_nav_menu(
            array(
              'menu' => 'Nawigacja',
              'container' => '',
              'items_wrap' => '<ul class="nav-list">%3$s</ul>'
            )
          );
        ?>
      </nav>
    </div>
  </header>
