import React from "react";
import { IconScrollContainer, IconScrollContent } from "./IconScroll";

const IconScroll = () => {
  return (
    <IconScrollContainer
      style={{ opacity: 0, y: 20 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 3.5, type: "spring" },
      }}
      viewport={{ once: true }}
    >
      <IconScrollContent />
    </IconScrollContainer>
  );
};

export default IconScroll;
