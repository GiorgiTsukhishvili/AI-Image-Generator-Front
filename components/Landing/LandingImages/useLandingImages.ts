import { useState } from "react";

const useLandingImages = () => {
  const [landingImage, setLandingImage] = useState<number>(1);

  const showNext = () => {
    if (landingImage === 8) {
      setLandingImage(1);
    } else {
      setLandingImage((prevImage) => prevImage + 1);
    }
  };

  const showPrev = () => {
    if (landingImage === 1) {
      setLandingImage(8);
    } else {
      setLandingImage((prevImage) => prevImage - 1);
    }
  };

  return { landingImage, showNext, showPrev };
};

export default useLandingImages;
