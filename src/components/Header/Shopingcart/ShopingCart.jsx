import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from './../../../Redux/Redux.jsx';
import { menuSlice } from './../../../Redux/ReduxMenuConstr.jsx';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartOrders = useSelector((state) => state.cart.orders);
  const menuItems = useSelector((state) => state.menu.selectedItems);
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);

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
      dispatch(cartSlice.actions.removeOrder(selectedOrderIndex));
      setShowConfirmation(false);
      setSelectedOrderIndex(null);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartOrders.reduce((total, order) => total + order.price, 0);
    return totalPrice;
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  const handleFormSubmit = (data) => {
    setOrderData(data);
    toggleForm();
  };

  const resetOrderData = () => {
    setOrderData(null);
  };

  return (
    <div className="shopping-cart">
      <h4>Кошик замовлень</h4>
      {cartOrders.length === 0 ?( 
        <div className="empty-cart">
          <p className="shopping-text">Ще нічого не додано</p>
          <Link to="/menu-constructor">
            <button className="shopping-btn">Хочу смузі!</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartOrders.map((order, index) => (
              <li key={index} className="shopping-li">
                <span className="order-number">{index + 1}. </span>
                Назва коктейля: {order.cocktailName},<br />
                Ціна: {order.price} грн.,<br />
                Об'єм: {order.volume} мл. ,<br />
                <div>
                  <button onClick={() => handleRemoveClick(index)}>Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Загальна ціна: {calculateTotalPrice()} грн
            <div>
              <button onClick={toggleForm}>Замовити</button>
            </div>
          </div>
          {showConfirmation && (
            <div className="confirmation-modal">
              <div className="confirmation-content">
                Ви впевнені, що хочете видалити цей заказ?
                <button onClick={handleConfirmationOK}>OK</button>
                <button onClick={handleConfirmationClose}>Скасувати</button>
              </div>
            </div>
          )}
          {isFormOpen ? (
            <OrderForm onSubmit={handleFormSubmit} />
          ) : (
            orderData && (
              <OrderSummary data={orderData} deliveryOption={orderData.deliveryOption} onClose={resetOrderData} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const OrderForm = ({ onSubmit }) => {
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    street: '',
    houseNumber: '',
  });

  const handleChangeDeliveryOption = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, deliveryOption });
  };

  return (
    <div className="order-form">
      <h4>Форма замовлення</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ім'я</label>
          <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Телефон</label>
          <input type="text" name="phone" required value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Самовивіз або доставка</label>
          <select name="deliveryOption" onChange={handleChangeDeliveryOption} value={deliveryOption}>
            <option value="pickup">Самовивіз</option>
            <option value="delivery">Доставка</option>
          </select>
        </div>
        {deliveryOption === 'delivery' && (
          <>
            <div className="form-group">
              <label>Город</label>
              <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Улица</label>
              <input type="text" name="street" required value={formData.street} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Номер дома</label>
              <input type="text" name="houseNumber" required value={formData.houseNumber} onChange={handleInputChange} />
            </div>
          </>
        )}
        <button type="submit">Оформити замовлення</button>
      </form>
    </div>
  );
};

const OrderSummary = ({ data, deliveryOption, onClose }) => {
  return (
    <div className="order-summary">
      <h6>Ваше замовлення</h6>
      <p>Ім'я: {data.name}</p>
      <p>Телефон: {data.phone}</p>
      <p>Спосіб доставки: {deliveryOption === 'pickup' ? 'Самовивіз' : 'Доставка'}</p>
      {deliveryOption === 'delivery' && (
        <>
          <p>Город: {data.city}</p>
          <p>Улица: {data.street}</p>
          <p>Номер дома: {data.houseNumber}</p>
        </>
      )}
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default ShoppingCart;
