import Hero from "@/components/Hero";
import performanceImg from "../../../public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="Machine Welding image"
      title="We serve high performance applications."
    />
  );
}
