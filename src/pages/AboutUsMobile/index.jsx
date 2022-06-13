import { Container } from "../../components/Container";
import ImgOne from "../../assets/images/imgAbout1.png";
import ImgTwo from "../../assets/images/imgAbout2.png";
import AboutUsTitle from "../../components/AboutUsTitle";
import {
  AboutUsWrap,
  TextContainer,
  TextWrap,
  Text,
  Image,
} from "./AboutUsMobile";
const AboutUsMobile = () => {
  return (
    <Container vh={"fit-content"}>
      <AboutUsTitle />
      <AboutUsWrap>
        <Image img={ImgOne} topPos={"0em"} />
        <TextContainer>
          <TextWrap>
            <Text lettering>Studio Projekt B28</Text>
            <Text>
              oferuje fachowe i twórcze podejście do tematu tatuowania.
              Podstawowym celem naszej działalności jest tworzenie
              indywidualnych i niepowtarzalnych wzorów. Klient może skorzystać u
              nas z przygotowanych do wglądu, przygotować własny projekt lub
              zamówić u nas projekt tatuażu ,,na życzenie”.
            </Text>
          </TextWrap>
        </TextContainer>
        <Image img={ImgTwo} topPos={"-8em"} />
      </AboutUsWrap>
    </Container>
  );
};

export default AboutUsMobile;
