import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { addOrder } from './../../Redux/Redux.jsx';

export const FormBuy = ({ isOpen, onClose, item }) => {
    const initialFormData = {
        name: "",
        phone: "+3",
        deliveryMethod: "pickup",
        city: "",
        street: "",
        houseNumber: "",
        postOffice: "",
        price: "",
        cocktailName: "",
        volume: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormClose = () => {
        setFormData(initialFormData);
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (item && formData.phone.length >= 6) {
            dispatch(addOrder({ ...formData, ...item }));
            onClose();
            setFormData(initialFormData);
        } else {
            alert("Пожалуйста, введите как минимум 6 символов в поле телефона.");
        }
    };

    return (
        isOpen && (
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-close" onClick={handleFormClose}>
                        <FaTimes />
                    </div>
                    <h4>Оформление заказа</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Имя"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                                if (!/^[0-9]*$/.test(e.key) || formData.phone.length >= 15) {
                                    e.preventDefault();
                                }
                            }}
                            placeholder="+38 (телефон)"
                            required
                        />
                        <select
                            name="deliveryMethod"
                            value={formData.deliveryMethod}
                            onChange={handleInputChange}
                        >
                            <option value="pickup">Самовывоз</option>
                            <option value="delivery">Доставка</option>
                        </select>
                        {formData.deliveryMethod === "delivery" && (
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Город"
                                    required
                                />
                                <input
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    placeholder="Улица"
                                    required
                                />
                                <input
                                    type="text"
                                    name="houseNumber"
                                    value={formData.houseNumber}
                                    onChange={handleInputChange}
                                    placeholder="Номер дома"
                                    required
                                />
                                <input
                                    type="text"
                                    name="postOffice"
                                    value={formData.postOffice}
                                    onChange={handleInputChange}
                                    placeholder="Квартира"
                                    required
                                />
                            </div>
                        )}

                        <button type="submit">Оформить заказ</button>
                    </form>
                </div>
            </div>
        )
    );
};

export const BuyButton = ({ onBuyClick }) => {
    return (
        <button onClick={onBuyClick} className="buy-button">
            Купить
        </button>
    );
};

export const OrderInfo = ({ orderData }) => {
    return (
        <div className="order-info">
            <h2>Ваш заказ:</h2>
        </div>
    );
};
