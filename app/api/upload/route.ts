import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { db } from "@/lib/db";

export const POST = async (req: any, res: any) => {

  console.log(req)
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    db.image.create({
      data: {
        imageUrl: "public/uploads/" + filename,
        postId: postid
      }
    })
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};