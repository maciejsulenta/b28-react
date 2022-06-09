import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { galleryData } from "../../assets/data/galleryData";
import { GalleryWrap, Slide, ImageContainer, Title } from "./Gallery.js";
const Gallery = () => {
  //horizontal scroll
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
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  // array of refs
  const ref = useRef([]);
  useEffect(() => {
    ref.current = ref.current.slice(0, galleryData.length);
  }, [galleryData]);

  // skew images on scroll
  const skewConfigs = {
    ease: 0.4,
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

    requestAnimationFrame(() => skewScrolling());
    ref.current.map((item) => (item.style.transform = `skewX(${skewX}deg`));
  };

  return (
    <>
      <GalleryWrap id="container">
        <Slide bgc id="component">
          {galleryData.map((item) => (
            <ImageContainer
              className="skewek"
              ref={(el) => (ref.current[item.id] = el)}
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
