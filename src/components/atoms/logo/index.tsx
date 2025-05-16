import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white">
        <span className="font-bold">JC</span>
      </div>
      <span className="text-xl font-bold">JCREA</span>
    </Link>
  )
}