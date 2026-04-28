import PageLayout from "@/components/PageLayout";
import BackgroundImage from "@/components/BackgroundImage";
import homeImg from "../../public/home.jpg";

export default function HomePage() {
  return (
    <div>
      <PageLayout title="Home Page" />
      <BackgroundImage src={homeImg} alt="car factory" />
    </div>
  );
}
