import Hero from "@/components/Hero";
import reliabilityImg from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="Welder image"
      title="Super high reliability hosting."
    />
  );
}
