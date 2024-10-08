import React, { useState } from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';
import { logDOM } from '@testing-library/react';


const Todo = ({ todo, handleDone, handleDelete, handleEdit, setCurrentEdit, isEdit }) => {
    const [editValue, setEditValue] = useState(todo.title)
    console.log(todo);
    return (
        <>
            <li className={`${classes.li} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <Button name={'Edit'} color={'primary'} action={() => setCurrentEdit(todo.id)}/>
                    <Button name={'Done'} color={'default'} action={() => handleDone(todo.id)}/>
                    <Button name={'Delete'} color={'error'} action={() => handleDelete(todo.id)}/>
                </div>
            </li>
            {
                isEdit && <div className={classes.edit}>
                    <input
                        value={editValue}
                        type="text"
                        onChange={(e)=>setEditValue(e.target.value)}/>
                    <Button name={'Save'} color={'primary'} action={()=>handleEdit(
                        {
                            ...todo,
                            title: editValue
                        }
                    )}/>
                    <Button name={'Cancel'} color={'error'}/>
                </div>
            }

        </>
    );
};

export default Todo;