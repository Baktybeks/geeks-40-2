import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import classes from './FormPage.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';


const regex = /^\d+$/;

const schema = Yup.object().shape({
    name: Yup.string().required('обязательное поле').min(2, 'Необходимо 2'),
    name2: Yup.string().required('обязательное поле').min(2, 'Необходимо 2'),
    age: Yup.string().required('обязательное поле').matches(regex, 'только цифры').min(5, 'минимум 5')
});
const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        clearErrors,
        setValue,
        reset, control
    } = useForm({
        defaultValues: {
            age: 18,
            name: 'Kuban'
        },
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log(data);
    };

    const error = (data) => {
        console.log(data);
    };

    const name = watch('name');

    console.log(errors);
    return (
        <div>
            {
                <h1>{name}</h1>
            }
            <form className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <Controller name={'name2'}
                            control={control}
                            render={({ field }) =>
                                (
                                    <input {...field} type="text"/>
                                )}
                />

                {
                    errors?.name2?.message && <p>{errors.name2.message}</p>
                }
                <input
                    type="text"
                    placeholder="НАапишите имя"
                    aria-invalid={errors.name ? true : false}
                    {
                        ...register('name')
                    }
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input type="text" placeholder="Напишите возраст"
                       {
                           ...register('age')
                       }
                       aria-invalid={errors.name ? true : false}
                />
                {
                    errors?.age?.message && <p>{errors.age.message}</p>
                }
                <button type="submit">Отправить</button>
                <button type="button" onClick={() => setValue('name', 'Bakyt')}>добавить имя</button>
                <button type="button" onClick={() => reset()}>очистить</button>
            </form>
        </div>
    );
};

export default FormPage;