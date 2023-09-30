import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "./../../../Redux/Redux.jsx";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  const handleRemoveClick = (index) => {
    setSelectedOrderIndex(index);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    setSelectedOrderIndex(null);
  };

  const handleConfirmationOK = () => {
    if (selectedOrderIndex !== null) {
      dispatch(removeOrder(selectedOrderIndex));
      setShowConfirmation(false);
      setSelectedOrderIndex(null);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = orders.reduce((total, order) => total + order.price, 0);
    return totalPrice;
  };

  return (
    <div className="shopping-cart">
      <h4>Кошик замовлень</h4>
      {orders.length === 0 ? (
        <div className="empty-cart">
          <p className="shopping-text">Ще нічого не додано</p>
          <Link to="/menu-constructor">
            <button className="shopping-btn">Хочу смузі!</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="shopping-li">
                <span className="order-number">{index + 1}. </span>
                СocktailName: {order.cocktailName},<br />
                Name: {order.name} ,<br />
                Number Telefon: {order.phone},<br />
                Об'єм: {order.volume} мл. ,<br />
                Ціна: {order.price} грн.,<br />
                Місто: {order.city} ,<br />
                Вулиця: {order.street} ,<br />
                Будинок №: {order.houseNumber} , <br />
                кв.№: {order.postOffice} .
                <div><button onClick={() => handleRemoveClick(index)}>Видалити</button></div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Загальна ціна: {calculateTotalPrice()} грн
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            Ви впевнені, що хочете видалити цей заказ?
            <button onClick={handleConfirmationOK}>OK</button>
            <button onClick={handleConfirmationClose}>Скасувати</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

