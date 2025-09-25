import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobileBanner.css';
import bannermovil1 from '../assets/bannermovil1.jpeg';

interface Settings {
  slidesToShow: number;
  slidesToScroll: number;
  autoplaySpeed: number;
  arrows: boolean;
  dots: boolean;
  infinite?: boolean;
  centerMode?: boolean;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: Settings;
  }>;
}

const MobileBanner: React.FC = (): React.ReactElement => {
  // Múltiples copias de la misma imagen para demostrar el efecto carrusel
  const banners = [
    {
      id: 1,
      image: bannermovil1,
      alt: "Banner móvil de Lorena Fries - Slide 1"
    },
    {
      id: 2,
      image: bannermovil1,
      alt: "Banner móvil de Lorena Fries - Slide 2"
    },
    {
      id: 3,
      image: bannermovil1,
      alt: "Banner móvil de Lorena Fries - Slide 3"
    },
    {
      id: 4,
      image: bannermovil1,
      alt: "Banner móvil de Lorena Fries - Slide 4"
    }
  ];

  const sliderSettings: SliderSettings = {
    dots: true,
    infinite: true, // Ahora tenemos múltiples slides
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Activar autoplay con múltiples slides
    autoplaySpeed: 3000, // Cambiar cada 3 segundos
    arrows: false, // Sin flechas en móvil
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2500, // Más rápido en móvil
          arrows: false,
          dots: true // Mostrar dots para navegación
        }
      }
    ]
  };

  return (
    <section id="mobile-banner" className="mobile-banner-container">
      {/* Solo mostrar en móvil */}
      <div className="block lg:hidden">
        <div className="mobile-banner-wrapper">
          <Slider {...sliderSettings} className="mobile-banner-slider">
            {banners.map((banner) => (
              <div key={banner.id} className="mobile-banner-slide">
                <div className="mobile-banner-image-container">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="mobile-banner-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MobileBanner;