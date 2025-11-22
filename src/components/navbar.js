'use client'

import Logo from './logo'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-14 px-2 md:px-4 w-full border border-white/10">
      <Logo />
    </nav>
  )
}
