import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "Hemanshu_Boppana_Resume.pdf");
  const pdfBuffer = await readFile(filePath);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Hemanshu_Boppana_Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
