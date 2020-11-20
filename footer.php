<footer class="main-footer">
  <div class="footer-top">
    <div class="footer-info">
      <h4>Przedszkole UMisia</h4>
      <div class="footer-info-contact">
        <p>
          <span>13-200 Działdowo</span>
          <span>ul.Świerkowa 19</span>
        </p>
        <p>
          <span>tel.: 504 576 766</span>
          <span>e-mail: marta@umisia.com</span>
        </p>
      </div>
    </div>
    <nav class="footer-nav">
      <?php 
        wp_nav_menu(
          array(
            'menu' => 'Stopka',
            'container' => ''
          )
        );
      ?>
    </nav>
  </div>
  <div class="footer-bottom">
    <span class="copyright"><b>Przedszkole UMisia &copy; 2020</b></span>
    <span class="creator">Developed by JSKuba</span>
  </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>