import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[#0a0806] min-h-screen flex items-center justify-center text-center px-5">
      <div>
        <div className="font-display text-[160px] font-light text-[#1e1a16] leading-none select-none">
          404
        </div>
        <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">
          Page Not Found
        </div>
        <h1 className="font-display text-4xl font-light text-[#f5f0e8] mb-6">
          This scent has<br />
          <span className="italic text-[#c9973a]">faded away.</span>
        </h1>
        <p className="text-[#6b6460] mb-10 max-w-sm mx-auto">
          The page you are looking for does not exist. Let us take you back to our collection.
        </p>
        <Link
          href="/"
          className="inline-block font-mono-dm text-[10px] tracking-[0.2em] uppercase bg-[#c9973a] text-[#0a0806] px-8 py-4 hover:bg-[#e4bc58] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

