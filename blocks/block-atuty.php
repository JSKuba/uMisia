<article id="atuty">
  <div id="atuty-container-wrapper">
    <h3><?php block_field("title") ?></h3>
    <div id="atuty-container">
      <?php for($i = 1; $i <= 5; $i += 1) { ?>
        <div id="atut-<?= $i ?>" class="atut">
          <span class="atut-number atut-inner"><?= $i ?></span>
          <span class="atut-name atut-inner"><?php block_field("atut-$i") ?></span>
        </div>
      <?php } ?>
    </div>
  </div>
</article>