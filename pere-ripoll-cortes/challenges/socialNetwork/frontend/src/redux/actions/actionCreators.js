/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionsType from './actionsType';

async function loadUsers(dispatch) {
  const { data } = await axios.get('/api/users');

  dispatch({
    type: actionsType.LOAD_USERS,
    data,
  });
}

async function updateFriends(id, friendId) {
  await axios.put(`/api/users/${id}`, {
    friends: [{ _id: friendId }],
  });
}

async function deleteFriend(id, friendId) {
  const { data } = await axios.get(`/api/users/${id}`);
  const dataUpdate = data.friends.filter((enemy) => enemy._id.toString() !== friendId);
  const put = await axios.put(`/api/users/${id}`, {
    friends: [{ _id: dataUpdate[0]._id }],
  });
  console.log(put);
  console.log(dataUpdate[0]._id);
}

async function updateEnemies(id, friendId) {
  await axios.put(`/api/users/${id}`, {
    adversaries: [{ _id: friendId }],
  });
}

async function deleteEnemy(id, enemyId) {
  const { data } = await axios.get(`/api/users/${id}`);
  const test = data.adversaries.filter((enemy) => enemy._id !== enemyId);
  await axios.put(`/api/users/${id}`, {
    friends: data.adversaries.filter((enemy) => enemy._id !== enemyId),
  });
  // console.log(put);
  console.log(test);
}

export {
  loadUsers,
  updateFriends,
  updateEnemies,
  deleteFriend,
  deleteEnemy,
};
