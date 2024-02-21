import React from 'react';
import { useTranslation } from "react-i18next";
import "./style/About.css";

function About() {
  const { t } = useTranslation();
    return (
      <main className="about">
        <div className="photo-about"></div>
        <div className="text-about">
          <h1>{t("o nama")}</h1>
          <p>
            {t("tekst o nama")} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio quasi, labore est vitae quos odit
            itaque exercitationem soluta magni dolorem veniam qui praesentium
            dignissimos molestiae nemo nam, magnam nesciunt. Adipisci.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            quasi, labore est vitae
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
        </div>
      </main>
    );
}

export default About
