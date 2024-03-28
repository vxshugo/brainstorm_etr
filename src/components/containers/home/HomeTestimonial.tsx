import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sthumb from "public/images/testimonial/s-thumb.png";
import sthumbtwo from "public/images/testimonial/s-thumb-two.png";
import sthumbthree from "public/images/testimonial/s-thumb-three.png";

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };
  return (
    <section className="section testimonial pt-0 position-relative" style={{marginTop: 100}}>
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  отзывы клиентов
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                className="testimonial-s__slider"
              >
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumb} alt="Image" style={{height: 500}} />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              Заказала у них сайт ничего о них не зная. Осталась супер довольна. Весь процесс проходил легко и Эльдар супер профессионал, понимал с полуслова и делал все быстро и как надо.
                              Отличная работа 👌
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Сара Кудайберген</h5>
                            <p>ПСИХОЛОГ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumbtwo} alt="Image" style={{height: 500}}/>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              Обратилась к ним без опыта - результат порадовал! Процесс был легким, понимали с полуслова и делали всё оперативно. Всё получилось идеально. Рекомендую!
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Турдугулова Алия</h5>
                            <p>ПСИХОЛОГ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumbthree} alt="Image" style={{height: 500}}/>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              Как стоматолог с многолетним опытом, я был приятно удивлен качеством работы этой компании. Их профессионализм и внимание к деталям сразу бросились в глаза. Результат превзошел мои ожидания!
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Хайбулин Марат</h5>
                            <p>Стоматолог</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slide-group justify-content-start">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="other-section">
        <Image
          className="other-section-image"
          src={
            nextSlideIndex === 0
              ? sthumb
              : nextSlideIndex === 1
              ? sthumbtwo
              : sthumbthree
          }
          alt="Next Slide Image"
        />
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
