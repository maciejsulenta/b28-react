import React, { useRef, useEffect } from "react";
import { CustomCursor, Wrap } from "./Cursor";

const Cursor = () => {
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;

      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });
  }, []);

  useEffect(() => {
    const cursorWrap = document.getElementById("cursorWrap");
    const cursor = document.getElementById("cursor");
    const hover = document.querySelectorAll(".hover");

    hover.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.style.transform = "rotate(180deg) scale(2)";
        cursorWrap.style.backgroundColor = "white";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.transform = "rotate(0deg) scale(1)";
        cursorWrap.style.backgroundColor = "transparent";
      });
    });
  });
  return (
    <CustomCursor ref={mainCursor} id="cursorWrap">
      <Wrap id="cursor"></Wrap>
    </CustomCursor>
  );
};

export default Cursor;
