import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { aromas } from '../shop/Shop'
import './tovar.sass'

const Tovar = () => {
    const {path} = useParams()
    const [currentItem, setCurrentItem] = useState()

    useEffect(() => {
        setCurrentItem(aromas.find(aroma => aroma.path === path))
        console.log("hello world")
    }, [path, currentItem])
    console.log(currentItem)
  return (
    <>
    <p>hello world</p>
    {
    
        // aromas.map(aroma => (
        //     <div className="">
        //         <h1></h1>
        //         <img src="" alt="" />

        //     </div>
        // ))
    }
      </>
  )
}

export default Tovar