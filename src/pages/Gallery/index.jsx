import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Container, Slide } from "./Gallery.js";
const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef();
  const refs = useRef([]);
  useEffect(() => {
    const components = document.querySelectorAll("#component");
    const container = document.querySelector("#container");

    gsap.to(components, {
      xPercent: -100 - (refs.current.length - 1),
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

  return (
    <>
      <Container id="container">
        <Slide bgc id="component">
          Primeiro
        </Slide>
        <Slide id="component">sikutko</Slide>
      </Container>
    </>
  );
};

export default Gallery;
