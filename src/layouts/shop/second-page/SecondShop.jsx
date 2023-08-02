import firstImage from '../../../assets/img/shop/second-page/first-image.png'
import secondImage from '../../../assets/img/shop/second-page/second-image.png'
import thirdImage from '../../../assets/img/shop/second-page/third-image.png'
import fourthImage from '../../../assets/img/shop/second-page/fourth-image.png'
import fifthImage from '../../../assets/img/shop/second-page/fifth-image.png'
import sixthImage from '../../../assets/img/shop/second-page/sixth-image.png'
import seventhImage from '../../../assets/img/shop/second-page/seventh-image.jpeg'
import { Link } from 'react-router-dom';
import '../shop.sass'

const SecondShop= () => {
    return (
        <div className="shop-wrapper">
            <div className="shop">
                <h1>Магазин</h1>
                <div className="info">
                    <Link to='/'>главная</Link>
                    <p>мгазин</p>
                </div>
                <div className="first-row">
                    <div className="first-row__first-image">
                        <Link to='/'>
                            <img src={firstImage} alt="" />
                            <p>Парфюмерная вода Tesey</p>
                        </Link>
                        <p>30 мл</p>
                        <p><strike style={{color: 'grey'}}>10 280 ₽</strike> <b>8 999 ₽</b></p>
                    </div>
                    <div className="first-row__second-image">
                        <Link to=''>
                            <img src={secondImage} alt="" />
                            <p>Парфюмерная вода Pour Homme</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>10 280 ₽</strike><b>  8 999 ₽</b></p>
                    </div>
                    <div className="first-row__third-image">
                        <Link to='/'>
                            <img src={thirdImage} alt="" />
                            <p>Парфюмерная вода Bonheur 100 мл.</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>16 990 ₽</strike><b> 14 990 ₽</b></p>
                    </div>
                </div>
                <div className="first-row">
                    <div className="first-row__first-image">
                        <Link to='/'>
                            <img src={fourthImage} alt="" />
                            <p>Парфюмерная вода Pour Femme</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>10 280 ₽</strike> <b> 8 999 ₽</b></p>
                    </div>
                    <div className="first-row__second-image">
                        <Link to='/'>
                            <img src={fifthImage} alt="" />
                            <p>Парфюмерная вода Passion d’Ariadna</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>13 300 ₽</strike> <b> 9 999 ₽</b></p>
                    </div>
                    <div className="first-row__third-image">
                        <Link to='/'>
                            <img src={sixthImage} alt="" />
                            <p>Парфюмерная вода Néride</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>10 980 ₽</strike> <b> 8 999 ₽</b></p>
                    </div>
                </div>
                <div className="first-row">
                    <div className="first-row__first-image">
                        <Link to='/'>
                            <img src={seventhImage} alt="" />
                            <p>Набор туалетного парфюмированного мыла Elfe d`or + набор сэмплов</p>
                        </Link>
                        <p><strike style={{color: 'grey'}}>2 990 ₽</strike> <b>2 490 ₽</b></p>
                    </div>
                    </div>
                </div>
                <div className="pages">
                    <Link to='/shop'>
                        <button>1</button>
                    </Link>
                    <button style={{color: 'white', background: "black"}}>2</button>
                </div>
            </div>
    )
}

export default SecondShop;