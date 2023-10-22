import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slide1 from '../slides/Slide1';
import Navigation from './Navigation/Navigation';

const TovarContainer = ({ currentItem }) => {
    const [quentityTovars, setQuentityTovars] = useState(1);
    let [inputValue, setInputValue] = useState(0);

    const dispatch = useDispatch();


    useEffect(() => {
        let value = inputValue;
        console.log(value);
        let quent = quentityTovars;
        console.log(value+quent);
    }, [inputValue])

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

    useEffect(() => {
        setQuentityTovars(1);
    }, [currentItem])

    const handleInput = (e) => {
        setInputValue(parseInt(e.target.value));
    }

    const addToBasket = () => {
        dispatch({type: 'ADD', payload: {currentItem, length: quentityTovars, price: currentItem.price}});
    }

  return (
    <div className='tovar-page__tovar'>
        <div className='tovar-page-tovar__container'>
            <Navigation currentItem={currentItem}/>
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
  )
}

export default TovarContainer