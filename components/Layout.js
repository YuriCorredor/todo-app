import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href='/'>
          <img width={90} className="p-4 cursor-pointer" src="logo.png" />
        </Link>
      </header>
      {children}
    </>
  )
}
