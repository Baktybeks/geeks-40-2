import React, { useEffect, useState } from 'react';
import User from '../components/user/User';
import classes from './UserPage.module.scss';


export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getAPI = async(API) => {
    const response = await fetch(`${BASE_URL}/${API}`);
    const data = await response.json();
    console.log(data);
    return data;
};
const UserPage = () => {
    const [ users, setUsers ] = useState([]);
    const [ user, setUser ] = useState([]);
    console.log(users,'55555555555555');

    const getAPIUser = async(API, id) => {
        console.log(API, id,'API, id');
        const response = await fetch(`${BASE_URL}/${API}/${id}`);
        const data = await response.json();
        setUser(data)
        console.log(data);
        return data;
    };

    useEffect(() => {
        getAPI('users').then(response => setUsers(response));
    }, []);

    return (
        <div className={classes.list}>
            {
                users.map(item => <User user={item} getApiUser={getAPIUser} userDetails={user}/>)
            }
        </div>
    );
};

export default UserPage;