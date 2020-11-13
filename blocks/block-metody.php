<article id="metody">
  <h3><?php block_field("title") ?></h3>
  <div id="metody-container">

    <?php for($i = 1; $i <= 6; $i += 1) { ?>
        <div class="metody-card-wrapper">
          <div class="metody-card">
            <span><?php block_field("metoda-$i") ?></span>
            <figure class="metody-img-container">
              <img class="style-svg" src="<?php block_field("metoda-$i-img") ?>"/>
            </figure>
            <p><?php block_field("metoda-$i-desc") ?></p>
          </div>
        </div>
    <?php } ?>

  </div>
</article>