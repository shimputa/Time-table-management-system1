import React,{useState,useEffect} from 'react';
import './Sliders.css';

const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  let slideInterval; // This variable will store the interval for automatic slide changing

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';

    setSlideIndex(n);
  };

  const startAutoSlide = () => {
    // Change slide every 3 seconds (adjust the interval as needed)
    slideInterval = setInterval(() => {
      plusSlides(1); // Show the next slide
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval); // Clear the interval to stop automatic slide changing
  };

  useEffect(() => {
    showSlides(slideIndex);
    startAutoSlide(); // Start automatic slide changing on component mount

    return () => {
      stopAutoSlide(); // Clean up: Stop automatic slide changing on component unmount
    };
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="building1.jpg" style={{ width: '100%' }} alt="Slide 1" />
      </div>

      <div className="mySlides fade">
        <img src="bulding2.jpeg" style={{ width: '100%' }} alt="Slide 2" />
      </div>

      <div className="mySlides fade">
        <img src="building4.jpeg" style={{ width: '100%' }} alt="Slide 3" />
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Sliders;