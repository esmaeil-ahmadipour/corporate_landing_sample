import PageLayout from "@/components/PageLayout";
import BackgroundImage from "@/components/BackgroundImage";
import reliabilityImg from "../../../public/reliability.jpg";

export default function Reliability() {
  return (
    <div>
      <PageLayout title="Reliability Page" />
      <BackgroundImage src={reliabilityImg} alt="Reliability image" />
    </div>
  );
}
