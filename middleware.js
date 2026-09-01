import { geolocation } from "@vercel/functions";

export default function middleware(request) {
  const url = new URL(request.url);

  // TEST: solo muestra el 404 cuando agregas ?hgfdstre=d
  const testing404 = url.searchParams.get("hgfdstre") === "d";

  // Bloqueo real (desactivado mientras pruebas)
  // const { country } = geolocation(request);
  // const blocked = country === "PE";

  if (testing404) {
    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404: NOT_FOUND</title>
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      font-family: Arial, Helvetica, sans-serif;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .error {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .code {
      font-size: 24px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }
    .message {
      font-size: 14px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="error">
    <div class="code">404</div>
    <div class="message">
      <strong>NOT_FOUND</strong><br>
      The requested resource could not be found.
    </div>
  </div>
</body>
</html>`,
      {
        status: 404,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  return;
}

export const config = {
  matcher: "/(.*)",
};