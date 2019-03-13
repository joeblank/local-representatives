import React from 'react';
import './../styles/Dropdown.css';

function Dropdown({ list, updateSelection }) {
  return (
    <>
      <select onChange={({ target }) => updateSelection(target.value)}>
        {/* 
          I am only using the listItem as a key (prop below) value because each item
          in the list for representatives and state abbreviations is unique. None of 
          the list values will ever be repeated. I am using the listItem value to stand
          in place of a unique ID.
        */}
        {list.map(listItem => <option key={listItem}>{listItem}</option>)}
      </select>
    </>
  )
}

export default Dropdown;