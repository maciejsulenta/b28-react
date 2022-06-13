import { OpinionContainer, OpinionText, OpinionQuote } from "./Opinion";

const Opinion = ({ text, t, l, first }) => {
  return (
    <OpinionContainer opinion={first}>
      <OpinionQuote top={t} left={l}>
        ”
      </OpinionQuote>
      <OpinionText>{text}</OpinionText>
    </OpinionContainer>
  );
};

export default Opinion;
