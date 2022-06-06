import Messenger from "../../assets/images/messenger.svg";
import { ButtonContainer, Image } from "./LandingButton";
const LandingButton = () => {
  return (
    <ButtonContainer>
      <Image src={Messenger} width={30} height={30} />
      Napisz do nas
    </ButtonContainer>
  );
};

export default LandingButton;
