import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import TopPath from '../top-path/TopPath';
import './basket.sass';
import Tovar from './basket__/Tovar';

export const Basket = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [arr, setArr] = useState(Array.from(new Set(state.map(item => JSON.stringify(item)))).map(JSON.parse)); // товары

  const staps = [
    {
      id: 1,
      name: 'Корзина',
      active: true
    },
    {
      id: 2,
      name: 'Оформление заказа',
      active: false
    },
    {
      id: 3,
      name: 'Заказ',
      active: false
    },
  ]

  const pathL = [
    {
      id: 1, 
      name: 'Главная',
      path: '/'
    }
  ]

  const [isActiveFormLoc, setIsActiveFormLoc] = useState(false);



  useEffect(() => {
    console.log(arr)
  }, [arr])

  return (
    <div className='basket-page'>
      <TopPath path={pathL} productName='Корзина' pageName='Корзина'/>
      <div className="basket-page__container">
        <ul className="basket-page__steps">
          {
            staps.map(item => (
              <li key={item.id} className='basket-step'>
                <span className={item.active ? 'basket-step__num basket-step__num-active' : 'basket-step__num'}>{item.id}</span>
                <p>{item.name}</p>
                {
                  item.id === staps.length
                  ? null
                  : <img src={require('../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt="" />
                }
              </li>
            ))
          }
        </ul>
        <article className='basket-page__info'>
          <div className="basket-page__table">
            <div className="basket-table-left">
              <div className="basket-table-top">
                <p className='basket-tovar-title'>ТОВАР</p>
                <p className='basket-tovar-price'>ЦЕНА</p>
                <p className='basket-tovar-col'>КОЛИЧЕСТВО</p>
                <p className='basket-tovar-pod'>ПОДЫТОГ</p>
              </div>
              <div className="basket-table-products">
                {
                  arr.map(({currentItem, length}) => (
                    <Tovar arr={arr} setArr={setArr} currentItem={currentItem} length={length}/>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="basket-page__amount">
            <p className='basket-page-amount__title'>Сумма заказов</p> 
            <article className='basket-page-amount__info'>
              <div className='basket-page-amount__subtotal'>
                <p>Подытог</p>
                <p>59 960 ₽</p>
              </div>
              <div className='basket-page-amount__delivery'>
                <p>Доставка</p>
                <p className='basket-page-amount__delivery-info'>
                  <span>
                  Введите свой адрес для просмотра параметров доставки.
                  </span>
                  <br />
                  <span onClick={() => setIsActiveFormLoc(prev => !prev)} className='basket-page-amount__for-delivery'>Рассчитать стоимость доставки</span>
                  <div className={isActiveFormLoc ? 'basket-page-amount__locations basket-page-amount__locations-active' : 'basket-page-amount__locations'}>
                    locations
                  </div>
                </p>
              </div>
              <div className="basket-page-amount__result">
                <p>Итог</p>
                <p className='basket-page-amount-result__price'>56 960 ₽</p>
              </div>
              <Link to={'/'} className='basket-page-amount__checkout'>Оформить заказ</Link>
              <Link to={'/shop'} className='basket-page-amount__continue'>Продолжить покупки</Link>
            </article>
          </div>
        </article>
      </div>
    </div>
  )
}
