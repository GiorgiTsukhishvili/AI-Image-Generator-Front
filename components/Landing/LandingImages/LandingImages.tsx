import Image from "next/image";

const LandingImages = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 h-[calc(100vh_-_120px)] w-auto overflow-auto scroll_remove ">
      <Image
        src="/assets/imgs/1.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/2.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/3.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/5.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/4.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/6.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/7.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
      <Image
        src="/assets/imgs/8.jpg"
        alt="ai-image"
        width={900}
        height={900}
        className="rounded-md w-[25rem] h-[25rem] object-cover"
        priority
      />
    </div>
  );
};

export default LandingImages;
