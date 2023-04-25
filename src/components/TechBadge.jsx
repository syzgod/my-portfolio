import React from 'react';

const TechBadge = ({ badgeImg }) => {
  return badgeImg?.map((img, index) => (
    <img key={index} className='max-w-fit m-1' src={img} alt='' />
  ));
};

export default TechBadge;
