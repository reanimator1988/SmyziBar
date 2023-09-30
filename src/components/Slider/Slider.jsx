import React, { useEffect } from "react";
import leftArrowImage from "./../../../static/images/leftArrow.png";
import rightArrowImage from "./../../../static/images/rightArrow.png";
import image1 from "./../../../static/images/1.jpeg";
import image2 from "./../../../static/images/2.jpg";
import image3 from "./../../../static/images/3.jpg";
import image4 from "./../../../static/images/4.jpg";
import image5 from "./../../../static/images/5.jpg";


const Slider = () => {
    useEffect(() => {
        const image = document.getElementById("image");
        const prevButton = document.getElementById("prev-btn");
        const nextButton = document.getElementById("next-btn");

        const images = [image1, image2, image3, image4, image5];


        let currentImageIndex = 0;

        function updateImage() {
            image.src = images[currentImageIndex];

            if (currentImageIndex === 0) {
                prevButton.style.display = "none";
            } else {
                prevButton.style.display = "block";
            }

            if (currentImageIndex === images.length - 1) {
                nextButton.style.display = "none";
            } else {
                nextButton.style.display = "block";
            }
        }

        prevButton.addEventListener("click", function () {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateImage();
            }
        });

        nextButton.addEventListener("click", function () {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
                updateImage();
            }
        });

        updateImage();
    }, []);

    return (
        <section className="carousel">
            <div className="image-container">
                <div>
                    <h3>SLIDE SHOW</h3>
                    <img id="image" src={image1} alt="slide" />
                </div>
            </div>
            <button id="prev-btn" className="prev">
                <img src={leftArrowImage} alt="Previous" />
            </button>
            <button id="next-btn" className="next">
                <img src={rightArrowImage} alt="Next" />
            </button>
        </section>
    );
};

export default Slider;
