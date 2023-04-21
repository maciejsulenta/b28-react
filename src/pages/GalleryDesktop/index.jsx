import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { useEffect } from "react";
import { galleryData } from "../../assets/data/galleryData";
import GalleryTitle from "../../components/GalleryTitle";
import {
  GalleryWrap,
  Slide,
  ImageContainer,
  ProgressBar,
} from "./GalleryDesktop.js";
const GalleryDesktop = () => {
  //horizontal scroll
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const component = document.querySelector("#component");
    const container = document.querySelector("#container");
    let images = gsap.utils.toArray(".imge");

    let scrollTween = gsap.to(component, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        // markers: true,
        pin: true,
        scrub: 1,
        end: "+=" + container.offsetWidth,
      },
    });

    images.forEach((image, i) => {
      let tl = gsap.timeline({
        defaults: { duration: 0.2, ease: "elastic" },
        scrollTrigger: {
          containerAnimation: scrollTween,
          // markers: true,
          trigger: image,
          start: "center right",
          end: "left 70%",
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });

      tl.fromTo(
        image,
        { clipPath: "inset(0px 100% 0px 0px)" },
        { clipPath: "inset(0px 0px 0px 0px)" }
      );
    });

    gsap.from("#progressBar", {
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: "#slide",
        scrub: true,
        start: "top top",
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  // array of refs
  // const ref = useRef([]);
  // useEffect(() => {
  //   ref.current = ref.current.slice(0, galleryData.length);
  // }, []);

  // // skew images on scroll
  // const skewConfigs = {
  //   ease: 0.4,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // });

  // const skewScrolling = () => {
  //   skewConfigs.current = window.scrollY;
  //   skewConfigs.previous +=
  //     (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
  //   skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
  //   const size = window.innerWidth;
  //   const difference = skewConfigs.current - skewConfigs.rounded;
  //   const acceleration = difference / size;
  //   const velocity = +acceleration;
  //   const skewX = velocity * 700;

  //   requestAnimationFrame(() => skewScrolling());
  //   ref.current.map((item) => (item.style.transform = `skewX(${skewX}deg`));
  // };

  return (
    <>
      <GalleryWrap id="container" name="gallery">
        <Slide starter id="slide">
          <ProgressBar id="progressBar" />
        </Slide>
        <Slide id="component">
          {galleryData.map((item) => (
            <ImageContainer
              // style={{ clipPath: "inset(0px 100% 0px 0px)"}}
              // whileInView={{
              //   clipPath: "inset(0px 0px 0px 0px)",
              // }}
              // viewport={{ once: true }}
              // ref={(el) => (ref.current[item.id] = el)}
              className="imge"
              key={item.id}
              col={item.col}
              row={item.row}
              img={item.img}
            />
          ))}
        </Slide>
        <GalleryTitle />
      </GalleryWrap>
    </>
  );
};

export default GalleryDesktop;
