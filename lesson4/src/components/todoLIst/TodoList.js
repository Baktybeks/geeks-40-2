import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.scss';


const TodoList = ({todoList, handleDone, handleDelete,handleEdit}) => {
    const [currentEdit, setCurrentEdit] =useState(null)
    console.log(currentEdit);
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo=><Todo
                    key={todo.id}
                    todo={todo}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    setCurrentEdit={setCurrentEdit}
                    isEdit={currentEdit===todo.id}
                />)
            }
        </ul>
    );
};

export default TodoList;