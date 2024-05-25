import React from 'react';

const LinkListComponent = ({ links }) => (
  <ul className="flex flex-col items-center md:items-start">
    {links.map((link, index) => (
      <li key={index} className="hover:text-neoBrandTertiary cursor-pointer transition-all">
        {link}
      </li>
    ))}
  </ul>
);

export default LinkListComponent;
