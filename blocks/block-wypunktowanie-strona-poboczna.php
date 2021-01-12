<article class="pierwsze-dni wrapper-responsive-mb">
  <h2><?php block_field("title") ?></h2>
  <ul class="colorful-list">
    <?php for($i = 1; $i <= 12; $i += 1) { ?>
      <li>
        <p><?php block_field("point-$i") ?></p>
      </li>
    <?php } ?>
  </ul>
</article>