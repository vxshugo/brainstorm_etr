import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  Мы
                  <span className="text-stroke">креативная</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> веб студия
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    Мы являемся компанией полного цикла, специализирующейся на дизайне, разработке и цифровом маркетинге сайтов, SEO, контент-маркетинге и развитии брендов.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">4+</h5>
                      <p className="fw-5">года опыта</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">10+</h5>
                      <p className="fw-5">завершённых проектов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@brainstrm.kz">mail : info@brainstrm.kz</Link>
          <Link href="tel:+77713758699">Call : +7 771 375 86 99</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/brainstorm_etr" target="_blank">
            instagram
          </Link>
          <Link href="https://wa.me/77713758699?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target="_blank">
            What'sapp
          </Link>
        </div>
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="dQw4w9WgXcQ?si=K1pLRv81zS0MRsVa" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
