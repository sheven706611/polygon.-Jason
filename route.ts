import { NextResponse, NextRequest } from "next/server";
import { readJSONFile } from "../../lib/json-utils";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectName: string } },
) {
  const projectName = params.projectName;

  const filePath = `public/database/${projectName}.json`;
  const jsonData = readJSONFile(filePath);
  return NextResponse.json(jsonData);
}
