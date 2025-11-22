'use client'

import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Logo() {
  return (
    <Link href="/" className={`${montserrat.className} text-blue-400`}>
      bracketCV
    </Link>
  )
}
