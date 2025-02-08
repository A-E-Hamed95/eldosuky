import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import styles
import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css"; // Import CSS
import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";

const Hero = () => {
  const [animationKey, setAnimationKey] = React.useState(0); // State to trigger animation on slide change

  const slides = [
    {
      imageUrl: hero1,
      title: "Explore Our Premium Products!",
      description:
        "From cutting-edge kitchen designs to luxurious dressing rooms and energy-efficient windows, discover top-quality products that elevate your home.",
    },
    {
      imageUrl: hero2,
      title: "Expert Designers at Your Service!",
      description:
        "Our team of skilled professionals brings years of expertise to help you create the perfect spaces — from kitchens to dressing rooms and beyond.",
    },
    {
      imageUrl: hero3,
      title: "Affordable Pricing, Incredible Value!",
      description:
        "Get the best designs at competitive prices. Our transparent pricing ensures you get the highest quality without breaking the bank.",
    },
  ];

  const handleSlideChange = (index) => {
    // Delay the animation reset after the slide is completely changed
    setTimeout(() => {
      setAnimationKey(index);
    }, 1000); // 2 seconds delay after slide change
  };

  return (
    <Box sx={{ width: "100%", height: "500px" }}>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={1000}
        showStatus={false}
        onChange={(index) => handleSlideChange(index)}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <div
              style={{
                backgroundColor: isSelected ? "#232F63" : "white",
                borderRadius: "50%",
                height: "12px",
                width: "12px",
                margin: "0 5px",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={onClickHandler}
              aria-label={label}
            />
          );
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <div
            onClick={onClickHandler}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 2,
              cursor: "pointer",
              color: "white",
            }}
            aria-label={label}
          >
            &#10094;
          </div>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <div
            onClick={onClickHandler}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 2,
              cursor: "pointer",
              color: "white",
            }}
            aria-label={label}
          >
            &#10095;
          </div>
        )}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "500px",
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Semi-transparent overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay to improve text contrast
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "50%",
                textAlign: "center",
                zIndex: 1,
              }}
              key={animationKey} // Apply animation based on the animationKey change
              className={`${styles["slide-animate"]} ${
                animationKey === index ? styles["slide-in"] : ""
              }`}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {slide.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
