/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const sendForm = async () => {
    await axios.post('api/users/',
      {
        name,
        age,
        gender,
      });
  };

  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" onChange={(e) => setGender(e.target.value)} />
        </label>
        <button type="submit" onClick={sendForm}>Send</button>

      </form>
    </>
  );
}
