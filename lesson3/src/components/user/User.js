import React from 'react';
import classes from './User.module.scss';

const User = ({name, age, email}) => {
    return (
        <div className={classes.user}>
            <div className={classes.user_name}>{name}</div>
            <div className={classes.user_age}>{age}</div>
            <div className={classes.user_email}>{email}</div>
        </div>
    );
};

export default User;