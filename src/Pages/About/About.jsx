import React from "react";
import css from './About.module.css';

const About = () => {
    return(
        <div className={css.about}>
        <section className={css.intro}>
          <p>Bine ați venit la Fragrance, unul dintre cei mai importanți distribuitori de parfumuri de pe piață. La Fragrance, ne mândrim cu oferirea unei game variate de parfumuri de calitate superioară pentru bărbați,femei cât și pentru casă, toate provenind de la producători și furnizori de renume mondial.</p>
        </section>
        <div className={css.wrapperInfo}>
        <section className={css['company-info']}>
          <h2>Cine suntem?</h2>
          <p><strong>FRAGRANCE PARF DOC SRL</strong></p>
          <p>Cod fiscal: RO70326518</p>
          <p>Număr înregistrare: J55/161/2015</p>
          <p>Sediu social: Mun. Alexandria, Str. Libertății, nr. 22, ap. 4</p>
        </section>
        <section className={css.offer}>
          <h2>Ce oferim?</h2>
          <p>La Fragrance, selectăm cu atenție fiecare parfum pentru a ne asigura că vă oferim doar produse de cea mai înaltă calitate. Fie că sunteți în căutarea unui parfum clasic sau a unuia modern și inovator, colecția noastră vastă acoperă toate preferințele și ocaziile.</p>
        </section>
        <section className={css['why-choose-us']}>
          <h2>De ce să ne alegeți pe noi?</h2>
          <ul>
            <li><strong>Calitate garantată:</strong> Toate produsele noastre sunt autentice și provin direct de la producători și furnizori de top.</li>
            <li><strong>Livrare rapidă:</strong> După plasarea comenzii, parfumul va fi livrat în termen de 1-3 zile lucrătoare prin serviciul de curierat Cargus. Ne asigurăm că produsele noastre ajung la tine în cel mai scurt timp posibil, pentru ca tu să te poți bucura de ele fără întârziere.</li>
          </ul>
        </section>
        <section className={css.contact}>
          <h2>Contact</h2>
          <p>Dacă aveți întrebări sau nevoie de asistență, nu ezitați să ne contactați:</p>
          <p>Telefon: +40 767 366 776</p>
          <p>Email: <a href="mailto:comenzi@fragrance.ro">comenzi@fragrance.ro</a></p>
          <p>Suntem aici pentru a vă oferi cea mai bună experiență de cumpărături și pentru a ne asigura că găsiți parfumul perfect care să vă completeze personalitatea.</p>
        </section>
        </div>
        
      </div>
    )
}

export default About;