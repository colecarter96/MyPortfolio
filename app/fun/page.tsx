
// "use client";
// import { useRef, useEffect, useState } from "react";

// export default function FunPage() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
//   const cityRefs = useRef<HTMLHeadingElement[]>([]);

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (!el) return;

//       const atStart = el.scrollLeft <= 0;
//       const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth;

//       // Only hijack vertical scroll if we're not at the boundaries
//       if (!atStart && !atEnd) {
//         e.preventDefault();
//         el.scrollLeft += e.deltaY;
//       }
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const centerY = window.innerHeight / 2;

//       let closestIndex = 0;
//       let closestDistance = Infinity;

//       cityRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const distance = Math.abs(rect.top + rect.height / 2 - centerY);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = i;
//         }
//       });

//       setActiveCityIndex(closestIndex);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const images = [
//     { src: "/IMG_1412-min.JPG", title: "SURFING DEL MAR" },
//     { src: "/lockedInLogo2Dark.png", title: "LOCKED IN APP" },
//     { src: "/portfolioFooter-min.png", title: "FOOTER IMG" },
//     { src: "/logo1.jpg", title: "Logo Concept" },
//     { src: "/mockup1.jpg", title: "Brand Mockup" },
//     { src: "/poster1.jpg", title: "Poster Design" },
//     { src: "/cover1.jpg", title: "Album Cover" },
//     { src: "/flyer1.jpg", title: "Event Flyer" },
//     { src: "/logo1.jpg", title: "Logo Concept" },
//     { src: "/mockup1.jpg", title: "Brand Mockup" },
//   ];

//   const cities = ["San Diego", "Los Angeles", "London", "Como", "Milano", "Firenze", "Pisa", "Chioma", "Roma", "Amalfi", "Paris", "Nice", "Monaco", "Sevilla", "Madrid", "Barcelona", "Lisboa", "Copenhagen", "Zürich", "Geneva", "Lugano", "Prague"];

//   return (
//     <main className="tracking-tight scroll-smooth">
//       <div className="pt-20 ml-6">
//         <h1 className="font-bold text-5xl mb-6">GRAPHIC DESIGN</h1>

//         {/* Horizontal scroll hijack section */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory h-[80vh] hide-horizontal-scrollbar scroll-smooth"
//         >
//           {images.map((img, i) => (
//             <div
//               key={i}
//               className="relative flex-shrink-0 snap-start mx-6"
//               style={{ width: "300px" }}
//             >
//               <img
//                 src={img.src}
//                 alt={img.title}
//                 className="object-cover w-full h-auto absolute bottom-10 left-2"
//               />
//               <div className="absolute bottom-2 left-2 py-1 font-semibold text-xl">
//                 {img.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cities Section */}
//       <section className="flex flex-col gap-2 justify-start items-center py-40">
//         {cities.map((city, i) => (
//           <h2
//             key={city}
//             ref={(el) => (cityRefs.current[i] = el!)}
//             className={`text-6xl font-semibold transition-colors duration-50 ${
//               i === activeCityIndex ? "text-black" : "text-gray-400"
//             }`}
//           >
//             {city}
//           </h2>
//         ))}
//       </section>
//     </main>
//   );
// }



"use client";
import { useRef, useEffect, useState } from "react";

