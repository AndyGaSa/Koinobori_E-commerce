/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { addOrRemoveAdversarie, loadCurrentUser } from '../../redux/actions/creators/currentUser';

import './AdversariesList.scss';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <div className="adversaries-list">
      <h2>Adversaries</h2>
      <ul>
        {user?.adversaries?.map((adversaries) => (
          <li>
            {adversaries.name}
            <RemoveCircleOutlineIcon onClick={() => dispatch(addOrRemoveAdversarie(userId, adversaries._id, user.adversaries, 'REMOVE_ADVERSARIE'))} />
          </li>
        ))}
      </ul>
    </div>
  );
}
