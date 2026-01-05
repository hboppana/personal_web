import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

function sanitizeFilenameForDownload(name: string) {
  return name.replace(/[\\\r\\\n\"]/g, "_");
}

export async function GET() {
  const publicDir = join(process.cwd(), "public");

  // Prefer any PDF that starts with the expected prefix; fall back to the
  // original filename used previously.
  const files = await readdir(publicDir);
  const candidate = files.find((f) => /^Hemanshu_Boppana.*\.pdf$/i.test(f)) ||
    "Hemanshu_Boppana_Resume.pdf";

  const filePath = join(publicDir, candidate);
  const pdfBuffer = await readFile(filePath);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${sanitizeFilenameForDownload(candidate)}"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
