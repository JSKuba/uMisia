<article class="do-pobrania">
    <h3 fade="right"><?php block_field("title") ?></h3>
    <ul class="linki wrapper-responsive-mb">
        <?php for($i = 1; $i <= 2; $i += 1) { ?>
        <li fade="left">
            <a href="<?php block_field("file-$i") ?>" download><?php block_field("name-$i") ?></a>
        </li>
        <?php } ?>
    </ul>
</article>