import "./shop.sass";
import { Link } from "react-router-dom";

export const aromas = [
  {
    name: "Elfe d'or 30мл",
    img: require("../../assets/img/shop/first-image.png"),
    id: 1,
    price: "8 999 ₽",
    prevprice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
  },
  {
    name: "Bonheur",
    img: require("../../assets/img/shop/second-image.png"),
    price: "9 099 ₽",
    prevPrice: "10 280 ₽",
    path: "bonheur",
    id: 2,
    text: "",
  },
  {
    name: "13e Fée",
    img: require("../../assets/img/shop/third-image.png"),
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "https://shop.lescontes.ru/shop/13e-fee",
    id: 3,
    text: "",
  },
  {
    name: "Elfe d’or",
    img: require("../../assets/img/shop/fourth-image.png"),
    price: "14 777 ₽",
    prevPrice: "18 990 ₽",
    path: "https://shop.lescontes.ru/shop/elfe-dor-2",
    id: 4,
    text: "",
  },
  {
    name: "Elfe",
    img: require("../../assets/img/shop/fifth-image.png"),
    price: "8 999 ₽",
    prevPrice: "11 990 ₽",
    path: "https://shop.lescontes.ru/shop/%d0%bf%d0%b0%d1%80%d1%84%d1%8e%d0%bc%d0%b5%d1%80%d0%bd%d0%b0%d1%8f-%d0%b2%d0%be%d0%b4%d0%b0-elfe-dargent",
    id: 5,
    text: "",
  },
  {
    name: "Les Contes d’Orient pour Elle",
    img: require("../../assets/img/shop/sixth-image.png"),
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "https://shop.lescontes.ru/shop/dorient-pour-elle",
    id: 6,
    text: "",
  },
  {
    name: "Bois Enchanté",
    img: require("../../assets/img/shop/seventh-image.png"),
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "https://shop.lescontes.ru/shop/bois-enchante",
    id: 7,
    text: "",
  },
  {
    name: "Bois Enchanté 100 мл.",
    img: require("../../assets/img/shop/eights-image.png"),
    price: "14 990 ₽",
    prevPrice: "16 990 ₽",
    path: "https://shop.lescontes.ru/shop/bois-enchante-100",
    id: 8,
    text: "",
  },
  {
    name: "Magus",
    img: require("../../assets/img/shop/ninth-image.png"),
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "https://shop.lescontes.ru/shop/magus",
    id: 9,
    text: "",
  },
  {
    name: "Bonheur pour Homme",
    img: require("../../assets/img/shop/tenth-image.png"),
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "https://shop.lescontes.ru/shop/bonheur-pour-homme",
    id: 10,
    text: "",
  },
  {
    name: "Padischah",
    img: require("../../assets/img/shop/eleventh-image.png"),
    price: "14 990 ₽",
    prevPrice: "18 990 ₽",
    path: "https://shop.lescontes.ru/shop/padischah",
    id: 11,
    text: "",
  },
  {
    name: "Elfe rouge",
    img: require("../../assets/img/shop/twelfth-image.png"),
    price: "8 999 ₽",
    prevPrice: "13 500 ₽",
    path: "https://shop.lescontes.ru/shop/elfe-rouge",
    id: 12,
    text: "",
  },
];

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop">
        <h1>Магазин</h1>
        <div className="info">
          <Link to="/">главная</Link>
          <p>мгазин</p>
        </div>
        <div className="aromas">
          {aromas.map((aroma) => (
            <div className="first-row__first-image" key={aroma.id}>
              <Link to={`${aroma.path}`}>
                <img src={aroma.img} alt="" />
                <b><p>{aroma.name}</p></b>
              </Link>
              <p>
                <strike style={{ color: "grey" }}>{aroma.prevPrice}</strike>
                <b> {aroma.price}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="pages">
          <button style={{ color: "white", background: "black" }}>1</button>
          <Link to="/shop/page/2">
            <button>2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
