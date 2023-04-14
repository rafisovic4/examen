import { NavLink } from "react-router-dom";
import style from "./basket.module.css";
export const format = (price) => {
    return new Intl.NumberFormat().format(price)
}

const Basket = ({ activeModal, setActive, basket, setBasket }) => {

    const sumMoney = () => {
        const totalChild = basket.reduce((accum,item) => accum + item.price, 0)

        return format(totalChild)
    }

    const handleDeleteBasket = (id) => {
        setBasket(basket.filter(item => item.id !== id))
    }

  return (
    <div
      className={activeModal ? style.basket + " " + style.active : style.basket}
      onClick={() => setActive(false)}
    >
      <div
        className={
          activeModal
            ? style.basket_inner + " " + style.active
            : style.basket_inner
        }
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Корзина</h1>
        <div className={style.basket_tovars}>
          {basket.map((item) => {
            return (
              <div className={style.basket_tovar} key={item.id}>
                <div className={style.img_tovar_basket}>
                  <img src={item.image_url} alt="" />
                </div>
                <div className={style.content_basket_tovar}>
                  <p className={style.basket_name}>{item.name}</p>
                  <p className={style.basket_text}>{item.text}</p>
                  <p className={style.basket_price_first}>от {format(item.price)} ₽</p>
                  <button onClick={() => handleDeleteBasket(item.id)}>Удалить</button>
                </div>
              </div>
            );
          })}
          <p className={style.basket_price}>
            Итого: <span>{sumMoney()} ₽</span>
          </p>
        </div>
        <NavLink to="/">
          <button className={style.basket_btn}>КУПИТЬ</button>
        </NavLink >
      </div>
    </div>
  );
};

export default Basket;
