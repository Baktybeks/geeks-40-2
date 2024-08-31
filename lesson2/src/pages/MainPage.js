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


const MainPage = () => {

    const [ show, setShow ] = useState(false);
    const [ show2, setShow2 ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    console.log(show);
    console.log(inputValue, 'inputValue');

    const handleShow = () => {
        setShow(prevState => !prevState);
    };
    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <h1>{inputValue}</h1>
            {
                show && <Modal handleShow={handleShow}>
                    <Input placeholder={'Введите текст'} onChange={handleChange} value={inputValue}/>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow2}>
                    <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>
                </Modal>
            }
            <button onClick={handleShow}>Открыть</button>
            <button onClick={handleShow2}>Открыть2</button>

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