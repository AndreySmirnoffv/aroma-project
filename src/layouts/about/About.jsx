import firstImage from "../../assets/img/about/first-img.png";
import secondImage from "../../assets/img/about/second-img.png";
import { Link } from "react-router-dom";
import "./about.sass";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="first">
          <div className="left">
            <h1>Что такое Les Contes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              facere quibusdam asperiores totam reprehenderit. Similique
              mollitia in maxime molestiae dolores deserunt possimus quaerat
              ullam iste illum, laborum amet ratione culpa? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. A nobis nesciunt ipsum.
              Error fuga nemo fugit. Repudiandae commodi accusamus blanditiis
              possimus, consequuntur amet voluptate dolorem enim, odit
              asperiores dolores itaque?
            </p>
            <Link to="/duefte">
              <button>Наша коллекция</button>
            </Link>
          </div>
          <div className="right">
            <img src={firstImage} alt="" />
          </div>
        </div>
        <div className="second">
          <div className="left">
            <img src={secondImage} alt="" />
          </div>
          <div className="right">
            <h1>Мир Les Contes</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quasi
              error ab assumenda nisi facere harum suscipit recusandae similique
              quaerat, dolore praesentium velit nihil illo dolorum tempore,
              nesciunt corporis? Sapiente.
            </p>
            <Link to="/shop">
              <button>Где купить</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
