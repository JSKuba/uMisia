<article class="zasady wrapper-responsive-mb">
  <h2><?php block_field("title") ?></h2>
  <div class="wrapper">
    <div class="decor-top"></div>
    <div class="column left">
      <img src="<?php block_field("image-1") ?>">
      <ol>
        <?php for ($i = 1; $i <= 9; $i += 1) { ?>
          <li><?php block_field("point-$i") ?></li>
        <?php } ?>
      </ol>
    </div>
    <div class="column right">
      <img src="<?php block_field("image-2") ?>">
      <ol start="10">
        <?php for ($i = 10; $i <= 19; $i += 1) { ?>
          <li><?php block_field("point-$i") ?></li>
        <?php } ?>
      </ol>
    </div>
    <div class="decor-bottom"></div>
  </div>
</article>