"use client"

import type { ReactNode } from "react"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/google-analytics"

interface ProvidersProps {
  children: ReactNode
}

// Fallback component that renders nothing
function AnalyticsFallback() {
  return null
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Suspense fallback={<AnalyticsFallback />}>
        <GoogleAnalytics />
      </Suspense>
      {children}
    </>
  )
}
