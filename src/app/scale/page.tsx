import PageLayout from "@/components/PageLayout";
import BackgroundImage from "@/components/BackgroundImage";
import scaleImg from "../../../public/scale.jpg";

export default function Scale() {
  return (
    <div>
      <PageLayout title="Scale Page" />
      <BackgroundImage src={scaleImg} alt="Scale image" />
    </div>
  );
}
