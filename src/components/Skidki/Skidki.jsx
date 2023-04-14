import style from "../Catalog/catalog.module.css";
import tovar from "../../assets/img/tovar.png";
import { tovars } from "../Catalog/Catalog";
import { useEffect, useState } from "react";
import { format } from "../basket/basket";
import { NavLink } from "react-router-dom";

const Skidki = () => {
  const [data, setData] = useState();

  const dataSale = data?.filter((item) => item.discount > 0);

  const fetchServices = async () => {
    const response = await fetch(`https://api.avavion.ru/api/products`)
    const data = await response.json()

    setData(data.data)
}

useEffect(() => {
    fetchServices()
}, [])



  return (
    <div className={style.catalog} id={"#skidki"}>
      <div className={style.header_catalog}>
        <h1 className={style.h1_catalog}>Скидки</h1>
      </div>
      <div className={style.catalog_wrapper}>
        {dataSale?.map((item) => {
          return (
            <div className={style.tovar} key={item.id}>
              <NavLink to={`/tovar/${item.id}`}>
                <div className={style.img_tovar}>
                    <img src={item.image_url} alt="" />
                </div>
              </NavLink>
              <p className={style.name_tovar}>{item.name}</p>
              <div className={style.prices}>
                <p className={style.price_old}>от {format(item.price)} ₽</p>
                <p className={style.price}>от {
                format(item.price * (item.discount/100))
                } ₽</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skidki;
