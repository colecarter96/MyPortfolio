// import fs from "fs";
// import path from "path";

// export default function AdminPage() {
//   const filePath = path.join(process.cwd(), "data/contactSubmissions.json");
//   const submissions = fs.existsSync(filePath)
//     ? JSON.parse(fs.readFileSync(filePath, "utf8"))
//     : [];

//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
//       {submissions.length === 0 ? (
//         <p>No submissions yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {submissions.map((s: any, i: number) => (
//             <li key={i} className="border p-4 rounded shadow">
//               <p><strong>Name:</strong> {s.name}</p>
//               <p><strong>Contact:</strong> {s.contact}</p>
//               <p><strong>Inquiry:</strong> {s.inquiry}</p>
//               <p className="text-gray-500"><em>{new Date(s.date).toLocaleString()}</em></p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }


import fs from "fs";
import path from "path";

// Define the submission type
interface Submission {
  name: string;
  contact: string;
  inquiry: string;
  date: string;
}

export default function AdminPage() {
  const filePath = path.join(process.cwd(), "data/contactSubmissions.json");
  const submissions: Submission[] = fs.existsSync(filePath)
    ? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Submission[])
    : [];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {submissions.map((s, i) => (
            <li key={i} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>Contact:</strong> {s.contact}</p>
              <p><strong>Inquiry:</strong> {s.inquiry}</p>
              <p className="text-gray-500"><em>{new Date(s.date).toLocaleString()}</em></p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
