import React, { useEffect, useRef } from "react";
import useScrollPosition from "../useScrollPosition";
import {
  TitleContainerWrap,
  TitleContainer,
  TitleWrap,
  Title,
} from "./AboutUsTitle";

const AboutUsTitle = () => {
  const app = useRef();
  const scrollContainer = useRef();
  const skewConfigs = {
    ease: 0.2,
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
    const skewX = velocity * 300;
    scrollContainer.current.style.transform = `skewX(${skewX}deg`;

    requestAnimationFrame(() => skewScrolling());
  };
  const scrollPos = "-" + useScrollPosition() * 0.4 + "px";
  return (
    <TitleContainerWrap ref={app}>
      <TitleContainer posText={scrollPos} ref={scrollContainer}>
        <TitleWrap mobile>
          <Title mobile>Poznaj nas lepiej</Title>
        </TitleWrap>
        <Title>Poznaj nas lepiej Poznaj nas lepiej Poznaj nas lepiej</Title>
      </TitleContainer>
    </TitleContainerWrap>
  );
};

export default AboutUsTitle;
