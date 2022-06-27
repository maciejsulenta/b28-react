import React, { useEffect, useRef } from "react";
import useScrollPosition from "../useScrollPosition";
import {
  TitleContainerWrap,
  TitleContainer,
  TitleWrap,
  Title,
} from "./AboutUsTitle";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const AboutUsTitle = () => {
 
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewX", "deg"),
      clamp = gsap.utils.clamp(-20, 20);
      
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -150);

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.to(".skewElem", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  return (
    <TitleContainerWrap >
      <TitleContainer className="skewElem">
        <TitleWrap mobile>
          <Title mobile>Poznaj nas lepiej</Title>
        </TitleWrap>
        <Title>
          Poznaj nas lepiej Poznaj nas lepiej Poznaj nas lepiej Poznaj nas
          lepiej
        </Title>
      </TitleContainer>
    </TitleContainerWrap>
  );
};

export default AboutUsTitle;
