import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import cart from '../../../static/korzina-1.png';

const Header = () => {
    const cartOrders = useSelector(state => state.cart.orders);
    const cartItemsCount = cartOrders.length;

    return (
        <div>
            <nav>
                <li><Link to="/">ГОЛОВНА</Link></li>
                <li><Link to="/menu-constructor">СМУЗІ-КОНСТРУКТОР</Link></li>
                <li><Link to="/materials">ПРО НАС</Link></li>
                <Link to="/cart">
                    <img src={cart} alt="Корзина" />
                    {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
                </Link>
            </nav>
        </div>
    );
};

export default Header;
