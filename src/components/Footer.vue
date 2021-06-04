<template>
  <footer class="site-footer">
    <!--footer-->
    <main class="gradient footer mt-5 mb-5">
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-md-12">
            <img src="../assets/house1.png" alt="House 1" />
            <img src="../assets/house2.png" alt="House 1" />
            <img src="../assets/house3.png" alt="House 3" />
            <img src="../assets/house4.png" alt="House 4" />
          </div>
        </div>
      </div>
    </main>
    <!--footer-->

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <h6>About</h6>
          <p class="">
            Aspire provide world class services which allow properties owners,
            seller and buyer exchange goods and services. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt doloremque consequatur
            iusto et maxime ratione modi voluptatem, asperiores dolorem
            exercitationem temporibus? Officia atque repudiandae quibusdam quia
            nesciunt. Exercitationem, recusandae dignissimos.
          </p>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <h6>Categories</h6>
          <ul class="footer-links inline">
            <li><a href="">Buy</a></li>
            <li><a href="">Sell</a></li>
            <li><a href="">Rent</a></li>
            <li><a href="">Mortgage</a></li>
            <li><a href="">Advertise</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <h6>Quick Links</h6>
          <ul class="footer-links inline">
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Policy & Privacy</a></li>
            <li><a href="">Partnership</a></li>
            <li><a href="">New Properties</a></li>
          </ul>
        </div>
      </div>
      <hr class="small" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy;2020 ALL Right Reserved by
            <a href="">wisdom interconnect</a>
          </p>
        </div>
        <div class="col-md-4 col-sm-6 col-12">
          <ul class="social-icons">
            <li class="">
              <a class="facebook" href=""><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a class="twitter" href=""><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a class="linkedin" href=""><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a class="instagram" href=""><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    109.6deg,
    rga(48, 207, 208, 1) 11.2%,
    rgba(29, 67, 209.1) 92,
    5%
  );
}
.footer {
  background-color: white;
  color: #fff;
}
.footer img {
  width: 20%;
  height: 90%;
  margin-right: 2%;
  margin-left: 2%;

  background-color: whitesmoke;
}
.site-footer {
  background-color: #26272b;
  padding: 0px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0, 5);
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #fff;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #b3b3b3;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #fff;
  text-decoration: none;
}
.footer-links .inline li {
  display: inline-block !important;
}
.site-footer .social-icon {
  text-align: right;
}
.site-footer .social-icon a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6;
  margin-right: 0px;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  /* background-color: #eceeef; */
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #737373;
}
.social-icons a.facebook:hover {
  background-color: #29aafe;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.instagram:hover {
  background-color: #29aafe;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
/* .footer1 {
  border-right: 2px solid whitesmoke;
  height: 300px;
} */
</style>