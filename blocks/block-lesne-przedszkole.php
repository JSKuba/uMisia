<article id="lesne-przedszkole">

  <h3 fade="right"><?php block_field("title") ?></h3>

    <div class="wrapper">

        <div class="primary-top-wrapper">
            <div class="primary-top">
                <h4><?php block_field("title-1") ?></h4>
            </div>
        </div>

        <div class="primary-middle" style="background-image: url(<?php block_field("background-image") ?>)">

            <ul class="primary-list">
                <?php for($i = 1; $i <= 3; $i += 1) { ?>
                    <li><?php block_field("text-1-$i") ?></li>
                <?php } ?>
            </ul>

            <aside class="secondary-wrapper">
                <div class="secondary-top">
                    <h4><?php block_field("title-2") ?></h4>
                </div>
                <div class="secondary-middle">
                    <ul class="secondary-list">
                        <?php for($i = 1; $i <= 3; $i += 1) { ?>
                            <li><?php block_field("text-2-$i") ?></li>
                        <?php } ?>
                    </ul>
                </div>
            </aside>

        </div>

        <footer class="primary-bottom-wrapper">
            <div class="primary-bottom">
                <span><?php block_field('footer-text') ?></span>
                <a href="#"><?php block_field('footer-button') ?></a>
            </div>
        </footer>
        
    </div>

</article>