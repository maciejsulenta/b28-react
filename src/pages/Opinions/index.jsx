import { Container } from "../../components/Container";
import Opinion from "../../components/Opinion";
import { Title } from "../../components/Title";
import { TitleWrap, Wrap } from "./Opinions";
const Opinions = () => {
  return (
    <Container vh="fit-content" opinions>
      <TitleWrap
        id="opinionsTitle"
        // style={{ opacity: 0, filter: "blur(10px)" }}
        // whileInView={{
        //   opacity: 1,
        //   filter: "blur(0px)",
        // }}
        // viewport={{ once: true }}
      >
        <Title opinions>Opinie naszych klientów</Title>
      </TitleWrap>
      <Wrap>
        <Opinion
          
          first="true"
          t={"-.2em"}
          l={"-.4em"}
          text={
            "Z czystym sumieniem polecem studio jest sterylnie, miłe towarzystwo i co najważniejsze dokładność, przez co tatuaże wychodzą wręcz idealnie. Jeszcze raz polecam."
          }
        />
        <Opinion
          
          t={"99%"}
          l={"99%"}
          text={
            "Bardzo mila atmosfera, każdy detal tatuażu doprowadzony do perfekcji. Widać ze chłopaki pracują z pasją!"
          }
        />
      </Wrap>
    </Container>
  );
};

export default Opinions;
