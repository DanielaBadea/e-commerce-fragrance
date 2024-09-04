import React from 'react';
import css from './Contacts.module.css';
import { FaLocationDot } from "react-icons/fa6";
import StoreMap from '../../Components/Map/Map';
import { MdSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import CustomerService from '../../Components/CustomerService/CustomerService';

const Contacts = () => {
  return(
    <div className={css.wrapper}>
      <StoreMap/>
      <div className={css.infoContact}>
        <h2>Contactează-ne</h2>
        <div className={css.containerContact}>
          <p>Centrul nostru de asistență pentru clienți este disponibil de luni până vineri, cu excepția sărbătorilor legale, de la <span className={css.time}>9:00 - 18:00</span></p>
          <p className={css.location}><FaLocationDot/> Str. Libertatii, nr. 22, ap. 4</p>
          <div className={css.links}>
          <a href="tel:+40767366776" className={css.contactLink}>
            <MdSmartphone className={css.icon}/> +40 767 366 776
          </a>
          <a href="mailto:comenzi@fragrance.ro" className={css.contactLink}>
            <MdEmail className={css.icon}/> comenzi@fragrance.ro
          </a>
          </div>
        </div>
        <CustomerService/>
      </div>

    </div>
  )
};

export default Contacts;