export default function FunPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
  const cityRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!el) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth;

      // Only hijack vertical scroll if we're not at the boundaries
      if (!atStart && !atEnd) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cityRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centerY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveCityIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const imgs = document.querySelectorAll<HTMLImageElement>(".reveal-image");
  imgs.forEach((img) => {
    img.classList.add("revealed");
  });
}, []);

  const images = [
    { src: "/IMG_1412-min.JPG", title: "SURFING DEL MAR" },
    { src: "/lockedInLogo2Dark.png", title: "LOCKED IN APP" },
    { src: "/portfolioFooter-min.png", title: "FOOTER IMG" },
    { src: "/IMG_1412-min.JPG", title: "SURFING DEL MAR" },
    { src: "/lockedInLogo2Dark.png", title: "LOCKED IN APP" },
    { src: "/portfolioFooter-min.png", title: "FOOTER IMG" },
    { src: "/IMG_1412-min.JPG", title: "SURFING DEL MAR" },
    { src: "/lockedInLogo2Dark.png", title: "LOCKED IN APP" },
    { src: "/portfolioFooter-min.png", title: "FOOTER IMG" },
  ];

  // const cities = ["San Diego", "Los Angeles", "London", "Como", "Milano", "Firenze", "Pisa", "Chioma", 
  //"Roma", "Amalfi", "Paris", "Nice", "Monaco", "Sevilla", "Madrid", "Barcelona", "Lisboa", "Copenhagen", 
  // "Zürich", "Geneva", "Lugano", "Prague"];

  const cities= [
    { city: "San Diego", country: "US", link: "" },
    { city: "Los Angeles", country: "US", link: "" },
    { city: "London", country: "UK", link: "" },
    { city: "Como", country: "ITA", link: "" },
    { city: "Milano", country: "ITA", link: "" },
    { city: "Firenze", country: "ITA", link: "" },
    { city: "Pisa", country: "ITA", link: "" },
    { city: "Chioma", country: "ITA", link: "" },
    { city: "Roma", country: "ITA", link: "" },
    { city: "Amalfi", country: "ITA", link: "" },
    { city: "Paris", country: "FRA", link: "" },
    { city: "Nice", country: "FRA", link: "" },
    { city: "Monaco", country: "MON", link: "" },
    { city: "Sevilla", country: "ESP", link: "" },
    { city: "Madrid", country: "ESP", link: "" },
    { city: "Barcelona", country: "ESP", link: "" },
    { city: "Lisboa", country: "PRT", link: "" },
    { city: "Copenhagen", country: "DNK", link: "" },
    { city: "Zürich", country: "CH", link: "" },
    { city: "Geneva", country: "CH", link: "" },
    { city: "Lugano", country: "CH", link: "" },
    { city: "Prague", country: "CZE", link: "" },
  ]

  return (
    <main className="tracking-tight scroll-smooth">
      <div className="pt-20 ml-6">
        

        {/* Horizontal scroll hijack section */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory h-[60vh] hide-horizontal-scrollbar scroll-smooth"
        >
          {images.map((img, i) => (
            // <div
            //   key={i}
            //   className="relative flex-shrink-0 snap-start mx-6"
            //   style={{ width: "300px" }}
            // >
            //   <img
            //     src={img.src}
            //     alt={img.title}
            //     className="object-cover w-full h-auto absolute bottom-10 left-2"
            //   />
            //   <div className="absolute bottom-2 left-2 py-1 font-semibold text-xl">
            //     {img.title}
            //   </div>
            // </div>
            <div
              key={i}
              className="relative flex-shrink-0 snap-start mx-6"
              style={{ width: "250px" }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="object-cover w-full h-auto absolute bottom-10 left-2 reveal-image"
              />
              <div className="absolute bottom-2 left-2 pt-2 font-semibold text-lg">
                {img.title}
              </div>
            </div>
          ))}
        </div>
        <h1 className="font-semibold text-6xl mb-6 pt-20 tracking-tighter">GRAPHIC DESIGN</h1>
      </div>

      {/* Cities Section */}
      {/* <section className="flex flex-col gap-2 justify-start items-center py-40">
        {cities.map((city, i) => (
          <h2
            key={city}
            ref={(el) => (cityRefs.current[i] = el!)}
            className={`text-6xl font-semibold transition-colors duration-50 ${
              i === activeCityIndex ? "text-black" : "text-gray-400"
            }`}
          >
            {city}
          </h2>
        ))}
      </section> */}
      <div>
        <section className="flex flex-col gap-2 justify-start items-center py-40">
          {cities.map((city, i) => (
            <div key={i} className="flex flex-row ">
              <p
                className={`text-sm font-semibold transition-colors duration-50 ${
                  i === activeCityIndex ? "text-black" : "text-gray-400"
                }`}
              >
                {city.country}
              </p>
              <h2
                ref={(el) => {
                  cityRefs.current[i] = el!;
                }}
                className={`text-6xl font-semibold transition-colors duration-50 ${
                  i === activeCityIndex ? "text-black" : "text-gray-400"
                }`}
              >
                {city.city}
              </h2>
            </div>
          ))}
        </section>

        <h1 className="font-semibold text-6xl mb-6 pt-4 pb-10 ml-6 tracking-tighter">
          TRAVEL
        </h1>
      </div>

    </main>
  );
}

