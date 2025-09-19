"use client"

import Image from "next/image";
import Header from "./components/Header";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const goToProject = (index: number) => {
    router.push(`/projects?open=${index}`);
  };

  return (

    // <div className="flex flex-1 relative items-center justify-center pb-12">
    //   {/* Center Row */}
    //   <div className="flex justify-between w-full px-2 font-semibold text-sm">
    //     <div>FEATURED PROJECT</div>
    //     <div>LOCKED IN: HABIT TRACKER</div>
    //     <div>iOS</div>
    //     <div className="underline">VIEW PROJECT</div>
    //   </div>

    //   {/* Bottom Left */}
    //   <div className="absolute bottom-4 left-4 leading-5 text-lg md:leading-9 md:text-4xl font-semibold tracking-tight">
    //     I am a design focued<br />developer passionate about<br />making people&apos;s lives easier
    //   </div>

    //   {/* Bottom Right */}
    //   <div className="absolute bottom-4 right-4 text-xl font-semibold">
    //     (HOME)
    //   </div>
    // </div>
     <div className="relative flex flex-col h-dvh min-w-screen text-white">
      {/* Background Image */}
      <Image
        src="/IMG_1412-min.JPG"
        alt="background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Header overlay */}
      <Header className="absolute top-0 left-0 w-full z-50" />

      {/* Main content area */}
      <div className="flex flex-1 flex-col items-center justify-center relative z-20 pb-12">
        {/* Center Row */}
        <div className="flex justify-between w-full px-6 font-semibold text-xs md:text-sm">
          <div>FEATURED PROJECT</div>
          <div>LOCKED IN: HABIT TRACKER</div>
          <div className="hidden md:block">iOS</div>
          <div
            className="underline cursor-pointer"
            onClick={() => goToProject(1)} // index of Locked In
          >
            VIEW PROJECT
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-8 left-8 leading-5 text-lg md:leading-9 md:text-4xl font-semibold tracking-tight">
          I am a design focued<br />developer passionate about<br />making people&apos;s lives easier
        </div>

        {/* Bottom Right */}
        <div className="absolute text-lg bottom-8 right-8 md:text-xl font-semibold tracking-tight">
          (HOME)
        </div>
      </div>
    </div>
      
  );
}
