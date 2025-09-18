"use client";
import { useRef, useEffect, useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import Image from "next/image";

export default function FunPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
  const cityRefs = useRef<HTMLHeadingElement[]>([]);



  

  const runs = [
    { date: "January 25", distance: 4.02 },
    { date: "February 27", distance: 2.14 },
    { date: "April 8", distance: 1 },
    { date: "April 10", distance: 3.34 },
    { date: "April 12", distance: 3.81 },
    { date: "April 18", distance: 2.25 },
    { date: "April 23", distance: 2.18 },
    { date: "May 30", distance: 2.7 },
    { date: "June 2", distance: 2.75 },
    { date: "June 4", distance: 3.5 },
    { date: "June 6", distance: 3.4 },
    { date: "June 12", distance: 2.63 },
    { date: "June 19", distance: 3.79 },
    { date: "July 9", distance: 0.92 },
    { date: "July 10", distance: 1.7 },
    { date: "July 13", distance: 5.98 },
    { date: "July 15", distance: 1.32 },
    { date: "July 17", distance: 3.52 },
    { date: "July 29", distance: 9.19 },
    { date: "August 6", distance: 2.54 },
    { date: "August 8", distance: 3.39 },
    { date: "August 18", distance: 5.91 },
    { date: "August 21", distance: 3.17 },
    { date: "August 22", distance: 8.02 },
    { date: "August 25", distance: 3.26 },
    { date: "August 26", distance: 1.92 },
  ];

  const monthMap: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  
  function dateToDayOfYear(dateStr: string) {
    const [month, dayStr] = dateStr.split(" ");
    const monthIndex = monthMap[month];
    const day = parseInt(dayStr, 10);
    const d = new Date(2024, monthIndex, day); // leap year safe
    const start = new Date(2024, 0, 0);
    const diff = d.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  // extract just the month for x-axis
  const data = runs.map((run) => ({
    dayOfYear: dateToDayOfYear(run.date),
    distance: Number(run.distance),
    date: run.date,
  }));


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastDeltaY = 0;

    const onWheel = (e: WheelEvent) => {
      if (!el) return;

      const tolerance = 1;
      const atStart = el.scrollLeft <= tolerance;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - tolerance;

      // Scroll horizontally if possible
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        lastDeltaY = e.deltaY;
        return;
      }

      // Otherwise, scroll vertically
      window.scrollBy({
        top: e.deltaY,
        left: 0,
        behavior: "smooth",
      });
    };

    if (!("ontouchstart" in window)) {
      el.addEventListener("wheel", onWheel, { passive: false });
    }
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

  const monthTicks = [
    0,    // Jan 1
    31,   // Feb 1
    60,   // Mar 1 (ignoring leap year for simplicity)
    91,   // Apr 1
    121,  // May 1
    152,  // Jun 1
    182,  // Jul 1
    213,  // Aug 1
    244,  // Sep 1
    274,  // Oct 1
    305,  // Nov 1
    335,  // Dec 1
  ];

  const images = [
    { src: "/poster14-min.png", title: "MATTER EXPEDITION SERIES" },
    { src: "/poster3-min.png", title: "MATTER VERT" },
    { src: "/poster4-min.png", title: "MATTER STUDIO" },
    { src: "/poster6-min.png", title: "MATTER EA TICKET" },
    
    { src: "/poster11-min.png", title: "PANTS INDEX" },
    { src: "/poster12-min.png", title: "BASECAMP" },
    // { src: "/poster13-min.png", title: "MATTER FOUNDERS" },
    
    { src: "/poster15-min.png", title: "RUN POST" },
    { src: "/poster18-min.png", title: "MATTER RECORDS" },
    { src: "/poster20-min.png", title: "HANDCRAFTED SOFTWARE" },
    { src: "/triangleAltLogo-min.png", title: "TRIANGLE LOGO" },
    { src: "/poster10Fin-min.png", title: "MTR TRAIL DIVISION" },

  ];

  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

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
      <div className="flex md:hidden flex-col">
        <h1 className="font-semibold text-6xl pt-10 mb-6 md:pt-20 tracking-tighter pl-6">GRAPHIC DESIGN</h1>
        <div className="mx-auto">
          <img
            src="/poster14-min.png"
            alt="MATTER EXPEDITION SERIES PHOTO"
            width={350}
            height={200}
            className="w-[350px] h-auto mx-auto pt-10"
            loading="lazy"
          />
          <p className="text-xl font-semibold pt-2">MATTER EXPEDITION SERIES</p>
        </div>

        <div className="mx-auto">
          <img
            src="/poster3-min.png"
            alt="MATTER VERT PHOTO"
            width={350}
            height={200}
            className="w-[350px] md:w-[250px] lg:w-[350px] xl:w-[350px] h-auto mx-auto pt-10"
            loading="lazy"
          />
          <p className="text-xl font-semibold pt-2">MATTER VERT</p>
        </div>

        <div className="mx-auto">
          <img
            src="/poster12-min.png"
            alt="MATTER BASECAMP"
            width={350}
            height={200}
            className="w-[350px] md:w-[250px] lg:w-[350px] xl:w-[350px] h-auto mx-auto pt-10"
            loading="lazy"
          />
          <p className="text-xl font-semibold pt-2">BASECAMP</p>
        </div>

         <div className="mx-auto">
          <img
            src="/poster6-min.png"
            alt="MATTER EA TICKET"
            width={350}
            height={200}
            className="w-[350px] md:w-[250px] lg:w-[350px] xl:w-[350px] h-auto mx-auto pt-10"
            loading="lazy"
          />
          <p className="text-xl font-semibold pt-2">MATTER EA TICKET</p>
        </div>
      </div>
        
      <div className="hidden md:block   pt-10 md:pt-20 ml-6">
        

        {/* Horizontal scroll hijack section */}
        {/* <div
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
              className="relative flex-shrink-0 snap-start mx-2 w-[260px] md:w-[280px] lg:w-[350px]"
              // style={{ width: "250px" }}
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
        </div>*/}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory h-[60vh] hide-horizontal-scrollbar scroll-smooth"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 snap-start mx-2 w-[300px] md:w-[250px] lg:w-[300px] xl:w-[350px] flex flex-col justify-end"
            >
              {/* Image sits naturally above the text */}
              <Image
                src={img.src}
                alt={img.title}
                width={350}
                height={200}
                className="w-[300px] md:w-[250px] lg:w-[350px] xl:w-[350px] h-auto reveal-image"
                loading="lazy"
              />

              {/* Title below image */}
              <div className="pt-2 font-semibold text-lg">
                {img.title}
              </div>
            </div>
          ))}
        </div>
        
        <h1 className="font-semibold text-6xl pt-10 mb-6 md:pt-20 tracking-tighter">GRAPHIC DESIGN</h1>
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
        <h1 className="font-semibold text-6xl mb-6 pt-40 pb-2 ml-6 tracking-tighter">
          TRAVEL
        </h1>
        <section className="flex flex-col gap-2 justify-start items-center py-10 pb-40">
          {cities.map((city, i) => (
            <div key={i} className="flex flex-row ">
              <p
                className={`text-sm font-semibold transition-colors duration-0 ${
                  i === activeCityIndex ? "text-black" : "text-gray-400"
                }`}
              >
                {city.country}
              </p>
              <h2
                ref={(el) => {
                  cityRefs.current[i] = el!;
                }}
                className={`text-6xl lg:text-8xl font-semibold transition-colors duration-0 ${
                  i === activeCityIndex ? "text-black" : "text-gray-400"
                }`}
              >
                {city.city}
              </h2>
            </div>
          ))}
        </section>

        
      </div>

      {/* <div className="px-6 py-20">
        <h1 className="font-semibold text-6xl mb-12 tracking-tighter">
          SONGS I CAN PLAY
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 md:mx-20 lg:mx-40 pb-20">
          {[
            { title: "Banana Pancakes", artist: "Jack Johnson" },
            { title: "Hotel California", artist: "Eagles" },
            { title: "Blackbird", artist: "The Beatles" },
            { title: "Wish You Were Here", artist: "Pink Floyd" },
            { title: "What I Got", artist: "Sublime" },
            { title: "Under the Bridge", artist: "Red Hot Chill Peppers" },
            { title: "Dust in the Wind", artist: "Kansas" },
          ].map((song, i) => (
            <div
              key={i}
              className="p-6 relative group
                        transform transition-transform duration-300
                        hover:rotate-1 hover:-rotate-y-6 hover:scale-[1.02]
                        cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{song.title}</h2>
                  <p className="text-gray-500">{song.artist}</p>
                </div>

                <div className="text-xl pt-4">
                   ×
                </div>
              </div>
              
              

              <div className="flex w-full bg-gray-300 h-1 mt-2 rounded-full">
                <div className="w-1/3 bg-black rounded-full">

                </div>
                <div className="w-5 bg-yellow">
                  
                </div>
              </div>

              
              

              

              <div className="w-full flex justify-center pt-2">

                <div className="mr-auto px-2 py-2 text-lg">
                  ↺
                </div>

                <div className="px-2 py-2">
                  ⏮
                </div>
                <div className="group-hover:hidden px-4 py-3 text-white bg-black rounded-full">
                  ▶
                </div>
                <div className=" hidden group-hover:block px-4 py-2 text-white text-lg bg-black rounded-full">
                  ⏸︎
                </div>

                <div className="px-2 py-2">
                  ⏭
                </div>

                <div className="ml-auto px-2 py-2 text-2xl">
                  +
                </div>
                
              </div>

              
            </div>
          ))}
        </div>
      </div> */}
        
      
      <div className=" pb-20">
        <h1 className="font-semibold text-6xl ml-6 mb-6 pb-20 pt-10 tracking-tighter">
          RUNS
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center px-6">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="font-semibold text-3xl">
                LONGEST RUN
              </div>

              <div className="font-semibold text-2xl">
                9.19 MI
              </div>

              <div className="font-semibold text-3xl pt-8">
                FASTEST RUN
              </div>

              <div className="font-semibold text-2xl">
                5.18 MIN/MI
              </div>

              <div className="font-semibold text-3xl pt-8">
                MAX ELEV GAIN
              </div>

              <div className="font-semibold text-2xl">
                707 FT
              </div>

              <div className="font-semibold text-3xl pt-8">
                TOTAL DIST
              </div>

              <div className="font-semibold text-2xl pb-6">
                88.33 MI
              </div>
            </div>
            
          </div>
          
          <div className="w-full md:w-1/2 h-96 -ml-6 md:-ml-0">
            <h1 className="text-left md:text-right text-xl pl-6 md:pr-6 font-semibold underline">
              <a href="https://strava.app.link/Gujq0kqLLWb" target="_blank" >Strava ↗</a>
            </h1>
            <ResponsiveContainer>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid horizontal={true} vertical={true} stroke="#555555" strokeDasharray="0 0" />
                <XAxis
                  type="number"
                  dataKey="dayOfYear"
                  domain={[0, 365]}
                  ticks={monthTicks}
                  tickFormatter={(d) => {
                    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    const index = monthTicks.indexOf(d);
                    return months[index] || "";
                  }}
                  label={{ value: "", position: "insideBottom", offset: -5 }}
                  tickLine={false}
                />
                <YAxis
                  type="number"
                  dataKey="distance"
                  domain={[0, 10]}
                  ticks={[1,2,3,4,5,6,7,8,9,10]}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(d) => `${d} MI`}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  formatter={(val, name, props) =>
                    name === "distance" ? `${val} mi` : val
                  }
                  labelFormatter={(label, payload) =>
                    payload[0]?.payload.date || ""
                  }
                />
                {/* Gray shadow dots behind */}
                <Scatter data={data} fill="#000000" r={5} />
              </ScatterChart>
            </ResponsiveContainer>
            
          </div>
        </div>
        
      </div>
      

    </main>
  );
}


