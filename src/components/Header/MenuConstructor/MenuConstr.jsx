import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, setVolume } from "./../../../Redux/Redux.jsx";
import { reset } from './../../../Redux/ReduxMenuConstr.jsx';
import imgApple from "../../../../static/imagesConstr/apple.jpeg";
import imgBanan from "../../../../static/imagesConstr/banan.png";
import imgApelsin from "../../../../static/imagesConstr/apelsiny.png";
import imgMorkava from "../../../../static/imagesConstr/morkva.jpg";
import imgSpinach from "../../../../static/imagesConstr/spinat.png";
import imgmaracuja from "../../../../static/imagesConstr/maracuja-1.jpg";
import imgkivi from "../../../../static/imagesConstr/kiwi.webp";
import imgAnanas from "../../../../static/imagesConstr/ananas.jpg";
import imgAvokado from "../../../../static/imagesConstr/Avocado-PNG.png";
import imgKokos from "../../../../static/imagesConstr/kokos.webp";
import imgMango from "../../../../static/imagesConstr/mango.webp";
import imgPolunica from "../../../../static/imagesConstr/klubnika.png";

const productData = [
    {
        cocktailName: "Яблуко",
        image: imgApple,
        available: true,
        price: 390,
    },
    {
        cocktailName: "Банан",
        image: imgBanan,
        available: false,
        price: 360,
    },
    {
        cocktailName: "Апельсин",
        image: imgApelsin,
        available: true,
        price: 410,
    },
    {
        cocktailName: "Морква",
        image: imgMorkava,
        available: true,
        price: 510,
    },
    {
        cocktailName: "Спанач",
        image: imgSpinach,
        available: true,
        price: 360,
    },
    {
        cocktailName: "Маракуя",
        image: imgmaracuja,
        available: true,
        price: 440,
    },
    {
        cocktailName: "Ківі",
        image: imgkivi,
        available: true,
        price: 340,
    },
    {
        cocktailName: "Ананас",
        image: imgAnanas,
        available: true,
        price: 480,
    },
    {
        cocktailName: "Авокадо",
        image: imgAvokado,
        available: true,
        price: 560,
    },
    {
        cocktailName: "Кокос",
        image: imgKokos,
        available: false,
        price: 420,
    },
    {
        cocktailName: "Манго",
        image: imgMango,
        available: false,
        price: 380,
    },
    {
        cocktailName: "Полуниця",
        image: imgPolunica,
        available: true,
        price: 350,
    },
];

function MenuConstr() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalVolume, setTotalVolume] = useState(200);
    const [totalCost, setTotalCost] = useState(0);
    const [isImagePopupOpen, setImagePopupOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const dispatch = useDispatch();

    const handleSelectItem = (item) => {
        const selectedProduct = productData.find((product) => product.cocktailName === item);

        if (
            selectedProduct &&
            selectedProduct.available &&
            selectedItems.length < 5
        ) {
            const itemExists = selectedItems.find((selectedItem) => selectedItem.id === selectedProduct.id);

            if (itemExists) {
                setSelectedItems((prevItems) =>
                    prevItems.map((prevItem) =>
                        prevItem.id === selectedProduct.id
                            ? { ...prevItem, count: prevItem.count + 1 }
                            : prevItem
                    )
                );
            } else {
                setSelectedItems((prevItems) => [
                    ...prevItems,
                    { ...selectedProduct, id: Date.now(), count: 1 }
                ]);
            }
        } else {
            alert("Неможливо додати, максимально 5 інгрідіентів :) ");
        }
    };

    const handleSelectVolume = (volume) => {
        setTotalVolume(Number(volume));
    };

    const handleOpenMenu = () => {
        setImagePopupOpen(true);
    };

    const handleConfirmOrder = () => {
        if (selectedItems.length === 0) {
            setFormSubmitted(true);
            setSubmitMessage("Спочатку оберіть смузі");
        } else {
            setFormSubmitted(true);
            setSubmitMessage("Заказ відправлено в корзину.");

            const order = {
                items: selectedItems.map((item) => ({
                    cocktailName: item.cocktailName,
                    price: item.price,
                    volume: totalVolume,
                    count: item.count
                })),
            };

            dispatch(addOrder(order));
            dispatch(reset());

            setSelectedItems([]);
            setTotalVolume(200);
            setTotalCost(0);
        }

        setTimeout(() => {
            setFormSubmitted(false);
            setSubmitMessage("");
        }, 2000);
    };

    const removeItem = (itemId) => {
        setSelectedItems((prevItems) =>
            prevItems.map((prevItem) =>
                prevItem.id === itemId
                    ? prevItem.count > 1
                        ? { ...prevItem, count: prevItem.count - 1 }
                        : null
                    : prevItem
            ).filter(Boolean)
        );
    };

    useEffect(() => {
        let cost = 0;
        const itemsCount = selectedItems.length;
        if (itemsCount === 0) {
            setTotalCost(0);
            return;
        }

        const volumePerItem = totalVolume / itemsCount;

        selectedItems.forEach((item) => {
            cost += ((item.price / 1000) * volumePerItem) * item.count;
        });

        setTotalCost(cost.toFixed(2));
    }, [selectedItems, totalVolume]);


    return (
        <div className="MenuConstr">
            <h3 className="MenuConstr-header">Сторінка Смузі конструктор</h3>
            <h2>Оберіть продукт та об'єм:</h2>

            <div className="volume-dropdown">
                <label className="label-container">
                    <div className="select-container">
                        <select value={totalVolume} onChange={(e) => handleSelectVolume(e.target.value)}>
                            <option value={200}>200 мл</option>
                            <option value={500}>500 мл</option>
                            <option value={1000}>1 л</option>
                        </select>
                    </div>
                </label>
            </div>

            <button className="MenuConstr-btn" onClick={handleOpenMenu}>
                ЗАМОВИТИ ПРОДУКТИ
            </button>

            {isImagePopupOpen && (
                <div className="image-popup">
                    <button className="close-button" onClick={() => setImagePopupOpen(false)}>Закрити</button>
                    <div className="image-list">
                        {productData.map((product, index) => (
                            <div
                                key={index}
                                className={`image-item ${!product.available ? "unavailable" : ""}`}
                                onClick={() => handleSelectItem(product.cocktailName)}>
                                <img src={product.image} alt={product.cocktailName} className="product-image" />
                                <p className="product-name">{product.cocktailName}</p>
                                <p className="product-pricePerLiter">{product.price} грн</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <h2>Вибрані продукти:</h2>
            <p>Общий об'єм: {totalVolume} мл</p>
            <ul className="selected-order">
                {selectedItems.map((item, index) => (
                    <li className="selected-product" key={index}>
                        {item.cocktailName}
                        <span className="delete-icon" onClick={() => removeItem(item.id)}>
                            ✖
                        </span>
                    </li>
                ))}
            </ul>

            <p>Загальна вартість: {totalCost} грн</p>

            <button className="MenuConstr-btn" onClick={handleConfirmOrder}>
                До корзини
            </button>
            {formSubmitted && (
                <p className="form-submitted-message">{submitMessage}</p>
            )}
        </div>
    );
}

export default MenuConstr;