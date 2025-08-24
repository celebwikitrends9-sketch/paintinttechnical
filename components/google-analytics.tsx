"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// This component is used to track page views in Google Analytics
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Push page view to dataLayer when the path changes
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_search: searchParams.toString(),
        page_url: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ""),
      })
    }
  }, [pathname, searchParams])

  return null
}
