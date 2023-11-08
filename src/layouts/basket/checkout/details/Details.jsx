import React, { useEffect, useState } from 'react'
import { Input } from './input/Input'
import { useSelector } from 'react-redux';
import './Details.sass'

export const Details = () => {
    const [data, setData] = useState({
        name: '',
        currentName: '',
        country: '',
        addres:'',
        hz:'',
        punkt:'',
        pocht: '',
        phone:'',
        email:'',
        primech:''
    });
    const state = useSelector(state => state.basketPrice);

    useEffect(() => {
        if (Object.values(data).includes('')) {
            console.log('Есть не заполненные поля');
        }
    }, [data])

    const handleData = e => {
        console.log(e.target);
        setData(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

  return (
    <>
        <section className='checkout-page-content__left'>
            <p className='checkout-page-content-left__title'>Детали оплаты</p>
            <form className='checkout-page-content-left__form'>
                <section className='checkout-page-content-left__person'>
                    <Input name={'name'} handleData={handleData} topPlaceholder={'Имя*'}/>
                    <Input name={'currentName'} handleData={handleData} topPlaceholder={'Фамилия*'}/>
                </section>
                <Input name={'country'} handleData={handleData} list={['Россия', 'Казахстан']} defaultCity={'Россия'} topPlaceholder={'Страна/регион *'}/>
                <Input name={'addres'} handleData={handleData} topPlaceholder={'Адрес*'} placeholder={'Номер дома и название улицы'}/>
                <Input name={'hz'} handleData={handleData} placeholder={'Крыло, подъезд, этаж и т.д. (необязательно)'}/>
                <Input name={'punkt'} handleData={handleData} topPlaceholder={'Населённый пункт *'}/>
                <Input name={'pocht'} handleData={handleData} topPlaceholder={'Почтовый индекс *'}/>
                <Input name={'phone'} handleData={handleData} topPlaceholder={'Телефон *'}/>
                <Input name={'email'} handleData={handleData} topPlaceholder={'Email *'} type='email'/>
                <Input name={'primech'} handleData={handleData} topPlaceholder={'Примечание к заказу (необязательно)'} placeholder={'Примечания к вашему заказу, например, особые пожелания отделу доставки.'} type='email' textarea/>
            </form>
            <p>{state}</p>
            <section className="checkout-page-content-left__button">
                <button>Оплатить</button>
            </section>
        </section>
        <div className='checkout-page-content__right'>

        </div>
    </>
  )
}
