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
  </div>
</article>