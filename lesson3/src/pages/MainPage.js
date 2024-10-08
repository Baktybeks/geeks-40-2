import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Button from '../components/button/Button';
import Dz1 from '../dz1/Dz1';
import Modal from '../components/modal/Modal';
import { logDOM } from '@testing-library/react';
import Input from '../components/input/Input';
import classes from './MainPage.module.css';
import User from '../components/user/User';
import TodoList from '../components/todoLIst/TodoList';
import Count from '../components/count/Count';


const MainPage = () => {

    const [ show, setShow ] = useState(false);
    const [ show2, setShow2 ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])


    const handleShow = () => {
        setShow(prevState => !prevState);
    };
    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(  prev =>[...prev,
            {
            id: todoList.length+1,
            title: inputValue,
            completed: false
        }])
    }

    const handleDone = (id) => {
        console.log(id);
        todoList.map(todo=>{
            if(id===todo.id) {
                return todo.completed=!todo.completed
            }
        })
        setTodoList([...todoList])
    }

    const handleDelete = (id)=> {
        console.log(id);
    }

    return (
        <>
            {/*<Count/>*/}
            {/*<h1>{inputValue}</h1>*/}
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                >

                </Modal>
            }
            {/*{*/}
            {/*    show2 && <Modal handleShow={handleShow2}>*/}
            {/*        <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>*/}
            {/*    </Modal>*/}
            {/*}*/}
            <Button name={'Открыть'} color={'primary'} action={handleShow}  />
            {/*<button onClick={handleShow2}>Открыть2</button>*/}
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}/>
            {/*<Header/>*/}
            {/*<h1>hello</h1>*/}
            {/*<Dz1 title={'Домашнее задание №1'}/>*/}
            {/*<Button name={'add'} color={'primary'}/>*/}
            {/*<Button name={'delete'} color={'default'}/>*/}
            {/*<Button name={'save'} color={'error'}/>*/}
            {/*<Footer/>*/}
        </>
    );
};

export default MainPage;