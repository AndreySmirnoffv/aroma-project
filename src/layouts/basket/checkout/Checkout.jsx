import React, { useState } from 'react'
import TopPath from '../../top-path/TopPath'
import { Steps } from '../steps/Steps'
import { Details } from './details/Details'
import './Checkout.sass'

export const Checkout = () => {
  const [isActive, setIsActive] = useState(false);
    
  const pathL = [
    {
      id: 1, 
      name: 'Главная',
      path: '/'
    }
  ]

  const steps = [
    {
      id: 1,
      name: 'Корзина',
      active: true,
      completed: true
    },
    {
      id: 2,
      name: 'Оформление заказа',
      active: true,
      completed: false
    },
    {
      id: 3,
      name: 'Заказ',
      active: false,
      completed: false
    },
  ]

  return (
    <section className='checkout-page'>
      <TopPath path={pathL} productName='Оформление заказа' pageName='Оформление заказа'/>
      <section className="checkout-page__container">
        <Steps steps={steps}/>
        <section className='checkout-page-container__coup'>
          <p>Есть купон? <span onClick={() => setIsActive(prev => !prev)}>Нажмите, чтобы ввести код</span></p>
        </section>
        <form className={`checkout-page-container__write-coup ${isActive ? 'checkout-page-container__write-coup-active' : ''}`}>
          <p className='checkout-page-container-write__title'>Если у вас есть код купона, укажите его ниже.</p>
          <input type="text"  placeholder='Код купона'/>
          <button>Применить купон</button>
        </form>
        <section className="checkout-page__content">
          <Details />
        </section>
      </section>
    </section>
  )
}