import React from 'react';
import { useTranslation } from "react-i18next";
import "./style/Privacy.css";

function Privacy() {
    const { t } = useTranslation();
  return (
    <main className="privacy">
      <div>
        <h1>{t("privacy")}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          blanditiis, ea voluptate debitis recusandae, rerum nisi quis est quae
          ducimus laborum tempora exercitationem autem. Eaque asperiores cumque
          error quo suscipit, magnam minus quasi officia est beatae quaerat
          nobis odio eum quos nesciunt et! Est adipisci, tempora cumque
          quibusdam asperiores voluptatum sed quaerat molestias beatae totam.
          Ducimus repellat consequatur ab. Ipsam, nostrum eum? Quidem, ut a?
          Distinctio voluptate nobis beatae voluptates. Eligendi architecto
          temporibus iusto, modi reiciendis dolor fugiat nobis velit consequatur
          culpa, hic molestias magni odio at sunt numquam. Cupiditate aspernatur
          repellat molestias deserunt doloribus ut ipsa, obcaecati fugit
          voluptatibus.
        </p>
      </div>
      <div className="deco-right">
        <div className='photos'>
          <div className="deco1"></div>
          <div className="deco2"></div>
          <div className="deco3"></div>
        </div>
      </div>
    </main>
  );
}

export default Privacy
