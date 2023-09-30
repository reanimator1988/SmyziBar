import React, { useState } from "react";
import img6 from '../../../static/images/6.jpg';
import img7 from '../../../static/images/7.jpg';
import img8 from '../../../static/images/8.jpg';
import img9 from '../../../static/images/9.jpg';
import img10 from '../../../static/images/10.jpg';
import img11 from '../../../static/images/11.jpg';
import { FormBuy, BuyButton, OrderInfo } from "./FormBuy.jsx";



const menuItems = [
    {
        imgSrc: img6,
        cocktailName: "Коктейль 'Клубничный драйв'",
        description: "Клубничный сироп, Свежая клубника, Лимонный сок, Водка, Лед.",
        price: 150,
        oldPrice: 250,
        volume: 200
    },
    {
        imgSrc: img7,
        cocktailName: "Коктейль 'Пина Колада'",
        description: "Белый ром - 60 мл., Кокосовое молоко - 90 мл., Ананасовый сок - 90 мл., Лед - по вкусу",
        price: 120,
        oldPrice: 180,
        volume: 200
    },
    {
        imgSrc: img8,
        cocktailName: "Коктейль 'Манго Маракуйя 6°'",
        description: "Манго - 100 гр, Маракуйя пассифлора - 50 грамм, Водка - 50 мл, Лед - по желанию, Сахарный сироп",
        price: 150,
        oldPrice: 180,
        volume: 200
    },
    {
        imgSrc: img9,
        cocktailName: "Коктейль 'Клубничные ласки'",
        description: "Свежие клубники - 100 грамм, Ванильный сахар - 1 чайная ложка, Лимонный сок - 30 мл, Водка - 50 мл, Лед",
        price: 100,
        oldPrice: 150,
        volume: 200
    },
    {
        imgSrc: img10,
        cocktailName: "Коктейль 'Лазурные сны'",
        description: "Белый ром - 50 мл, голубой апельсиновый ликер - 25 мл, Лимонный сок - 20 мл, Сахарный сироп - 10 мл, Лед - по желанию",
        price: 120,
        oldPrice: 180,
        volume: 200
    },
    {
        imgSrc: img11,
        cocktailName: "Коктейль 'Слёзы бывшей'",
        description: "Водка - 50 мл, Лимонный сок - 20 мл, Гренадиновый сироп - 10 мл, Апельсиновый сок - 20 мл, Лед - по желанию",
        price: 500,
        oldPrice: 850,
        volume: 200
    },
];

export default () => {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderData, setOrderData] = useState(null);
    const [orders, setOrders] = useState([]);

    const handleBuyClick = (item) => {
        setShowOrderForm(true);
        setOrderData({ ...item, price: item.price });
    };

    const handleOrderSubmit = (formData) => {
        setOrders([...orders, formData]);
        setShowOrderForm(false);

        localStorage.setItem("orders", JSON.stringify([...orders, formData]));
    };

    const handleClosePopup = () => {
        setShowOrderForm(false);
        setOrderData(null);
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
                        <BuyButton onBuyClick={() => handleBuyClick(item)} item={item} />

                    </div>
                ))}
            </div>

            <FormBuy isOpen={showOrderForm} onClose={handleClosePopup} onSubmit={handleOrderSubmit} item={orderData} />

            {orderData && <OrderInfo orderData={orderData} />}
        </div>
    );
}