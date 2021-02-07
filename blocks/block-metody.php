<article id="metody">
  <h3 fade="right"><?php block_field("title") ?></h3>
  <div id="metody-container" class="wrapper-responsive-mb">

    <?php for($i = 1; $i <= 6; $i += 1) { ?>
        <div class="metody-card-wrapper" fade="left">
          <div class="metody-card" data-toggle="metoda-<?php echo $i ?>">
            <span><?php block_field("metoda-$i") ?></span>
            <figure class="metody-img-container">
              <img class="style-svg" src="<?php block_field("metoda-$i-img") ?>"/>
            </figure>
          </div>
        </div>
        <div class="metoda-desc" data="metoda-<?php echo $i ?>">
        <h5><?php block_field("metoda-$i")?></h5>
        <p class="wrapper-responsive"><?php block_field("metoda-$i-desc") ?></p>
        </div>
    <?php } ?>

  </div>
</article>