import { LeftArrow, RightArrow, useLandingImages } from "components";
import Image from "next/image";

const LandingImages = () => {
  const { landingImage, showNext, showPrev } = useLandingImages();

  return (
    <div className="flex flex-wrap justify-center gap-10 h-[calc(100vh_-_120px)]">
      <Image
        src={`/assets/imgs/${landingImage}.jpg`}
        alt="ai-image"
        width={1200}
        height={1200}
        className="rounded-md w-full min-w-[25rem] h-[calc(100vh_-_150px)] object-cover"
        priority
      />
      <div className="flex gap-10 justify-center items-center">
        <span onClick={showNext} className="cursor-pointer">
          <LeftArrow />
        </span>
        <span onClick={showPrev} className="cursor-pointer">
          <RightArrow />
        </span>
      </div>
    </div>
  );
};

export default LandingImages;
