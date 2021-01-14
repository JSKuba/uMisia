<article class="zasady">
  <h2><?php block_field("title") ?></h2>
  <div class="columns-wrapper">
    <div class="column left">
      <ul>
        <?php for ($i = 1; $i <= 9; $i += 1) { ?>
          <li><?php block_field("point-$i") ?></li>
        <?php } ?>
      </ul>
      <img src="<?php block_field("image-1") ?>">
    </div>
    <div class="column left">
      <img src="<?php block_field("image-2") ?>">
      <ul>
        <?php for ($i = 10; $i <= 19; $i += 1) { ?>
          <li><?php block_field("point-$i") ?></li>
        <?php } ?>
      </ul>
    </div>
  </div>
</article>