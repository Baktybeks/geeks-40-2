import React, { useEffect, useState } from 'react';
import classes from './User.module.scss';
import Button from '../button/Button';
import { BASE_URL } from '../../pages/UserPage';


const User = ({ user, getApiUser, userDetails }) => {
    console.log(userDetails, 'userDetails');
    return (
        <div className={classes.user}>
            <div className={classes.user_name}>{user.name}</div>
            <div className={classes.user_age}>{user.username}</div>
            <div className={classes.user_email}>{user.phone}</div>
            <Button name={'Дополнительно'}
                    action={()=>getApiUser('users',user.id)}
                    color={'default'}/>
            {
                userDetails && userDetails.id === user.id && <div>
                    <div className={classes.user_age}>{userDetails.address.city}</div>
                    <div className={classes.user_age}>{userDetails.company.name}</div>
                    <div className={classes.user_age}>{userDetails.email}</div>
                </div>
            }
        </div>
    );
};

export default User;