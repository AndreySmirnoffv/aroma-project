import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Basket = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const arr = Array.from(new Set(state.map(item => JSON.stringify(item)))).map(JSON.parse); // товары

  return (
    <div>
      <div className='page-top'>
        <p className='page-top-title'>Корзина</p>
        <ul className='page-top-path'>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <p>Корзина</p>
          </li>
        </ul>
        <ul className='page-top-contacts'>
          <li className='page-top-vk'><Link to='https://vk.com/lescontesfrance'><img src={require('../../assets/shop/tovar/vk-contact.svg').default} alt=""/></Link></li>
          <li className='page-top-ok'><Link to='https://ok.ru/group/54769873584135'><img src={require('../../assets/shop/tovar/ok-contacts.svg').default} alt=""/></Link></li>
        </ul>
      </div>
    </div>
  )
}
