<article id="hero">
  <div class="hero-wrapper wrapper-responsive-mb">
    <div class="hero-left">
      <h1><span id="h1-top"><?php block_field('title') ?></span> <span id="h1-bottom"><?php block_field('title-2') ?></span></h1>
      <figure class="hero-figure-mobile"><img class="style-svg" src="<?php block_field('image') ?>"/></figure>
      <p><?php block_field('description') ?></p>
      <button id="action-button"><?php block_field('cta') ?></button>
    </div>
    <div class="hero-right">
      <figure class="hero-figure-desktop"><img class="style-svg" src="<?php block_field('image') ?>"/></figure>
    </div>
    <svg id="scroll-indicator" viewbox="0 0 100 100">
      <path class="top" d="M0 0 L50 40 L100 0"></path>
      <path class="middle" d="M0 30 L50 70 L100 30"></path>
      <path class="bottom" d="M0 60 L50 100 L100 60"></path>
    </svg>
  </div>
</article>