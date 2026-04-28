import Image from "next/image";
import { StaticImageData } from "next/image";

interface BackgroundImageProps {
  src: string | StaticImageData;
  alt: string;
}

const BackgroundImage = ({ src, alt }: BackgroundImageProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default BackgroundImage;
