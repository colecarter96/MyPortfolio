
export default function EducationPage() {
  return (
    <main className="tracking-tighter">
      {/* <div className="flex flex-col md:flex-row gap-64 text-left w-screen">
          <p className="ml-8 text-xl font-semibold">
            (MASTERS)
          </p>

          <div> 
            <p className="text-2xl font-bold">
              Computer Science ⟷ UC San Diego
            </p>
          </div>
          
      </div> */}

        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 text-left pt-20">
          {/* Left "margin" section */}
          <div className="md:w-1/3 lg:w-1/3 mb-6 md:mb-0 ml-6">
            <p className="font-semibold text-md md:text-lg">(MASTERS)</p>
          </div>

          {/* Right main content */}
          <div className="flex-1 flex flex-col items-left md:items-start pl-6 md:pl-0 pr-6 md:pr-0">
            <p className="mb-10 font-semibold text-3xl md:text-4xl">Computer Science ⟷ University of California San Diego</p>
            
            <img
              src="https://api.architectuul.org/media/4fd1eaa5-4b4c-4def-b50d-30e46d7b5f76/1312x.jpg"
              alt="example"
              className="w-full pr-0 md:pr-42  text-left"
            />
            <p className="mb-4 font-semibold text-2xl pt-2">Fall 2025 🡒 Spring 2026</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 text-left pt-30 md:pt-20">
          {/* Left "margin" section */}
          <div className="md:w-1/3 lg:w-1/3 mb-6 md:mb-0 ml-6">
            <p className="font-semibold text-lg">(BACHELORS OF SCIENCE)</p>
          </div>

          {/* Right main content */}
          <div className="flex-1 flex flex-col items-left md:items-start pl-6 md:pl-0 mb-20">
            <p className="mb-2 font-semibold text-3xl md:text-4xl">Computer Science ⟷ University of California San Diego</p>
            
            <img
              src="https://live.staticflickr.com/1586/25082735644_eb65c2d397_b.jpg"
              alt="example"
              className="w-full pr-6 md:pr-42  text-left"
            />
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
              <p className="mb-0 font-semibold text-2xl">Fall 2021 🡒 Spring 2025</p>
              <p className="mb-4 font-semibold text-2xl pr-44">Warren College</p>
            </div>
            
          </div>
        </div>

    </main>
  );
}