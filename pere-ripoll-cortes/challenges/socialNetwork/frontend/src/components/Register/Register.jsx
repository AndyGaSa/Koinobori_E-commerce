/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [gender, setGender] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');

  const sendForm = async () => {
    await axios.post('api/users/',
      {
        name,
        age,
        eyeColor,
        gender,
        favoriteFruit,
      });
  };

  return (
    <>
      <form className="form">
        <label>
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          EyeColor:
          <input type="text" onChange={(e) => setEyeColor(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          FavoriteFruit:
          <input type="text" onChange={(e) => setFavoriteFruit(e.target.value)} />
        </label>
        <button type="submit" onClick={sendForm}>Send</button>

      </form>
    </>
  );
}
