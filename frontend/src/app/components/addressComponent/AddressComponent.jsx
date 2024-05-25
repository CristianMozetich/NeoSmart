import React from 'react';

const AddressComponent = ({ title, addressLines }) => (
  <div className="flex flex-col md:items-start items-center m-2">
    <h1 className="font-bold">{title}</h1>
    {addressLines.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
);

export default AddressComponent;
