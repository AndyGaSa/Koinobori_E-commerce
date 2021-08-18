/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Faq.css';

export default function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="faq">
      <div className="faq__accordion">
        <div onClick={() => setIsOpen(!isOpen)} className="accordion__header">
          <h3>
            {title}
          </h3>
          <p className="accordion__indicator">
            {isOpen ? '▲' : '▼'}
          </p>
        </div>
        {isOpen && (
          <div className="accordion__body">
            {body}
          </div>
        )}
      </div>
    </section>
  );
}
