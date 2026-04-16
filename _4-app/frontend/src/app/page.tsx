'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to Polish by default (primary locale)
    router.replace('/pl')
  }, [router])
  
  return null
}