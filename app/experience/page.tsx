// export default function ExperiencePage() {
//   return (
//     <main>
//       <h1>Experience Page</h1>
//       <p>This is a blank page for your experience section.</p>
//     </main>
//   );
// }


"use client";

import Link from "next/link";

export default function ExperiencePage() {
  return (
    

    // <main className="min-h-screen pt-36 tracking-tight bg-white">
    //   <section className="flex flex-col md:flex-row w-full">
    //     {/* Left margin panel (for EXPERIENCE + optional content) */}
    //     <div className="hidden md:flex flex-col w-1/5 pl-0 pr-0">
    //       <p className="sticky top-0 z-10 text-lg font-semibold w-full border-b pl-6">(EXPERIENCE)</p>
    //       {/* You can put additional margin content here */}
    //     </div>

    //     {/* Right main content */}
    //     <div className="flex-1 flex flex-col">
    //       {/* Sticky bar including the margin + menu */}
    //       <div className="sticky top-0 z-10 flex w-full border-b border-gray-700 bg-white">
    //         {/* Include the margin inside sticky so border goes full width */}
            

    //         {/* Horizontal scroll menu */}
    //         <nav className="flex-1 overflow-x-auto whitespace-nowrap flex space-x-8 px-4 py-3 text-lg font-semibold">
    //           <a href="#oss" className="hover:text-gray-700">
    //             SWE Intern @ OSS
    //           </a>
    //           <a href="#ucsd" className="hover:text-gray-400">
    //             Research Assistant (UCSD)
    //           </a>
    //           <a href="#cses" className="hover:text-gray-400">
    //             VP Operations (CSES Dev)
    //           </a>
    //         </nav>
    //       </div>

    //       {/* Content sections */}
    //       <div className="px-6 md:px-0 space-y-24 py-12">
    //         <section id="oss" className="scroll-mt-20">
    //           <h2 className="text-2xl font-semibold mb-4">SWE Intern @ OSS</h2>
    //           <p className="text-gray-700">
    //             Blurb about SWE Intern experience. Describe what you did,
    //             technologies used, achievements, etc.
    //           </p>
    //         </section>

    //         <section id="ucsd" className="scroll-mt-20">
    //           <h2 className="text-2xl font-semibold mb-4">
    //             Research Assistant (UCSD)
    //           </h2>
    //           <p className="text-gray-700">
    //             Blurb about research assistant role. Mention the lab, focus area,
    //             and contributions.
    //           </p>
    //         </section>

    //         <section id="cses" className="scroll-mt-20">
    //           <h2 className="text-2xl font-semibold mb-4">
    //             VP Operations (CSES Dev)
    //           </h2>
    //           <p className="text-gray-700">
    //             Blurb about VP Operations role. Talk about leadership,
    //             organization, and outcomes.
    //           </p>
    //         </section>
    //       </div>
    //     </div>
    //   </section>
    // </main>

    <main className="min-h-screen pt-36 tracking-tight bg-white">
      <section className="flex flex-col w-full">
        {/* Sticky bar including margin + menu */}
        <div className="sticky top-0 z-10 flex w-full border-b-[1.5px] border-gray-700 bg-white">
          {/* Left label (hidden on small screens) */}
          <div className="hidden md:flex items-center w-1/5 pl-6">
            <p className="text-lg lg:text-xl font-semibold">Experience</p>
          </div>

          {/* Horizontal scroll menu */}
          <nav className="flex-1 overflow-x-auto whitespace-nowrap flex items-center space-x-8 px-4 py-3 text-lg lg:text-xl font-semibold">
            <a href="#oss" className="hover:text-white hover:bg-black flex">
              <p>SWE Intern</p>
              <p className="text-sm pl-1">(OSS)</p>
            </a>
            <a href="#ucsd" className="hover:text-white flex">
              <p>Research Assistant</p>
              <p className="text-sm pl-1">(UCSD)</p>
            </a>
            <a href="#cses" className="hover:text-white flex">
              <p>VP Operations</p>
              <p className="text-sm pl-1">(CSES Dev)</p>
            </a>
          </nav>
        </div>

        {/* Content sections */}
        <div className="px-6 md:pl-[20%] md:pr-6 space-y-24 py-12 ml-0 md:ml-4">
          <section id="oss" className="scroll-mt-20 pt-20">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Software Engineering Intern</h2>
              <a href="https://onestopsystems.com/?gad_source=1&gad_campaignid=22936074644&gbraid=0AAAAAD-5PNOcrzz358Gt3LHuM4WGnCHPa&gclid=CjwKCAjwlaTGBhANEiwAoRgXBZUTVCBdY9WnG88POdYIlT8kkphy_q0hElhAkpjBwB5E4y215qcOLBoCb0IQAvD_BwE" target="_blank"><h1 className="text-xl md:text-3xl font-semibold mb-4 underline pr-0 md:pr-4">One Stop Systems ↗</h1></a>
            </div>
            {/* <h2 className="text-4xl font-semibold mb-4">Software Engineering Intern</h2>
            <h1 className="text-3xl font-semibold mb-4">One Stop Systems ↗</h1> */}
            <p className="pt-10 md:text-xl">
              ↳Designed and deployed PXE servers, reducing setup time by 70% and improving engineer workflow
            </p>
            <p className="pt-2 md:text-xl">
              ↳Assembled boot images for multiple Linux distributions, each optimized with unique NVIDIA CUDA downloads
            </p>
            <p className="pt-2 md:text-xl">
              ↳Validated CUDA Sample execution on H100 GPUs remotely, ensuring system engineers had correctly configured
environments
            </p>
          </section>

          <section id="ucsd" className="scroll-mt-20 pt-20">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Research Assistant</h2>
              <a href="https://seelab.ucsd.edu/" target="_blank"><h1 className="text-xl md:text-3xl font-semibold mb-4 underline pr-0 md:pr-4">UCSD SEE Lab ↗</h1></a>
            </div>
            {/* <h2 className="text-4xl font-semibold mb-4">Software Engineering Intern</h2>
            <h1 className="text-3xl font-semibold mb-4">One Stop Systems ↗</h1> */}
            <p className="pt-10 md:text-xl">
              ↳Benchmarked BioBloom Tools against industry-standard methods to evaluate efficiency in host read filtering, analyzing Bloom filter creation and categorization performance
            </p>
            <p className="pt-2 md:text-xl">
              ↳Generated simulated sequencing reads of the human and SARS-CoV-2 genome using ART Illumina for input data
            </p>
            <p className="pt-2 md:text-xl">
              ↳Deployed BioBloom Tools on cloud infrastructure using Kubernetes and Docker to scale benchmarking experiments
across distributed computing resources for reliable results
environments
            </p>
          </section>

          <section id="cses" className="scroll-mt-20 pt-20 pb-20">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">VP Operations</h2>
              <a href="https://csesucsd.com/" target="_blank"><h1 className="text-xl md:text-3xl font-semibold mb-4 underline pr-0 md:pr-4">UCSD CSES Dev ↗</h1></a>
            </div>
            {/* <h2 className="text-4xl font-semibold mb-4">Software Engineering Intern</h2>
            <h1 className="text-3xl font-semibold mb-4">One Stop Systems ↗</h1> */}
            <p className="pt-10 md:text-xl">
              ↳Organized and led outreach efforts as Outreach Chair, coordinating industry networking events, including the Startup Career Fair, which connected students with five companies and resulted in 10+ internship offers
            </p>
            <p className="pt-2 md:text-xl">
              ↳Managed operations as VP of Operations for CSES Dev, overseeing room bookings, budgeting coordination, social event planning, and presentation preparation to support student-run development projects

            </p>
           
          </section>
        </div>
      </section>
    </main>




  );
}