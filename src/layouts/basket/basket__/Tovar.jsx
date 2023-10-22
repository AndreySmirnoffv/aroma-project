import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Tovar = ({ currentItem, length, arr, setArr }) => {
  const [quentityTovars, setQuentityTovars] = useState(1);

    const decrementFunc = (currentItem) => {
        setArr(() => {
            return arr.map(item => {
                if (item.currentItem.id === currentItem.id) {
                    if (item.length <= 1) {
                        return item;
                    }
                    return {
                        ...item,
                        length: --item.length
                    }
                }
                return item;
            })
        })
    }
  
    const incrementFunc = (e) => {
        setArr(() => {
            return arr.map(item => {
                if (item.currentItem.id === currentItem.id) {
                    if (item.length >= currentItem.quantity) {
                        return item;
                    }
                    return {
                        ...item,
                        length: ++item.length
                    }
                }
                return item;
            })
        })
    }
    
    const reload = () => {  
        console.log(arr.filter(item => item.currentItem.id === currentItem.id)[0]) 
        setArr(() => {
            return arr.map(item => {
                if (item.currentItem.id === currentItem.id) {
                    return {
                        ...item,
                        price:  parseInt(item.currentItem.price.replaceAll(' ', ''))*item.length
                    }
                }
                return item;
            })
        })
        return arr;
    }


    const deleteTovar = () => {
        setArr(prev => prev.filter(item => item.currentItem.id !== currentItem.id));
    }

  return (
    <div key={currentItem?.id} className="basket-table-item">
        <Link to={`/shop/${currentItem?.path}`}> 
            <img className='basket-table-item__img' src={currentItem?.imgs[0]} alt="" />
        </Link>
        <Link className='basket-table-item__name' to={`/shop/${currentItem?.path}`}>Парфюмерная вода {currentItem?.name}</Link>
        <p className='basket-table-item__price'>
            <span>{currentItem?.price.split(' ')[0]}</span>
            <br/>
            <span>{currentItem?.price.split(' ')[1]} ₽</span>
        </p>
        <div className='tovar-page__quantity'>
            <button
                onClick={
                    () => decrementFunc(currentItem)
                    }
                    className='tovar-page-quantity__decrement'
                ></button>
            <input type='text' value={length} className='tovar-page-quentity__count'/>
            <button
                onClick={
                    (e) => incrementFunc(e)
                }
                    className='tovar-page-quantity__increment'
                ></button>
        </div>
        <div className='tovar-page-folded-price'>
            <p>{arr.filter(item => item.currentItem.id === currentItem.id)[0].price} ₽</p>
        </div>
        <button onClick={deleteTovar} className='tovar-page-delete'>✕</button>
    </div>
  )
}

export default Tovar;



// const filtered = arr.filter(item => item.currentItem.id === currentItem.id);
// // setArr(arr.map(item => item.currentItem.id === currentItem.id ? item.length++ : item.length))
// //   setArr(arr.map(item => item.currentItem.id === currentItem.id ? {currentItem: currentItem, length: item.length++} : {currentItem: currentItem, length: item.length}));
// //   console.log(arr.map(item => item.currentItem.id === currentItem.id ? {currentItem: currentItem, length: item.length++} : {currentItem: currentItem, length: item.length}))
// console.log(arr.map(item => item.currentItem.id === currentItem.id ? Array.from(new Set(arr.map(item => JSON.stringify([item, {currentItem: currentItem, length: item.length++}])))).map(JSON.parse) : {currentItem: currentItem, length: item.length}))
// // setArr(arr.map(item => [...arr, {currentItem: item.currentItem, length: item.length++}]));
// filtered.length++;
// // console.log(e.currentTarget.parentNode.childNodes[1].value++)
//   if (length >= currentItem.quantity) {
//       console.log();
//   } else {
//       // setArr(arr.map(item => item.currentItem.id === currentItem.id ? item.length++ : item.length))
//       // arr.map(item => item.currentItem.id === currentItem.id ? [...arr, {currentItem: currentItem, length: item.length++}] : {currentItem: currentItem, length: item.length});
//       // setQuentityTovars(prev => ++prev);
//   }