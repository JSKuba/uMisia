<?php get_header(); ?>

<main>
  <section class="page-content page-<?php the_ID() ?>">
    <?php the_content() ?>
  </section>
</main>


<?php get_footer(); ?>