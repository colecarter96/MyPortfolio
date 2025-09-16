import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (

    <div className="flex flex-1 relative items-center justify-center pb-12">
      {/* Center Row */}
      <div className="flex justify-between w-full px-2 font-semibold text-sm">
        <div>FEATURED PROJECT</div>
        <div>LOCKED IN: HABIT TRACKER</div>
        <div>iOS</div>
        <div className="underline">VIEW PROJECT</div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 leading-5 text-lg md:leading-9 md:text-4xl font-semibold tracking-tight">
        I am a design focued<br />developer passionate about<br />making people&apos;s lives easier
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 text-xl font-semibold">
        (HOME)
      </div>
    </div>
      
  );
}
