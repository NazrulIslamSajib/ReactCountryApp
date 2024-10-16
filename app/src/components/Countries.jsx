import React from 'react';
import { v4 as uuidv4 } from 'uuid';  
import Country from './Country'; 
import style from './Countries.module.css';

const Countries = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { ...country, id: uuidv4() }; // Spread country properties and add id
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
};

export default Countries;
