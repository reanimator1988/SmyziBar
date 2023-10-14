import React, { useState, useEffect } from "react";
import img6 from '../../../static/images/6.jpg';
import img7 from '../../../static/images/7.jpg';
import img8 from '../../../static/images/8.jpg';
import img9 from '../../../static/images/9.jpg';
import img10 from '../../../static/images/10.jpg';
import img11 from '../../../static/images/11.jpg';
import { useDispatch } from 'react-redux';
import { addOrder } from './../../Redux/Redux.jsx';



const MenuComponents = () => {
    const menuItems = [
        {
            imgSrc: img6,
            cocktailName: "Коктейль 'Полуничний драйв'",
            description: "Полуничний сироп, Свіжа полуниця, Лимонний сік, Горілка, Лід.",
            price: 150,
            oldPrice: 250,
            volume: 200
        },
        {
            imgSrc: img7,
            cocktailName: "Коктейль 'Піна Колада'",
            description: "Білий ром - 60 мл., кокосове молоко - 90 мл., ананасовий сік - 90 мл., лід - за смаком",
            price: 120,
            oldPrice: 180,
            volume: 200
        },
        {
            imgSrc: img8,
            cocktailName: "Коктейль 'Манго Маракуя 6°'",
            description: "Манго - 100 гр, Маракуя пасифлора - 50 грам, Горілка - 50 мл, Лід - за бажанням, Цукровий сироп",
            price: 150,
            oldPrice: 180,
            volume: 200
        },
        {
            imgSrc: img9,
            cocktailName: "Коктейль 'Полуничні ласки'",
            description: "Свіжі полуниці - 100 грам, Ванільний цукор - 1 чайна ложка, Лимонний сік - 30 мл, Горілка - 50 мл, Лід - за бажанням",
            price: 100,
            oldPrice: 150,
            volume: 200
        },
        {
            imgSrc: img10,
            cocktailName: "Коктейль 'Блакитні сни'",
            description: "Білий ром - 50 мл, блакитний апельсиновий лікер - 25 мл, Лимонний сік - 20 мл, Цукровий сироп - 10 мл, Лід - за бажанням",
            price: 120,
            oldPrice: 180,
            volume: 200
        },
        {
            imgSrc: img11,
            cocktailName: "Коктейль 'Сльози колишньої'",
            description: "Горілка - 50 мл, Лимонний сік - 20 мл, Гренадиновий сироп - 10 мл, Апельсиновий сік - 20 мл, Лід - за бажанням",
            price: 500,
            oldPrice: 850,
            volume: 200
        },
    ];
    const [showNotification, setShowNotification] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {

        const storedState = localStorage.getItem('showNotification');
        if (storedState === 'true') {
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 1000);
        }
    }, []);

    const handleBuyClick = (item) => {

        dispatch(addOrder(item));
        setShowNotification(true);
        localStorage.setItem('showNotification', 'true');

        setTimeout(() => {
            setShowNotification(false);
            localStorage.removeItem('showNotification');
        }, 1000);
    };

    return (
        <div>
            <h4>"Smoothie Bar: Taste and Health"</h4>
            <div className="menu">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <img src={item.imgSrc} alt={`Блюдо ${index + 1}`} />
                        <div className="menu-name">{item.cocktailName}</div>
                        <div className="menu-item-description">{item.description}</div>
                        <div className="menu-item-price">Цена: {item.price} грн.</div>
                        <div className="menu-item-old-price">Старая цена: {item.oldPrice} грн.</div>
                        <div className="volume-label">Об'єм: {item.volume} мл</div>
                        <button onClick={() => handleBuyClick(item)}>до Корзини</button>
                    </div>
                ))}
            </div>
            <div className={`notification ${showNotification ? '' : 'hidden'}`}>
                Заказ добавлен
            </div>
        </div>
    );
}

export default MenuComponents;