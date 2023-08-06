import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import { aromas } from '../shop/Shop'
import './tovar.sass'
import Slide1 from "./slides/Slide1";
import {useDispatch, useSelector} from "react-redux";

const Tovar = () => {
    const {path} = useParams()
    const [currentItem, setCurrentItem] = useState()
    const [nextTovar, setNextTovar] = useState(null);
    const [prevTovar, setPrevTovar] = useState(null);
    const [quentityTovars, setQuentityTovars] = useState(1);
    let [inputValue, setInputValue] = useState(0);

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        setCurrentItem(aromas.find(aroma => aroma.path === path));
    }, [path])

    useEffect(() => {
        let prev = aromas[currentItem?.id-2];
        let next = aromas[currentItem?.id];
        setNextTovar(!!next ? next : aromas[aromas.length-1]);
        setPrevTovar(!!prev ? prev : aromas[0]);
    }, [currentItem])

    const decrementFunc = () => {
        if (quentityTovars <= 1) {
            console.log()
        } else {
            setQuentityTovars(prev => --prev);
        }
    }

    const incrementFunc = () => {
        if (quentityTovars >= currentItem?.quantity) {
            console.log();
        } else {
            setQuentityTovars(prev => ++prev);
        }
    }

    const handleInput = (e) => {
        setInputValue(parseInt(e.target.value));
    }

    useEffect(() => {
        let value = inputValue;
        console.log(value);
        let quent = quentityTovars;
        console.log(value+quent);
    }, [inputValue])

    useEffect(() => {
        currentItem?.imgs.forEach(item => {
            console.log(item);
        })
    }, [])

    const addToBasket = () => {
        dispatch({type: 'ADD', payload: {currentItem, length: quentityTovars}});
    }

    useEffect(() => {
        console.log(state);
    }, [state])

  return (
      <div className='tovar-page'>
          <div className='page-top'>
              <p className='page-top-title'>Магазин</p>
              <ul className='page-top-path'>
                  <li>
                      <Link to='/'>Главная</Link>
                  </li>
                  <li>
                      <Link to='/shop'>Магазин</Link>
                  </li>
                  <li>
                      <Link to={currentItem?.unPath.path}>{currentItem?.unPath.name}</Link>
                  </li>
                  <li>
                      <p>{currentItem?.name}</p>
                  </li>
              </ul>
              <ul className='page-top-contacts'>
                  <li className='page-top-vk'><Link to='https://vk.com/lescontesfrance'><img src={require('../../assets/shop/tovar/vk-contact.svg').default} alt=""/></Link></li>
                  <li className='page-top-ok'><Link to='https://ok.ru/group/54769873584135'><img src={require('../../assets/shop/tovar/ok-contacts.svg').default} alt=""/></Link></li>
              </ul>
          </div>
          <div className='tovar-page__tovar'>
            <div className='tovar-page-tovar__container'>
                <div className='tovar-page__navigation-tovars'>
                    <Link
                        className='tovar-page-navigation__prev'
                        style={prevTovar ? {pointEvent: 'normal'} : {pointEvent: 'none'}}
                        to={`/shop/${prevTovar?.path}`}
                    >
                        <img src={require('../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt=""/>
                    </Link>
                    <Link className='tovar-page-navigation__shop' to='/shop'>
                        <svg className="icon" aria-label="all posts" width="22" height="22"
                             xmlns="https://www.w3.org/2000/svg">
                            <path fill='#626262' d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"></path>
                            <path fill='#626262' d="M20,2v5h-5V2H20 M22,0h-9v9h9V0L22,0z"></path>
                            <path fill='#626262' d="M7,15v5H2v-5H7 M9,13H0v9h9V13L9,13z"></path>
                            <path fill='#626262' d="M20,15v5h-5v-5H20 M22,13h-9v9h9V13L22,13z"></path>
                        </svg>
                    </Link>

                    <Link
                        className='tovar-page-navigation__next'
                        style={nextTovar ? {pointEvent: 'normal'} : {pointEvent: 'none'}}
                        to={`/shop/${nextTovar?.path}`}
                    >
                        <img src={require('../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt=""/>
                    </Link>
                </div>
                <article className='tovar-page__info'>
                    <div className='tovar-page-info__imgs'>
                        <div className='tovar-page-info-imgs__main'>
                            {
                                currentItem?.prevPrice
                                ? <p className='tovar-page-info-imgs-main__doscount'>СО СКИДКОЙ</p>
                                : null
                            }
                            <div className="tovar-page__slider">
                                {
                                    currentItem?.imgs.map(item => (
                                        <>
                                            <input name='tovar-r' type="radio" id='r1'/>
                                            <Slide1 img={item}/>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='tovar-page-info__navigation'>
                            {
                                currentItem?.imgs.map(item => (
                                    <label className='tovar-page-navigation__slide' htmlFor="r1">
                                        <img src={`${item}`} alt=""/>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <div className='tovar-page-container__right'>
                        <article className='tovar-page-info__content'>
                            <p className='tovar-page-info-content__name'>Порфюмерная вода<br/>{currentItem?.name}</p>
                            <p className='tovar-page-info-content__bonuse'>ПРИ ПОКУПКЕ АРОМАТА — {currentItem?.bonus}</p>
                            <p className='tovar-page-info-content__description'>{currentItem?.description}</p>
                            <p className='tovar-page-info-content__price'>
                                {currentItem?.prevPrice ? <span className='tovar-page-info-content__price-prev'>{currentItem?.prevPrice} </span> : null}
                                {currentItem?.price}<span className='tovar-page-info-content__price-currency'>₽</span>
                            </p>
                            <p className='in-stock'>{currentItem?.quantity} в наличии</p>
                        </article>
                        <div className='tovar-page__adding-to-cart'>
                            <div className='tovar-page__quantity'>
                                <button
                                    onClick={
                                        () => decrementFunc()
                                        }
                                        className='tovar-page-quantity__decrement'
                                    ></button>
                                <input onInput={(e) => handleInput(e)} type='text' value={quentityTovars} className='tovar-page-quentity__count'/>
                                <button
                                    onClick={
                                        () => incrementFunc()
                                    }
                                        className='tovar-page-quantity__increment'
                                    ></button>
                            </div>
                            <button onClick={() => addToBasket()} className='tovar-page-quantity__add'>В корзину</button>
                        </div>
                        <div className='tovar-page__product-meta'>
                            <p className='tovar-page__category'>Категория: <Link to={currentItem?.unPath.path}>{currentItem?.unPath.name}</Link></p>
                            <p className='tovar-page__articul'>АРТИКУЛ: {currentItem?.articul}</p>
                        </div>
                    </div>
                </article>
            </div>
          </div>
      </div>
  )
}

export default Tovar




// <button
// onClick={
// () => setQuentityTovars(quentityTovars.slice(0, quentityTovars.length-1))
// }
// className='tovar-page-quantity__decrement'
//     >-</button>
// <input onInput={(e)} type='text' value={quentityTovars.length} className='tovar-page-quentity__count'/>
// <button
//     onClick={
//         () => setQuentityTovars([...quentityTovars, currentItem])
//     }
//     className='tovar-page-quantity__increment'
// >+</button>