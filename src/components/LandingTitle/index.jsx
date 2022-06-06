import { StyledLandingTitle, LandingTitleWrap } from "./LandingTitle";
import { keyframes } from "styled-components";
const LandingTitle = () => {
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

  return (
    <LandingTitleWrap>
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
    </LandingTitleWrap>
  );
};

export default LandingTitle;
