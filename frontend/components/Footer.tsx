"use client";
export default function Footer() {
  return (
    <footer className=" border-t row-start-3 flex gap-6 flex-wrap items-center justify-center my-2 py-2">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/enkhbold470/windy-city"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </footer>
  );
}
