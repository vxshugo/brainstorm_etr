import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} style={{width: 200}} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Иманбаева 10, Астана, Казахстан
                </Link>
                <Link href="tel:+77713758699">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +7 771 375 86 99
                </Link>
                <Link href="mailto:info@brainstrm.kz">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@brainstrm.kz
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  Заказать звонок
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Ссылки</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">О нас</Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href="client-feedback">Award Winning</Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link href="portfolio">Портфолио</Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href="contact-us">careers</Link>*/}
                  {/*</li>*/}
                </ul>
              </div>
            </div>
          </div>
          {/*<div className="col-12 col-lg-5 col-xl-4">*/}
          {/*  <div className="footer__single">*/}
          {/*    <div className="footer__single-intro">*/}
          {/*      <h5>Subscribe our newsletter</h5>*/}
          {/*    </div>*/}
          {/*    <div className="footer__single-content">*/}
          {/*      <p>*/}
          {/*        Welcome to our digital agency We specialize in helping*/}
          {/*        business most like yours succeed online.*/}
          {/*      </p>*/}
          {/*      <div className="footer__single-form">*/}
          {/*        <form action="#" method="post">*/}
          {/*          <div className="input-email">*/}
          {/*            <input*/}
          {/*              type="email"*/}
          {/*              name="subscribe-news"*/}
          {/*              id="subscribeNews"*/}
          {/*              placeholder="Enter Your Email"*/}
          {/*              required*/}
          {/*            />*/}
          {/*            <button type="submit" className="subscribe">*/}
          {/*              <i className="fa-sharp fa-solid fa-paper-plane"></i>*/}
          {/*            </button>*/}
          {/*          </div>*/}
          {/*        </form>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> Brainstorm by{" "}
                      <Link
                        
                        href="/"
                        target="_blank"
                      >
                        ИП "SVOY" БИН: 020608551294{" "}
                      </Link>
                      . Все права защищены
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    {/*<Link href="https://www.facebook.com/" target="_blank">*/}
                    {/*  <i className="fa-brands fa-facebook-f"></i>*/}
                    {/*</Link>*/}
                    {/*<Link href="https://www.twitter.com/" target="_blank">*/}
                    {/*  <i className="fa-brands fa-twitter"></i>*/}
                    {/*</Link>*/}
                    {/*<Link href="https://www.pinterest.com/" target="_blank">*/}
                    {/*  <i className="fa-brands fa-linkedin-in"></i>*/}
                    {/*</Link>*/}
                    <Link href="https://www.instagram.com/brainstorm_etr/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
