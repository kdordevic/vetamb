import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function VerticalSlider() {
  const { scrollY } = useScroll();
  const slideDown = useSpring(useTransform(scrollY, [0, 1200], [0, 600]), {
    stiffness: 90,
    damping: 30,
    mass: 0.25,
  });
  const slideUp = useSpring(useTransform(scrollY, [0, 1200], [0, -600]), {
    stiffness: 90,
    damping: 30,
    mass: 0.25,
  });

  return (
    <div>
      <motion.div
        style={{ y: slideDown }}
        className="vertical-slider v-s-one"
      >
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/hannah-grace-fk4tiMlDFF0-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/andriyko-podilnyk-0R7_yBljvgg-unsplash.jpg")`,
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-piya-nimityongskul-2883510.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/tim-umphreys-M-svG1XYiHs-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/yoonjae-baik-FXr_SnSAuOc-unsplash.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-daka-12238273.jpg")`,
            backgroundPosition: "bottom",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-steshka-willems-1591939.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/hannah-grace-fk4tiMlDFF0-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
      </motion.div>
      <motion.div
        style={{ y: slideUp }}
        className="vertical-slider v-s-two"
      >
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-pixabay-208773.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-daniyal-ghanavati-109892.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/krystian-tambur-FT9SsFEXqF4-unsplash.jpg")`,
            backgroundPosition: "right",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/jametlene-reskp-VDrErQEF9e4-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-bekka-mongeau-982314.jpg")`,
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/ejsoq-ZFid7KPqPbo-unsplash.jpg")`,
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/andriyko-podilnyk-0R7_yBljvgg-unsplash.jpg")`,
            backgroundPosition: "top",
          }}
        ></div>
      </motion.div>
      <motion.div
        style={{ y: slideDown }}
        className="vertical-slider v-s-three"
      >
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-moon-bhuyan-2122825.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-pixabay-255435.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-imsogabriel-stock-2053815.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/krista-mangulsone-9gz3wfHr65U-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-pixabay-432991.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/david-kohler-wkA0d5fVt1Y-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/lydia-tan-f5KQq4Wfxg8-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/luiza-sayfullina-9giow4jXrzM-unsplash.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/hannah-grace-fk4tiMlDFF0-unsplash.jpg")`,
          }}
        ></div>
      </motion.div>
      <motion.div
        style={{ y: slideUp }}
        className="vertical-slider v-s-four"
      >
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/hannah-grace-fk4tiMlDFF0-unsplash.jpg")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-pixabay-416160.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-damianum-castrum-145378.jpg")`,
            backgroundPosition: "left",
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-pixabay-326012.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-burst-374898.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/pexels-valeria-boltneva-1805164.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/olga-andreyanova-pgrJI-Rijgk-unsplash.jpg")`,
          }}
        ></div>
        <div
          className="vertical-slide"
          style={{
            backgroundImage: `url("././photos/olga-andreyanova-pgrJI-Rijgk-unsplash.jpg")`,
          }}
        ></div>
      </motion.div>
    </div>
  );
}
export default VerticalSlider
