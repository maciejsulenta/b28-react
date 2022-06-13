import { Container } from "../../components/Container";
import Opinion from "../../components/Opinion";
import { OpinionTitle } from "../../components/OpinionTitle";
const Opinions = () => {
  return (
    <Container vh="fit-content">
      <OpinionTitle>Opinie naszych klientów</OpinionTitle>
      <Opinion
        first
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
    </Container>
  );
};

export default Opinions;
