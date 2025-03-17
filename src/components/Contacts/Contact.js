import React from 'react';
import './Contact.css';

function Contacts() {
  // ... your Contacts component code ...
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me!
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:manishbharti.work@gmail.com">
            manishbharti.work@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/manish-bharti"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/manish-bharti
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/mbharti321"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mbharti321
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;