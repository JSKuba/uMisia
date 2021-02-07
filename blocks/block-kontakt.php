<article class="kontakt wrapper-responsive-mb">
  <h2 fade="right"><?php block_field("title") ?></h2>
  <div class="wrapper">
		<div class="left">
			<ul class="contact-list" fade="center">
					<?php for($i = 1; $i <= 6; $i += 1) { ?>
					<li>
							<p>
									<?php if ($i == 3) { ?> ul. <?php } ?>
									<?php if ($i == 4) { ?> tel: <?php } ?>
									<?php if ($i == 5) { ?> e-mail: <?php } ?>
									<?php if ($i == 6) { ?> nr rach: <?php } ?>
									<?php block_field("text-$i") ?>
							</p>
					</li>
					<?php } ?>
			</ul>
			<div class="buttons-wrapper" fade="left">
					<a id="call-button" href="tel:<?php block_field("text-4") ?>">
							<img class="style-svg" src="<?php block_field('button-img-1') ?>"/>
					</a>
					<a id="mail-button" href="mailto:<?php block_field("text-5") ?>">
							<img class="style-svg" src="<?php block_field('button-img-2') ?>"/>
					</a>
					<a id="facebook-button" href="javascript:void(0);" link="<?php block_field("facebook-fanpage-link") ?>" rel="nofollow noreferrer">
							<img class="style-svg" src="<?php block_field('button-img-3') ?>"/>
					</a>
			</div>
		</div>
  	<div class="right" fade="right">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.577389932651!2d20.194415816100378!3d53.24335157995765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471da55a9213856d%3A0xbffe9b795ffd0e6c!2s%C5%9Awierkowa%2019%2C%2013-200%20Dzia%C5%82dowo!5e0!3m2!1spl!2spl!4v1612473646783!5m2!1spl!2spl" width="100%" height="430" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</div>
	</div>
</article>