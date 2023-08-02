import aboutUsImage from '../../../assets/img/main-page/about-image.png'
import './about-us.sass'

const AboutUs = () => {
    return(
        <div className="about-wrapper">
            <div className="about">
                <div className="left">
                    <h1>Как все <br/> Начиналось</h1>
                    <p>Познакомьтесь с историей нашей торговой марки, узнайте с чего начинался её путь почти два столетия назад…</p>
                    <a href="geschichte">
                        <button>Geschcichte des Lescontes</button>
                    </a>
                </div>
                <div className="right">
                    <img src={aboutUsImage} alt="" />
                </div>
            </div>
        </div>
    )
}


export default AboutUs;