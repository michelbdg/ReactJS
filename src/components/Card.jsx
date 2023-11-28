import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div  id="card" className='container'>
        <div className="row">
            <div className="col">
            <h3>{title}</h3>
            <p>{content}</p>
            </div>
        </div>
    </div>
  );
};

export default Card;
