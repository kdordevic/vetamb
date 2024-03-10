import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/About.css";
import { motion } from "framer-motion";


function About() {
  const { t } = useTranslation();
    return (
      <motion.main
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="photo-about">
          <div className="photo-about-1"></div>
          <div className="photo-about-2"></div>
        </div>
        <div className="text-about">
          <h1>{t("o nama")}</h1>
          <p>
            {t("tekst o nama")} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio quasi, labore est vitae quos odit
            itaque exercitationem soluta magni dolorem veniam qui praesentium
            dignissimos molestiae nemo nam, magnam nesciunt. Adipisci.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            quasi, labore est vitae
            nam, magnam nesciunt. Adipisci.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Distinctio quasi, labore est vitae
            quos odit itaque exercitationem soluta magni dolorem veniam qui
            praesentium dignissimos
            <br />
            molestiae nemo nam, magnam nesciunt. Adipisci.Distinctio quasi,
            labore est vitae quos odit itaque exercitationem soluta magni
            dolorem veniam qui praesentium dignissimos molestiae nemo nam,
            magnam nesciunt. Adipisci.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio quasi, labore est vitae
            <br />
            quos odit itaque exercitationem soluta magni dolorem veniam qui
            praesentium dignissimos molestiae nemo nam, magnam nesciunt.
            Adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio quasi, labore est vitae quos odit itaque exercitationem
            soluta magni dolorem veniam qui praesentium dignissimos molestiae
            nemo
            <br />
            nam, magnam nesciunt. Adipisci.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Distinctio quasi, labore est vitae
            quos odit itaque exercitationem soluta magni dolorem veniam qui
            praesentium dignissimos
            <br />
            molestiae nemo nam, magnam nesciunt. Adipisci.
          </p>
          {/* <div className="photo-about-3"></div> */}
          <motion.div
            className="photo-about-3"
            initial={{
              y: 300
            }}
            whileInView={{
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
                repeat:5
              },
            }}
          />
        </div>
      </motion.main>
    );
}

export default About
