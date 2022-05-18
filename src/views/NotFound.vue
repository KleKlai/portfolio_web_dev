<template>
  <div class="not-found-wrapper">
    <div class="leftpart">
      <div class="leftpart_inner">

        <div class="copyright">
          <h4 class="name">Maynard Magallen</h4>
          <p class="job"> Web & Wordpress Developer</p>
          <Social />
        </div>
      </div>
    </div>
    <!-- End .leftpart -->
    <div class="rightpart">
      <div class="rightpart_in">
        <div class="tokyo_tm_section">
          <div class="container">
            <div class="tokyo_tm_error">
              <div class="tokyo_tm_error_inner">
                <h1>404!</h1>
                <h3>Page not found</h3>
                <p>The page you were looking for could not be found.</p>
                <router-link class="ib-button" to="/">Go to Home</router-link>
              </div>
            </div>
            <!-- End .tokyo_tm_error -->
          </div>
        </div>
      </div>
    </div>
    <!-- End .rightpart -->
    <footer class="footer-wrapper">
      <div class="copyright">
          <h4 class="name">Maynard Magallen</h4>
          <p class="job"> Web & Wordpress Developer</p>
          <Social />
      </div>
    </footer>
    <!-- End .footer-wrapper -->
  </div>
</template>
<script>
  import Social from "../components/Social";
  export default {
    components: {
      Social,
    },
    data() {
      return {
        src1: require("../assets/img/slider/1.jpg"),
      };
    },
  };
</script>
