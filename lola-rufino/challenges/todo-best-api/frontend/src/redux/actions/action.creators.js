import axios from 'axios';
import actionTypes from './action.types';

const fetchTask = () => {
    
}

const fetchAllTasks = () => ((dispatch) => (
    axios.get('http://localhost:5000/api/task', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Acces-Control-Allow-Methods': 'GET'
        },
        responseType: 'json'
    })
    .then((response) => {
        dispatch(fetchTask(response.data))
    })
    .catch((error) => {new Error(error)})
));