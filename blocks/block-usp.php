<article id="usp">
    <div id="usp-container" class="wrapper-responsive-mb">
        <?php for($i = 1; $i <= 4; $i += 1) { ?>
            <div class="usp-card-wrapper" fade="center">
                <div class="usp-card">
                    <img class="style-svg" src="<?php block_field("icon-$i") ?>"/>
                    <h3 class="usp-counter" fade="callback" data-usp-limit="<?php block_field("title-$i") ?>" data-usp-time="3000" data-usp-fps="60" <?php if ($i == 2 || $i == 3) { ?> data-usp-more="true" <?php } ?>>
                        <?php block_field("title-$i") ?>
                    </h3>
                    <p><?php block_field("desc-$i") ?></p>
                </div>
            </div>
        <?php } ?>
    </div>
</article>


