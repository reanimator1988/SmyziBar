// import React, { useState, useEffect } from "react";
// import imgApple from "../../../../static/imagesConstr/apple.jpeg";
// import imgBanan from "../../../../static/imagesConstr/banan.png";
// import imgApelsin from "../../../../static/imagesConstr/apelsiny.png";
// import imgMorkava from "../../../../static/imagesConstr/morkva.jpg";
// import imgSpinach from "../../../../static/imagesConstr/spinat.png";
// import imgmaracuja from "../../../../static/imagesConstr/maracuja-1.jpg";
// import imgkivi from "../../../../static/imagesConstr/kiwi.webp";
// import imgAnanas from "../../../../static/imagesConstr/ananas.jpg";
// import imgAvokado from "../../../../static/imagesConstr/Avocado-PNG.png";
// import imgKokos from "../../../../static/imagesConstr/kokos.webp";
// import imgMango from "../../../../static/imagesConstr/mango.webp";
// import imgPolunica from "../../../../static/imagesConstr/klubnika.png";

// const productData = [
//     {
//         name: "Яблуко",
//         image: imgApple,
//         available: true,
//         pricePerLiter: 390,
//     },
//     {
//         name: "Банан",
//         image: imgBanan,
//         available: false,
//         pricePerLiter: 360,
//     },
//     {
//         name: "Апельсин",
//         image: imgApelsin,
//         available: true,
//         pricePerLiter: 410,
//     },
//     {
//         name: "Морква",
//         image: imgMorkava,
//         available: true,
//         pricePerLiter: 510,
//     },
//     {
//         name: "Спанач",
//         image: imgSpinach,
//         available: true,
//         pricePerLiter: 360,
//     },
//     {
//         name: "Маракуя",
//         image: imgmaracuja,
//         available: true,
//         pricePerLiter: 440,
//     },
//     {
//         name: "Ківі",
//         image: imgkivi,
//         available: true,
//         pricePerLiter: 340,
//     },
//     {
//         name: "Ананас",
//         image: imgAnanas,
//         available: true,
//         pricePerLiter: 480,
//     },
//     {
//         name: "Авокадо",
//         image: imgAvokado,
//         available: true,
//         pricePerLiter: 560,
//     },
//     {
//         name: "Кокос",
//         image: imgKokos,
//         available: false,
//         pricePerLiter: 420,
//     },
//     {
//         name: "Манго",
//         image: imgMango,
//         available: false,
//         pricePerLiter: 380,
//     },
//     {
//         name: "Полуниця",
//         image: imgPolunica,
//         available: true,
//         pricePerLiter: 350,
//     },
// ];

// function MenuConstr() {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [totalVolume, setTotalVolume] = useState(200);
//     const [totalCost, setTotalCost] = useState(0);
//     const [isImagePopupOpen, setImagePopupOpen] = useState(false);

//     const handleSelectItem = (item) => {
//         const selectedProduct = productData.find((product) => product.name === item);

//         if (
//             selectedProduct &&
//             selectedProduct.available &&
//             selectedItems.length < 5
//         ) {
//             setSelectedItems((prevItems) => [...prevItems, selectedProduct]);
//         } else {
//             alert("Неможливо додати, максимально 5 інгрідіентів :) ");
//         }
//     };

//     const handleSelectVolume = (volume) => {
//         setTotalVolume(Number(volume));
//     };

//     const handleOrderClick = () => {
//         setImagePopupOpen(true);
//     };

//     useEffect(() => {
//         let cost = 0;
//         const itemsCount = selectedItems.length;
//         if (itemsCount === 0) {
//             setTotalCost(0);
//             return;
//         }

//         const volumePerItem = totalVolume / itemsCount;

//         selectedItems.forEach((item) => {
//             cost += (item.pricePerLiter / 1000) * volumePerItem;
//         });

//         setTotalCost(cost.toFixed(2));
//     }, [selectedItems, totalVolume]);

//     return (
//         <div className="MenuConstr">
//             <h3 className="MenuConstr-header">Сторінка Смузі конструктор</h3>
//             <h2>Оберіть продукт та об'єм:</h2>

//             <div className="volume-dropdown">
//                 <label className="label-container">
//                     <div className="select-container">
//                         <select
//                             value={totalVolume}
//                             onChange={(e) => handleSelectVolume(e.target.value)}>
//                             <option value={200}>200 мл</option>
//                             <option value={500}>500 мл</option>
//                             <option value={1000}>1 л</option>
//                         </select>
//                     </div>
//                 </label>

//             </div>

//             <button className="MenuConstr-btn" onClick={handleOrderClick}>
//                 ЗАМОВИТИ ПРОДУКТИ
//             </button>

