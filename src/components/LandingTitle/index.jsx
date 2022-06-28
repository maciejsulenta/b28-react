import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import {
  StyledLandingTitle,
  TitleWrap,
  LandingTitleWrap,
} from "./LandingTitle";
import { keyframes } from "styled-components";
import { useEffect } from "react";
import { red } from "@mui/material/colors";
const LandingTitle = () => {
  const ref = useRef();
  const b28Gradient = keyframes`
    0% {
      background-position: 100% 0%;
    }
      50% {
          background-position: 0% 0%;
      }
      100% {
          background-position: 0% 0%;
      }
  `;
  const studioGradient = keyframes`
      0% {
          background-position: 100% 0%;
      }
      25% {
          background-position: 100% 0%;
      }
    100% {
          background-position: 0% 0%;
      }
    `;

  // let first = gsap.timeline({
  //   defaults: {
  //     ease: "inOut",
  //     delay: 0.25,
  //     stagger: 0.2,
  //   },
  //   repeat: -1,
  //   onStart() {
  //     gsap.set(ref.current, {
  //       autoAlpha: 1,
  //     });
  //   },
  // });

  // first
  //   .from(".landing-title", {
  //     skewY: 6,
  //     duration: 1,
  //     yPercent: 150,
  //   })
  //   .to(
  //     ".landing-title",
  //     {
  //       skewY: -5,
  //       yPercent: -150,
  //     },
  //     "+=2"
  //   );

  return (
    <LandingTitleWrap ref={ref}>
      <TitleWrap
        id="landing"
        style={{ y: "100%", skew: "5deg, 5deg" }}
        whileInView={{
          skew: "0deg, 0deg",
          y: 0,
          transition: { duration: 2, delay: 1, type: "spring" },
        }}
        viewport={{ once: true }}
      >
        <StyledLandingTitle anim={b28Gradient} className="landing-title">
          B28
        </StyledLandingTitle>
        <StyledLandingTitle
          secondary
          anim={studioGradient}
          className="landing-title"
        >
          studio
        </StyledLandingTitle>
      </TitleWrap>
    </LandingTitleWrap>
  );
};

export default LandingTitle;
