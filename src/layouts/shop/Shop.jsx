import "./shop.sass";
import { Link } from "react-router-dom";

export const aromas = [
  {
    name: "Elfe d'or 30мл",
    imgs: [require("../../assets/img/shop/first-image.png"), require("../../assets/img/shop/first-image.png")],
    id: 1,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Bonheur",
    imgs: [require("../../assets/img/shop/second-image.png")],
    price: "9 099",
    prevPrice: "10 280 ₽",
    path: "bonheur",
    id: 2,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "13e Fée",
    imgs: [require("../../assets/img/shop/third-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "13e-fee",
    id: 3,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Elfe d’or",
    imgs: [require("../../assets/img/shop/fourth-image.png")],
    price: "14 777",
    prevPrice: "18 990 ₽",
    path: "elfe-dor-2",
    id: 4,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Elfe",
    imgs: [require("../../assets/img/shop/fifth-image.png")],
    price: "8 999",
    prevPrice: "11 990 ₽",
    path: "парфюмерная-вода-elfe-dargent",
    id: 5,
    text: "",
    unPath: {name: 'Мужские ароматы Les Contes', path: '/мужские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Les Contes d’Orient pour Elle",
    imgs: [require("../../assets/img/shop/sixth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "dorient-pour-elle",
    id: 6,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Bois Enchanté",
    imgs: [require("../../assets/img/shop/seventh-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "bois-enchante",
    id: 7,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Bois Enchanté 100 мл.",
    imgs: [require("../../assets/img/shop/eights-image.png")],
    price: "14 990",
    prevPrice: "16 990 ₽",
    path: "bois-enchante-100",
    id: 8,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Magus",
    imgs: [require("../../assets/img/shop/ninth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "magus",
    id: 9,
    text: "",
    unPath: {name: 'Мужские ароматы Les Contes', path: '/мужские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'

  },
  {
    name: "Bonheur pour Homme",
    imgs: [require("../../assets/img/shop/tenth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "bonheur-pour-homme",
    id: 10,
    text: "",
    unPath: {name: 'Мужские ароматы Les Contes', path: '/мужские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Padischah",
    imgs: [require("../../assets/img/shop/eleventh-image.png")],
    price: "14 990",
    prevPrice: "18 990 ₽",
    path: "padischah",
    id: 11,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
  },
  {
    name: "Elfe rouge",
    imgs: [require("../../assets/img/shop/twelfth-image.png")],
    price: "8 999",
    prevPrice: "13 500 ₽",
    path: "elfe-rouge",
    id: 12,
    text: "",
    unPath: {name: 'Женские ароматы Les Contes', path: '/женские-ароматы-les-contes'},
    bonus: 'НАБОР СЕМПЛОВ В ПОДАРОК!',
    description: 'Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.',
    quantity: 9,
    articul: 'LC515'
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
                <img src={aroma.imgs[0]} alt="" />
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
