import React from 'react';
import './../styles/RepInfo.css';

function RepInfo({ selectedRep }) {
  const { name, district, phone, office, state, link } = selectedRep;
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
          {name && district ?
            `District ${district} (${state})` :
            name && !district ?
              'N/A' : 'District'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? phone : 'Phone'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? office : 'Office'}
        </span>
        <span className={!name ? 'info-details-placeholder' : null}>
          {name ? (<a href={link}>{link}</a>) : 'Website'}
        </span>
      </div>
    </section>
  )
}

export default RepInfo;