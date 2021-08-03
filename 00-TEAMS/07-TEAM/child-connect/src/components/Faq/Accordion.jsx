import React, { useState } from 'react';
import './Faq.css';

export default function Accordion(title, body) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Faq">
      <div className="Faq__accordeon">
        <div onClick={() => setIsOpen(!isOpen)} className="accordeon-header">
          <h3>
            {title}
          </h3>
          <p className="accordion-indicator">
            {isOpen ? '+' : '-'}
          </p>
        </div>
        {isOpen && (
          <div className="accordeon-body">
            {body}
          </div>
        )}
      </div>
    </div>
  );
}
