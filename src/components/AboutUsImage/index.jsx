import { AboutUsImageWrap, Image} from "./AboutUsImage";

const AboutUsImage = ({img, top, small}) => {
  return (
    <AboutUsImageWrap topPos={top} smaller={small}>
      <Image src={img} />
    </AboutUsImageWrap>
  );
};

export default AboutUsImage;
