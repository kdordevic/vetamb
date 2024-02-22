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


function Practice() {
  // articles = JSON.parse(articles);
  const example = articles.map((article) => {
   
    const { id } = article;
    const translatedTitle = i18n.t(article.title);
    const translatedText = i18n.t(article.text);

    return (
      <section key={id}>
        <div className="rectangle"></div>
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
