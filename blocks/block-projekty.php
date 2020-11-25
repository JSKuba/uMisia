<article id="projekty">

  <h3><?php block_field("title") ?></h3>
  <div class="projekty-wrapper wrapper-responsive">

    <div id="projekty-container">

      <?php for($i = 1; $i <= 6; $i += 1) { ?>
        <div class="projekt">
          <img src="https://picsum.photos/30<?=$i?>/200" data-number="<?=$i?>"/>
          <div class="projekt-content-wrapper">
            <div class="projekt-content">
              <h4><?php block_field("projekt-$i-title") ?></h4>
              <p><?php block_field("projekt-$i-desc") ?></p>
            </div>
          </div>
        </div>
      <?php } ?>

    </div>
    
    <div class="slider-footer">
      <button class="slider-footer-arrow"><div class="arrow arrow-left"></div></button>
      <div class="slider-footer-pagination">
        <span>1</span>
        <div class="slider-footer-dash"><div class="slider-footer-progress"></div></div>
        <span>6</span>
      </div>
      <button class="slider-footer-arrow"><div class="arrow arrow-right"></div></button>
    </div>

  </div>

</article>