import React from 'react';
import Header from '../components/Header';

export default function UsersView() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState();
  const [inputValue, setInputValue] = useState();

  function createUser() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_USER,
      data: inputValue
    });

    setInputValue('');
  }

  function updateUser() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_USER,
      data: inputValue
    });

    setInputValue('');
  }

  return (
    <>
      <Header />

    </>
  );
}
