import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='container'>
      <h1 className='text-4xl text-blue-100 flex items-center justify-center'>shamsiddin</h1>
      <Link href='/license' className='text-2xl text-black'>licence</Link>
    </div>
  )
}
