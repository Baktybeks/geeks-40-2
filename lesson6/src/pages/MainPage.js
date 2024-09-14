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
import TodoPage from './TodoPage';
import UserPage from './UserPage';
import FormPage from './formPage/FormPage';


const MainPage = () => {

    const [ show2, setShow2 ] = useState(false);

    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };

    return (
        <>
            {/*<UserPage/>*/}
            {/*<TodoPage/>*/}
            {/*<Count/>*/}
            <FormPage/>
            {/*<h1>{inputValue}</h1>*/}

            {/*{*/}
            {/*    show2 && <Modal handleShow={handleShow2}>*/}
            {/*        <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>*/}
            {/*    </Modal>*/}
            {/*}*/}
            {/*<button onClick={handleShow2}>Открыть2</button>*/}

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