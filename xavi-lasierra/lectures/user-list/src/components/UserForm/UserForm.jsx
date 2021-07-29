/* eslint-disable react/prop-types */
import React from 'react';

function UserForm({
  user, changeUser, changeAddressUser, changeCompanyUser
}) {
  return (
    <form className="user">
      <label htmlFor="username">
        Username:
        <br />
        <input name="username" type="text" value={user?.username} onChange={changeUser} />
      </label>
      <label htmlFor="name">
        Complete name:
        <br />
        <input name="name" type="text" value={user?.name} onChange={changeUser} />
      </label>
      <label htmlFor="email">
        Email:
        <br />
        <input name="email" type="email" value={user?.email} onChange={changeUser} />
      </label>
      <div>
        <p>Address:</p>
        <label htmlFor="street">
          Street:
          <br />
          <input name="street" type="text" value={user?.address?.street} onChange={changeAddressUser} />
        </label>
        <label htmlFor="suite">
          Suite:
          <br />
          <input name="suite" type="text" value={user?.address?.suite} onChange={changeAddressUser} />
        </label>
        <label htmlFor="city">
          City:
          <br />
          <input name="city" type="text" value={user?.address?.city} onChange={changeAddressUser} />
        </label>
      </div>
      <label htmlFor="phone">
        Phone:
        <br />
        <input name="phone" type="tel" value={user?.phone} onChange={changeUser} />
      </label>
      <label htmlFor="website">
        Website:
        <br />
        <input name="website" type="url" value={user?.website} onChange={changeUser} />
      </label>
      <div>
        <p>Company:</p>
        <label htmlFor="name">
          Name:
          <br />
          <input name="name" type="text" value={user?.company?.name} onChange={changeCompanyUser} />
        </label>
        <label htmlFor="catchPhrase">
          Catch Phrase:
          <br />
          <input name="catchPhrase" type="text" value={user?.company?.catchPhrase} onChange={changeCompanyUser} />
        </label>
        <label htmlFor="bs">
          Business Services:
          <br />
          <input data-testid={`${user?.username}-bs`} name="bs" type="text" value={user?.company?.bs} onChange={changeCompanyUser} />
        </label>
      </div>
    </form>
  );
}

export default UserForm;
