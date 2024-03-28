import React from "react";
import Image from "next/image";
import Link from "next/link";
import eleven from "public/images/portfolio/eleven.png";
import twelve from "public/images/portfolio/twelve.png";
import thirteen from "public/images/portfolio/thirteen.png";
import fourteen from "public/images/portfolio/fourteen.png";
import fifteen from "public/images/portfolio/fifteen.png";
import sixteen from "public/images/portfolio/sixteen.png";
import seventeen from "public/images/portfolio/seventeen.png";
import eighteen from "public/images/portfolio/eighteen.png";

const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="https://adal-group.vercel.app/">
                  <Image src={eleven} alt="Image" style={{width: 690, height: 706}} />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="https://adal-group.vercel.app/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="https://adal-group.vercel.app/">строительная компания Adal Group</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="https://alinvest.kz/">
                  <Image src={twelve} alt="Image" style={{width: 690, height: 706}}/>
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="https://alinvest.kz/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="https://alinvest.kz/">Инвестиционная компания Tiada</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="https://aliyapsiholog.tilda.ws/">
                  <Image src={fifteen} alt="Image" style={{width: 330, height: 419}} />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="https://aliyapsiholog.tilda.ws/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="https://aliyapsiholog.tilda.ws/">Персональный веб-сайт Турдугуловой Алии</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="http://sarakudaibergen.psy.tilda.ws/">
                  <Image src={sixteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="http://sarakudaibergen.psy.tilda.ws/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="http://sarakudaibergen.psy.tilda.ws/">Персональный веб-сайт Сары Кудайберген</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="http://test.psiholog.tilda.ws/">
                  <Image src={seventeen} alt="Image" style={{width: 330, height: 419}}/>
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="http://test.psiholog.tilda.ws/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="http://test.psiholog.tilda.ws/">Персональный веб-сайт Жанны Кайратовны</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="https://marat.miratovich.tilda.ws/">
                  <Image src={eighteen} alt="Image"style={{width: 330, height: 419}} />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="https://marat.miratovich.tilda.ws/">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="https://marat.miratovich.tilda.ws/">Персональный веб-сайт Марата Миратовича</Link>
                </h3>
              </div>
            </div>
          </div>
          {/*<div className="col-12 col-lg-6">*/}
          {/*  <div className="portfolio-m__single topy-tilt fade-top">*/}
          {/*    <div className="thumb">*/}
          {/*      <Link href="service-single">*/}
          {/*        <Image src={thirteen} alt="Image" />*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*    <div className="content">*/}
          {/*      <div className="tr">*/}
          {/*        <Link href="service-single">*/}
          {/*          <i className="icon-arrow-top-right"></i>*/}
          {/*        </Link>*/}
          {/*      </div>*/}
          {/*      <h3 className="light-title-lg">*/}
          {/*        <Link href="service-single">LMS web application</Link>*/}
          {/*      </h3>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="col-12 col-lg-6">*/}
          {/*  <div className="portfolio-m__single topy-tilt fade-top">*/}
          {/*    <div className="thumb">*/}
          {/*      <Link href="service-single">*/}
          {/*        <Image src={fourteen} alt="Image" />*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*    <div className="content">*/}
          {/*      <div className="tr">*/}
          {/*        <Link href="service-single">*/}
          {/*          <i className="icon-arrow-top-right"></i>*/}
          {/*        </Link>*/}
          {/*      </div>*/}
          {/*      <h3 className="light-title-lg">*/}
          {/*        <Link href="service-single">LMS web application</Link>*/}
          {/*      </h3>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Больше..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
