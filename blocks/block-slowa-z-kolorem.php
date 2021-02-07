<article id="zajecia-dodatkowe">

  <h3 fade="right"><?php block_field("title") ?></h3>
  <div class="zajecia-dodatkowe-wrapper wrapper-responsive-mb">

      <?php for($i = 1; $i <= 7; $i += 1) { ?>
        <span id="word-<?=$i?>" class="word" fade="color"><?php block_field("word-$i") ?></span>
      <?php } ?>

    </div>

</article>