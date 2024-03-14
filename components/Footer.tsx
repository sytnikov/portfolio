export default function Footer() {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} Alexey Sytnikov. All rights reserved.
      </small>
      <p>
        Portfolio built with React & Next.js (App Router & Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel
        hosting
      </p>
    </footer>
  );
}
