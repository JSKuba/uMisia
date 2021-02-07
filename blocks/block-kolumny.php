<article class="wyprawka">
  <h2 fade="right"><?php block_field("title") ?></h2>
  <div class="columns-wrapper">
    <div class="column left" fade="center">
      <h4><?php block_field("header-l") ?></h4>
      <div class="list-wrapper">
        <ul>
          <?php for($i = 1; $i <= 8; $i += 1) { ?>
            <li><?php block_field("point-$i-l") ?></li>
          <?php } ?>
        </ul>
      </div>
    </div>
    <div class="column right" fade="center">
      <h4><?php block_field("header-r") ?></h4>
      <div class="list-wrapper">
        <ul>
          <?php for($i = 1; $i <= 5; $i += 1) { ?>
            <li><?php block_field("point-$i-r") ?></li>
          <?php } ?>
        </ul>
      </div>
    </div>
  </div>
</article>