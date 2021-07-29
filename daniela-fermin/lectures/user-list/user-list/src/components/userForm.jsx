import React from 'react';

export default function UserForm(user, userChange) {
  return (
    <div>
      <span>
        Id:
      </span>
      {user.id}
      <label htmlFor="">
        Name:
        <input type="text" value />
      </label>
      <label htmlFor="">
        Username:
        <input type="text" />
      </label>
      <label htmlFor="">
        Email:
        <input type="text" />
      </label>
      <div>
        <span>Address:</span>
        <label htmlFor="">
          Street:
          <input type="text" />
        </label>
        <label htmlFor="">
          Suite:
          <input type="text" />
        </label>
        <label htmlFor="">
          City:
          <input type="text" />
        </label>
        <label htmlFor="">
          Zipcode:
          <input type="text" />
        </label>
      </div>
      <label htmlFor="">
        Phone:
        <input type="text" />
      </label>
      <label htmlFor="">
        Website:
        <input type="text" />
      </label>
      <div>
        <span>Company:</span>
        <label htmlFor="">
          Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Catchphrase:
          <input type="text" />
        </label>
        <label htmlFor="">
          bs:
          <input type="text" />
        </label>
      </div>
    </div>

  );
}
