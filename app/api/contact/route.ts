// import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// const filePath = path.join(process.cwd(), "data/contactSubmissions.json");

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json(); // { name, contact, inquiry }
//     let submissions: any[] = [];

//     if (fs.existsSync(filePath)) {
//       submissions = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     }

//     submissions.push({ ...body, date: new Date().toISOString() });

//     fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: (err as Error).message });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface SubmissionBody {
  name: string;
  contact: string;
  inquiry: string;
}

interface Submission extends SubmissionBody {
  date: string;
}

const filePath = path.join(process.cwd(), "data/contactSubmissions.json");

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubmissionBody; // properly typed
    let submissions: Submission[] = [];

    if (fs.existsSync(filePath)) {
      submissions = JSON.parse(fs.readFileSync(filePath, "utf8")) as Submission[];
    }

    submissions.push({ ...body, date: new Date().toISOString() });

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: (err as Error).message });
  }
}
