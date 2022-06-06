import { Container } from "../../components/Container";
import ImgOne from "../../assets/images/imgAbout1.png";
import ImgTwo from "../../assets/images/imgAbout2.png";
import useScrollPosition from "../../components/useScrollPosition";
import AboutUsTitle from "../../components/AboutUsTitle";
import AboutUsText from "../../components/AboutUsText";
import AboutUsImage from "../../components/AboutUsImage";

const AboutUs = () => {
  return (
    <Container bgc vh={"fit-content"} aboutus>
      <AboutUsTitle />
      <AboutUsImage img={ImgOne} top={"0em"} small />
      <AboutUsText />
      <AboutUsImage img={ImgTwo} top={"-9.5em"} />
    </Container>
  );
};

export default AboutUs;
