import React from 'react';
import './../styles/RepList.css';

function RepList({ list, repSelection }) {
  return (
    <div>
      <h2>
        List / <span className='list-span-highlight'>Representatives</span>
      </h2>
      <section>
        <div className='list-header'>
          <span>Name</span>
          <span>Party</span>
        </div>
        {
          list.map((representative, i) => {
            const { name, party } = representative;
            return (
              <div key={i} className='list-representative-row'>
                <span onClick={() => repSelection(representative)} className='list-rep-name'>{name}</span>
                <span>{party.slice(0, 1)}
                </span>
              </div>
            )
          }
          )
        }
        <div>

        </div>
      </section>
    </div>
  )
}

export default RepList;