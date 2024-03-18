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
        <div className="main-photo about-main-photo"></div>
        <section>
          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
              },
            }}
            className="photo-about first-photo"
          ></motion.div>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="text-about first-text"
          >
            <h1>{t("o nama")}</h1>
            <p>
              {t("tekst o nama")} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Distinctio quasi, labore est vitae quos odit
              itaque exercitationem soluta magni dolorem veniam qui praesentium
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
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.8,
              },
            }}
            className="text-about second-text"
          >
            <p>
              {t("tekst o nama")} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Distinctio quasi, labore est vitae quos odit
              itaque exercitationem soluta magni dolorem veniam qui praesentium
              dignissimos molestiae nemo nam, magnam nesciunt. Adipisci.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
              quasi, labore est vitae nam, magnam nesciunt. Adipisci.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
              quasi, labore est vitae quos odit itaque exercitationem soluta
              magni dolorem veniam qui praesentium dignissimos
              <br />
              molestiae nemo nam, magnam nesciunt. Adipisci.Distinctio quasi,
              labore est vitae quos odit itaque exercitationem soluta magni
              dolorem veniam qui praesentium dignissimos molestiae nemo nam,
              magnam nesciunt. Adipisci.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Distinctio quasi, labore est vitae
            </p>
          </motion.div>

          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="photo-about second-photo"
          ></motion.div>
        </section>
      </motion.main>
    );
}

export default About
