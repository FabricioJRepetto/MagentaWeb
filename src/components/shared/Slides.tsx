import { useState } from "react";
import slideImage1 from "../../assets/images/ilus3.jpg";
import bonsai from "../../assets/icons/bonsai.png";

//TODO Crear el resto de slides
const Slide_1 = () => {
    return (
        <div className="single-slide">
            <h2>
                <img className="slide-icon" src={bonsai} />
                Talent management
            </h2>
            <p>Personalized strategies to align your capabilities with industry needs and opportunities.</p>
            <img className="slide-ilustration" src={slideImage1} />
        </div>
    );
};
const Slide_2 = () => {
    return (
        <div className="single-slide">
            <h2>
                <img className="slide-icon" src={bonsai} />
                Slide #2
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img className="slide-ilustration" src={slideImage1} />
        </div>
    );
};
const Slide_3 = () => {
    return (
        <div className="single-slide">
            <h2>
                <img className="slide-icon" src={bonsai} />
                Slide #3
            </h2>
            <p>The quick brown fox jumps over the lazy dog</p>
            <img className="slide-ilustration" src={slideImage1} />
        </div>
    );
};

const Slides = () => {
    const [selected, setSelected] = useState<number>(0);

    const slides = [<Slide_1 />, <Slide_2 />, <Slide_3 />];

    return (
        <div className="slides-container">
            <div className="slides-button-container">
                <button onClick={() => setSelected(0)}>1</button>
                <button onClick={() => setSelected(1)}>2</button>
                <button onClick={() => setSelected(2)}>3</button>
            </div>

            <div className="slides-content">{slides[selected]}</div>
        </div>
    );
};

export default Slides;
