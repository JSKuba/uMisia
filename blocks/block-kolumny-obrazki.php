<article class="zasady wrapper-responsive-mb">
  <h3 fade="right"><?php block_field("title") ?></h2>
  <div class="wrapper">
    <div class="column left">
      <img src="<?php block_field("image-1") ?>" fade="center">
      <ol>
        <?php for ($i = 1; $i <= 9; $i += 1) { ?>
          <li>
            <p><?php block_field("point-$i") ?></p>
          </li>
        <?php } ?>
      </ol>
    </div>
    <div class="column right">
      <img src="<?php block_field("image-2") ?>" fade="center">
      <ol start="10">
        <?php for ($i = 10; $i <= 19; $i += 1) { ?>
          <li>
            <p><?php block_field("point-$i") ?></p>
          </li>
        <?php } ?>
      </ol>
    </div>
  </div>
</article>