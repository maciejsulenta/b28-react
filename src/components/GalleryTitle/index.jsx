import React, { useEffect, useRef } from "react";
import { Container, Text } from "./GalleryTitle";

const GalleryTitle = () => {
  const text1 = useRef();
  const text2 = useRef();
  useEffect(() => {
    const texts = [
      "Nasze prace",
      "Nasza twórczość",
      "Nasze tatuaże",
      "Nasze dzieła",
    ];

    const morphTime = 1.5;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    text1.current.textContent = texts[textIndex % texts.length];
    text2.current.textContent = texts[(textIndex + 1) % texts.length];

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1.5) {
        cooldown = cooldownTime;
        fraction = 1.5;
      }

      setMorph(fraction);
    };

    const setMorph = (fraction) => {
      text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      text1.current.textContent = texts[textIndex % texts.length];
      text2.current.textContent = texts[(textIndex + 1) % texts.length];
    };

    const doCooldown = () => {
      morph = 0;

      text2.current.style.filter = "";
      text2.current.style.opacity = "100%";

      text1.current.style.filter = "";
      text1.current.style.opacity = "0%";
    };

    const animate = () => {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
  }, []);
  return (
    <>
      <Container id="container">
        <Text ref={text1} id="text1"></Text>
        <Text ref={text2} id="text2"></Text>
      </Container>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default GalleryTitle;
