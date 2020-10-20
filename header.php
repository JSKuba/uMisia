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
              'container' => '',
              'items_wrap' => '<ul class="nav-list">%3$s</ul>'
            )
          );
        ?>
        <div class="disability-help-container">
          <button class="disability-help-button" id="large-size-button">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 -16582)" gradientUnits="userSpaceOnUse" x1="0" x2="512" y1="-16838" y2="-16838"><stop offset="0" stop-color="#80D8FF"/><stop offset="1" stop-color="#EA80FC"/></linearGradient><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="url(#a)"/><g fill="#fff"><path d="m414.699219 98.5h-267.804688v30h118.902344v290h30v-290h118.902344zm0 0"/><path d="m97.300781 314.476562h45.132813v104.023438h30v-104.023438h43.890625v-30h-119.023438zm0 0"/></g></svg>
          </button>
          <button class="disability-help-button" id="high-contrast-button">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="258" x2="512" y2="258" gradientTransform="matrix(1 0 0 -1 0 514)"><stop  offset="0" style="stop-color:#80D8FF"/><stop  offset="1" style="stop-color:#EA80FC"/></linearGradient><path style="fill:url(#SVGID_1_);" d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256C512,114.516,397.503,0,256,0z M276,471.079V40.921C385.28,50.889,472,142.704,472,256C472,369.28,385.294,461.11,276,471.079z"/></svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
