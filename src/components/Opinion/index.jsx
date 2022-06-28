import { OpinionContainer, OpinionText, OpinionQuote } from "./Opinion";

const Opinion = ({ text, t, l, first }) => {
  return (
    <OpinionContainer
      first={first}
      className="opinion"
      // style={{ opacity: 0, filter: "blur(10px)" }}
      // whileInView={{
      //   opacity: 1,
      //   filter: "blur(0px)",
      // }}
      // viewport={{ once: true }}
    >
      <OpinionQuote top={t} left={l}>
        ”
      </OpinionQuote>
      <OpinionText>{text}</OpinionText>
    </OpinionContainer>
  );
};

export default Opinion;
