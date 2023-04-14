import style from "./tovar.module.css"

import { tovars } from "../Catalog/Catalog"
import { useParams } from "react-router"
import { format } from "../basket/basket"
import { useEffect, useState } from "react"

const Tovar = ({setBasket, basket}) => {
    const [tovar, setServicesTovar] = useState([])

    const params = useParams()
    const id = params.id

    const fetchServices = async () => {
        const response = await fetch(`https://api.avavion.ru/api/products/${id}`)
        const data = await response.json()

        setServicesTovar(data.data)
    }

    useEffect(() => {
        fetchServices()
    }, [])

    const handleSetBasket = ({id, name, image_url, text, price}) => {
        setBasket(prev => [...prev, {id: id, name:name, image_url:image_url, text:text, price: tovar.discount === 0 ? price : price * (tovar.discount/100)}])
    }

    const idBasket = basket.find(item => item.id == id)


    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar.image_url} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar.name}</h1>
                <p>{tovar.text}</p>
                <h2 className={style.percent_design}>от  



                     {
                         
                        tovar.discount === 0 ?  format(tovar.price) :
                        format(tovar.price * (tovar.discount/100))
                     } 
                      ₽
                </h2>
                {
                     idBasket ? <p>товар в корзине</p> : (
                        <button onClick={() => handleSetBasket({...tovar})}>ДОБАВИТЬ В КОРЗИНУ</button>
                     )
                }
            </div>
        </div>
    )
}

export default Tovar