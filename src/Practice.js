import React from 'react';
import articles from './articles.js';
import { useTranslation } from "react-i18next";
import { i18n } from "./App.js"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import  "./style/Practice.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import './locales/photos/aboodi-vesakaran-LmZsF4tnUR0-unsplash.jpg';
import './locales/photos/ACIDRectoverso1.jpg';
import './locales/photos/andriyko-podilnyk-0R7_yBljvgg-unsplash.jpg';
import './locales/photos/david-kohler-wkA0d5fVt1Y-unsplash.jpg';
import './locales/photos/jametlene-reskp-VDrErQEF9e4-unsplash.jpg';
import './locales/photos/jamie-street-wcO2PWLuQ3U-unsplash.jpg';
import './locales/photos/karsten-winegeart-loJL4ijUobg-unsplash.jpg';
import './locales/photos/krista-mangulsone-9gz3wfHr65U-unsplash.jpg'


function Practice() {
  // articles = JSON.parse(articles);
  const example = articles.map((article) => {
   
    const { id } = article;
    const translatedTitle = i18n.t(article.title);
    const translatedText = i18n.t(article.text);

    return (
      <section key={id}>
        <h3>{translatedTitle}</h3>
        <div className="slideshow">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider className="slider">
              {article.img.map((slide, index) => {
                return (
                  <Slide index={index} key={index}>
                    <div
                      className="slide"
                      style={{
                        backgroundImage: `url(${slide})`,
                      }}
                    ></div>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className="back">
              <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonBack>
            <ButtonNext className="next">
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonNext>
          </CarouselProvider>
        </div>
        <p>{translatedText}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsum
          magni dolor reprehenderit dolorum ullam enim distinctio, officia
          laboriosam consequuntur delectus maxime eveniet sequi porro fuga rep
          onsectetur sed consequuntur voluptates? Laboriosam quasi, eligendi
          magni aut hic atque soluta eaque dolore ad voluptates natus molestiae
          nobis qui quis repellendus eveniet amet recusandae libero. Fugiat
          cumque dolorem molestias nesciunt reprehenderit inventore ut maxime
          quis assumenda obcaecati voluptatibus quae odit sit numquam non
          voluptatem quod exercitationem nulla alias, est soluta porro saepe
          modi? Repudiandae aspernatur ipsa quam earum quisquam, minima
          asperiores fuga consectetur assumenda distinctio possimus iure
          dignissimos sapiente sint delectus dolor excepturi autem perspiciatis,
          int voluptate doloribus rerum sunt harum saepe consequuntur ullam odit
          illum, quaerat possimus suscipit quisquam architecto ipsam et delectus
          quas nam
        </p>
      </section>
    );
  });
  const { t } = useTranslation();
   return (
      <main className="practice">
       <h1>{t("praksa tekst")}</h1>
        { example }
      </main>
    );
}

export default Practice
