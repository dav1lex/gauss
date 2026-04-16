'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to English by default (client-side for static export)
    router.replace('/en')
  }, [router])
  
  return null
}