import { LandingForm } from "components";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-between pt-10 px-20 pb-20 bg-gray-200">
      <div className="flex flex-wrap gap-10 h-[calc(100vh_-_120px)] overflow-auto scroll_remove ">
        <Image
          src="/assets/imgs/1.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/2.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/3.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/5.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/4.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/6.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/7.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
        <Image
          src="/assets/imgs/8.jpg"
          alt="ai-image"
          width={900}
          height={900}
          className="rounded-md w-[30rem] h-[30rem] object-cover"
        />
      </div>
      <div className="min-w-[20rem] lg:min-w-[40rem] pl-20 flex items-center flex-col">
        <h1 className="text-3xl  lg:text-4xl text-neutral-900 font-medium text-center">
          AI With Your Vision
        </h1>

        <h1 className="text-2xl lg:text-3xl text-neutral-900 font-medium text-center mt-32">
          Welcome Back
        </h1>
        <LandingForm />
      </div>
    </div>
  );
};

export default Home;
