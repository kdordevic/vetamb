import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Privacy.css";

function Privacy() {
    const { t } = useTranslation();
  return (
    <main className="privacy">
      <div>
        <h1>{t("privacy")}</h1>
        <p>
          Ova politika privatnosti ima za cilj da vam pruži informacije o tome
          kako prikupljamo, koristimo i štitimo vaše lične podatke dok koristite
          naš veb sajt. Molimo vas da pažljivo pročitate ovu politiku kako biste
          razumeli način na koji postupamo sa vašim podacima.
        </p>
        <p>
          1. Prikupljanje informacija: Naš veb sajt koristi Google Analytics kako
          bismo prikupili anonimne statističke podatke o posetiocima,
          uključujući IP adrese, vrstu uređaja, vreme provedeno na sajtu i
          pregledane stranice. Ovi podaci se koriste isključivo u svrhu analize
          posetilaca i unapređenja korisničkog iskustva našeg sajta. Takođe,
          prikupljamo određene osnovne informacije putem kontakt forme na našem
          sajtu u svrhu poslovne saradnje. Ove informacije mogu uključivati vaše
          ime, e-mail adresu i poruku koju nam šaljete.
        </p>
        <p>
          2. Upotreba informacija: Vaše lične podatke prikupljene putem kontakt
          forme i koristimo isključivo u svrhu odgovora na vaše upite i
          ostvarivanja poslovne saradnje. Vaši podaci neće biti prodavani,
          iznajmljivani ili deljeni sa trećim licima bez vaše saglasnosti.
          Podaci prikupljeni putem Google Analytics-a koriste se za analizu
          poseta našem sajtu i poboljšanje njegovog sadržaja i funkcionalnosti.
        </p>
        <p>
          3. Zaštita podataka: Vaši lični podaci čuvaju se na siguran način i
          pristup istima imaju samo ovlašćeni zaposleni koji su obavezni da
          čuvaju vašu privatnost.
        </p>
        <p>
          4. Kolačići (Cookies): Naš veb sajt može koristiti kolačiće radi
          praćenja korisničkog iskustva i statističke analize. Kolačići su male
          datoteke koje se smeštaju na vaš uređaj i omogućavaju nam da bolje
          razumemo kako koristite naš sajt. Možete kontrolisati ili izbrisati
          kolačiće putem postavki svog pregledača.
        </p>
        <p>
          5. Prava korisnika: Imate pravo da zatražite informacije o ličnim
          podacima koje čuvamo o vama, da ih ispravite ili izbrišete, kao i da
          se usprotivite obradi tih podataka. Takođe, imate pravo na prenos
          podataka.
        </p>
        <p className="last-p">
          6. Promene u politici privatnosti: Ova politika privatnosti može biti
          ažurirana s vremena na vreme. Svaka izmena će biti objavljena na ovoj
          stranici, a datum izmene će biti naglašen na vrhu dokumenta. 
         Za sva pitanja ili zahtev za ostvarivanje vaših prava u vezi
          sa zaštitom podataka, možete nas kontaktirati putem sledeće e-mail
          adrese:
        </p>
      </div>
      <div className="deco-right">
        <div className="photos">
          <div className="deco1"></div>
          <div className="deco2"></div>
          <div className="deco3"></div>
        </div>
      </div>
    </main>
  );
}

export default Privacy
