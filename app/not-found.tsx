import Link from "next/link";

export default function NotFound() {
  return (
    <main className="my-20 min-h-80">
      <h2 className="text-3xl mb-6">There was a problem :/</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to the <Link className="underline" href="/">Home page</Link>.</p> 
    </main>
  )
}