import React from 'react';

const InfoCurd = ({card}) => {
    const {name,dec,icon,bgClass}=card
    return (
        <div className={` text-white p-6 card card-side shadow-xl ${bgClass}`}>
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{dec}</p>
  
  </div>
</div>
    );
};

export default InfoCurd;