//             {isImagePopupOpen && (
//                 <div className="image-popup">
//                     <button className="close-button"onClick={() => setImagePopupOpen(false)}>Закрити</button>
//                     <div className="image-list">
//                         {productData.map((product, index) => (
//                             <div
//                                 key={index}
//                                 className={`image-item ${!product.available ? "unavailable" : ""}`}
//                                 onClick={() => handleSelectItem(product.name)}>
//                                 <img src={product.image} alt={product.name} className="product-image" />
//                                 <p className="product-name">{product.name}</p>
//                                 <p className="product-pricePerLiter">{product.pricePerLiter} грн</p>

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             <h2>Вибрані продукти:</h2>
//             <p>Общий об'єм: {totalVolume} мл</p>
//             <ul className="selected-order">
//                 {selectedItems.map((item, index) => (
//                     <li className="selected-product" key={index}>{item.name}</li>
//                 ))}
//             </ul>

//             <p>Загальна вартість: {totalCost} грн</p>

//             <button className="MenuConstr-btn">До корзини</button>
//         </div>
//     );
// }

// export default MenuConstr;




import React, { useState, useEffect } from "react";
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
        name: "Яблуко",
        image: imgApple,
        available: true,
        pricePerLiter: 390,
    },
    {
        name: "Банан",
        image: imgBanan,
        available: false,
        pricePerLiter: 360,
    },
    {
        name: "Апельсин",
        image: imgApelsin,
        available: true,
        pricePerLiter: 410,
    },
    {
        name: "Морква",
        image: imgMorkava,
        available: true,
        pricePerLiter: 510,
    },
    {
        name: "Спанач",
        image: imgSpinach,
        available: true,
        pricePerLiter: 360,
    },
    {
        name: "Маракуя",
        image: imgmaracuja,
        available: true,
        pricePerLiter: 440,
    },
    {
        name: "Ківі",
        image: imgkivi,
        available: true,
        pricePerLiter: 340,
    },
    {
        name: "Ананас",
        image: imgAnanas,
        available: true,
        pricePerLiter: 480,
    },
    {
        name: "Авокадо",
        image: imgAvokado,
        available: true,
        pricePerLiter: 560,
    },
    {
        name: "Кокос",
        image: imgKokos,
        available: false,
        pricePerLiter: 420,
    },
    {
        name: "Манго",
        image: imgMango,
        available: false,
        pricePerLiter: 380,
    },
    {
        name: "Полуниця",
        image: imgPolunica,
        available: true,
        pricePerLiter: 350,
    },
];

function MenuConstr() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalVolume, setTotalVolume] = useState(200);
    const [totalCost, setTotalCost] = useState(0);
    const [isImagePopupOpen, setImagePopupOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSelectItem = (item) => {
        const selectedProduct = productData.find((product) => product.name === item);

        if (
            selectedProduct &&
            selectedProduct.available &&
            selectedItems.length < 5
        ) {
            setSelectedItems((prevItems) => [...prevItems, selectedProduct]);
        } else {
            alert("Неможливо додати, максимально 5 інгрідіентів :) ");
        }
    };

    const handleSelectVolume = (volume) => {
        setTotalVolume(Number(volume));
    };

    const handleOrderClickBtn = () => {
        setImagePopupOpen(true);
    };

    const handleOrderClick = () => {
        if (selectedItems.length === 0) {
            setFormSubmitted(true);
            setSubmitMessage("Спочатку оберіть смузі");
        } else {
            setFormSubmitted(true);
            setSubmitMessage("Заказ відправлено в корзину.");
            setSelectedItems([]);
            setTotalVolume(200);
            setTotalCost(0);
        }

        setTimeout(() => {
            setFormSubmitted(false);
            setSubmitMessage("");
        }, 2000);
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
            cost += (item.pricePerLiter / 1000) * volumePerItem;
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
                        <select
                            value={totalVolume}
                            onChange={(e) => handleSelectVolume(e.target.value)}>
                            <option value={200}>200 мл</option>
                            <option value={500}>500 мл</option>
                            <option value={1000}>1 л</option>
                        </select>
                    </div>
                </label>

            </div>

            <button className="MenuConstr-btn" onClick={handleOrderClickBtn}>
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
                                onClick={() => handleSelectItem(product.name)}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <p className="product-name">{product.name}</p>
                                <p className="product-pricePerLiter">{product.pricePerLiter} грн</p>

                            </div>
                        ))}
                    </div>
                </div>
            )}

            <h2>Вибрані продукти:</h2>
            <p>Общий об'єм: {totalVolume} мл</p>
            <ul className="selected-order">
                {selectedItems.map((item, index) => (
                    <li className="selected-product" key={index}>{item.name}</li>
                ))}
            </ul>

            <p>Загальна вартість: {totalCost} грн</p>

            <button className="MenuConstr-btn" onClick={handleOrderClick}>До корзини</button>
            {formSubmitted && (
                <p className="form-submitted-message">{submitMessage}</p>
            )}
        </div>
    );
}

export default MenuConstr;