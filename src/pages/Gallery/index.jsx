import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { galleryData } from "../../assets/data/galleryData";
import { GalleryWrap, Slide, ImageContainer, Title } from "./Gallery.js";
const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const component = document.querySelector("#component");
    const container = document.querySelector("#container");

    gsap.to(component, {
      xPercent: -100 + 20,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        // snap: 1 / (components.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  const ref = useRef();

  const skewConfigs = {
    ease: 0.5,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
    const size = window.innerWidth;
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size;
    const velocity = +acceleration;
    const skewX = velocity * 200;
    ref.current.style.transform = `skewX(${skewX}deg`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <GalleryWrap id="container">
        <Slide bgc id="component">
          {galleryData.map((item) => (
            <ImageContainer
              ref={ref}
              key={item.id}
              col={item.col}
              row={item.row}
              img={item.img}
            />
          ))}
        </Slide>
        <Title>Nasze prace</Title>
      </GalleryWrap>
    </>
  );
};

export default Gallery;
