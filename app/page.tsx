import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Chat
      </h1>

      {/* Nav.menu*/}
      <nav className="Menu">
        <ul>
          <Link href="/sub">Sub</Link>
          <Link href="/sub/child">Child</Link>
          <Link href="/sub/grandchildren">Grandchildren</Link>
          <Link href="/sub/grandchildren/grandchild">Grandchild</Link>
          <Link href="/one">One</Link>
          <Link href="/two">Two</Link>
        </ul>
      </nav>
    </main>
  )
}
