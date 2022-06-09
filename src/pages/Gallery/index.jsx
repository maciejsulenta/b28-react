import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Gallery1 from "../../assets/images/gallery1.png";
import Gallery2 from "../../assets/images/gallery2.png";
import Gallery3 from "../../assets/images/gallery3.png";
import Gallery4 from "../../assets/images/gallery4.png";
import Gallery5 from "../../assets/images/gallery5.png";
import Gallery6 from "../../assets/images/gallery6.png";
import { GalleryWrap, Slide, ImageContainer, Title } from "./Gallery.js";
const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll("#component");
    const container = document.querySelector("#container");

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
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
      <GalleryWrap id="container">
        <Slide bgc id="component">
          <ImageContainer col={"2/4"} row={"1/9"} img={Gallery1} />
          <ImageContainer col={"13/15"} row={"2/8"} img={Gallery2} />
          <ImageContainer col={"3/6"} row={"11/19"} img={Gallery3} />
          <ImageContainer col={"8/11"} row={"5/15"} img={Gallery4} />
          <ImageContainer col={"15/18"} row={"13/21"} img={Gallery5} />
          <ImageContainer col={"17/20"} row={"4/11"} img={Gallery6} />
        </Slide>
        <Slide bgc id="component">
          <ImageContainer col={"2/4"} row={"1/9"} img={Gallery1} />
          <ImageContainer col={"13/15"} row={"2/8"} img={Gallery2} />
          <ImageContainer col={"3/6"} row={"11/19"} img={Gallery3} />
          <ImageContainer col={"8/11"} row={"5/15"} img={Gallery4} />
          <ImageContainer col={"15/18"} row={"13/21"} img={Gallery5} />
          <ImageContainer col={"17/20"} row={"4/11"} img={Gallery6} />
        </Slide>
        <Slide bgc id="component">
          <ImageContainer col={"2/4"} row={"1/9"} img={Gallery1} />
          <ImageContainer col={"13/15"} row={"2/8"} img={Gallery2} />
          <ImageContainer col={"3/6"} row={"11/19"} img={Gallery3} />
          <ImageContainer col={"8/11"} row={"5/15"} img={Gallery4} />
          <ImageContainer col={"15/18"} row={"13/21"} img={Gallery5} />
          <ImageContainer col={"17/20"} row={"4/11"} img={Gallery6} />
        </Slide>
        <Slide bgc id="component">
          <ImageContainer col={"2/4"} row={"1/9"} img={Gallery1} />
          <ImageContainer col={"13/15"} row={"2/8"} img={Gallery2} />
          <ImageContainer col={"3/6"} row={"11/19"} img={Gallery3} />
          <ImageContainer col={"8/11"} row={"5/15"} img={Gallery4} />
          <ImageContainer col={"15/18"} row={"13/21"} img={Gallery5} />
          <ImageContainer col={"17/20"} row={"4/11"} img={Gallery6} />
        </Slide>
        <Slide bgc id="component">
          <ImageContainer col={"2/4"} row={"1/9"} img={Gallery1} />
          <ImageContainer col={"13/15"} row={"2/8"} img={Gallery2} />
          <ImageContainer col={"3/6"} row={"11/19"} img={Gallery3} />
          <ImageContainer col={"8/11"} row={"5/15"} img={Gallery4} />
          <ImageContainer col={"15/18"} row={"13/21"} img={Gallery5} />
          <ImageContainer col={"17/20"} row={"4/11"} img={Gallery6} />
        </Slide>
        <Title>Nasze prace</Title>
      </GalleryWrap>
    </>
  );
};

export default Gallery;
