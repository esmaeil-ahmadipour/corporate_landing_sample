import PageLayout from "@/components/PageLayout";
import BackgroundImage from "@/components/BackgroundImage";
import performanceImg from "../../../public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <PageLayout title="Performance Page" />
      <BackgroundImage src={performanceImg} alt="Performance image" />
    </div>
  );
}
