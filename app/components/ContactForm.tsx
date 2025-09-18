


// "use client";
// import { useState, useEffect } from "react";

// export default function ContactForm() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const [inquiry, setInquiry] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const handleOpen = () => setIsOpen(true);
//     window.addEventListener("openContactForm", handleOpen);
//     return () => window.removeEventListener("openContactForm", handleOpen);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const submissions = JSON.parse(
//       localStorage.getItem("contactSubmissions") || "[]"
//     );
//     submissions.push({ name, contact, inquiry, date: new Date().toISOString() });
//     localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

//     setSubmitted(true);

//     setTimeout(() => {
//       setIsOpen(false);
//       setName("");
//       setContact("");
//       setInquiry("");
//       setSubmitted(false);
//     }, 1500);
//   };

//   return (
//     <>
//       {/* Full-page modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <button
//             className="absolute top-4 right-4 text-6xl hover:text-gray-600 text-white"
//             onClick={() => setIsOpen(false)}
//           >
//             ×
//           </button>
//           <div className="relative w-full max-w-md mx-4 p-8 ">
//             <h2 className="text-white text-4xl font-semibold mb-6 text-left">Contact Me</h2>

//             <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="(NAME)"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="border  border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <input
//                 type="text"
//                 placeholder="(CONTACT)"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 required
//                 className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <textarea
//                 placeholder="(INQUIRY)"
//                 value={inquiry}
//                 onChange={(e) => setInquiry(e.target.value)}
//                 required
//                 className="border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-black resize-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-white text-black py-2 px-4 hover:bg-black hover:text-white transition"
//               >
//                 SEND
//               </button>
//             </form>

//             {submitted && (
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
//                 Inquiry sent!
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactForm", handleOpen);
    return () => window.removeEventListener("openContactForm", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, inquiry }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setName("");
          setContact("");
          setInquiry("");
          setSubmitted(false);
        }, 1500);
      } else {
        alert("Error saving submission: " + data.error);
      }
    } catch (err) {
      alert("Error saving submission: " + (err as Error).message);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-6xl hover:text-gray-600 text-white"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <div className="relative w-full max-w-md mx-4 p-8 ">
            <h2 className="text-white text-4xl font-semibold mb-6 text-left">
              Contact Me
            </h2>

            <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="(NAME)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="(CONTACT)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="(INQUIRY)"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <button
                type="submit"
                className="bg-white text-black py-2 px-4 hover:bg-black hover:text-white transition"
              >
                SEND
              </button>
            </form>

            {submitted && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
                Inquiry sent!
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
