import {
  AboutUsTextContainer,
  AboutUsTextContent,
  AboutUsTextWrap,
} from "./AboutUsText";

const AboutUsText = ({ scrollPos }) => {
  return (
    <AboutUsTextContainer scroll={scrollPos}>
      <AboutUsTextWrap>
        <AboutUsTextContent lettering>Studio Projekt B28</AboutUsTextContent>
        <AboutUsTextContent>
          oferuje fachowe i twórcze podejście do tematu tatuowania. Podstawowym
          celem naszej działalności jest tworzenie indywidualnych i
          niepowtarzalnych wzorów. Klient może skorzystać u nas z przygotowanych
          do wglądu, przygotować własny projekt lub zamówić u nas projekt
          tatuażu ,,na życzenie”.
        </AboutUsTextContent>
      </AboutUsTextWrap>
    </AboutUsTextContainer>
  );
};

export default AboutUsText;
