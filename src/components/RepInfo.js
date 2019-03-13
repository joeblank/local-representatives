import React from 'react';
import './../styles/RepInfo.css';

function RepInfo({ selectedRep }) {
  const { name, district, phone, office } = selectedRep;
  return (
    <section className='rep-info-container'>
      <h2>Info</h2>
      <div className='info-details-container'>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? name.split(' ')[0] : 'First Name'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? name.split(' ')[1] : 'Last Name'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? district : 'District'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? phone : 'Phone'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? office : 'Office'}
        </span>
      </div>
    </section>
  )
}

export default RepInfo;