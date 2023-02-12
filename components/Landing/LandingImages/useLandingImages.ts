import { useState } from "react";

const useLandingImages = () => {
  const [landingImage, setLandingImage] = useState<number>(1);

  return { landingImage };
};

export default useLandingImages;
