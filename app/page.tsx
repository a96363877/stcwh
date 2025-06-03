"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">Server Not Responding</CardTitle>
          <CardDescription className="text-gray-600">
            We're having trouble connecting to our servers. This might be a temporary issue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-500 bg-gray-100 p-3 rounded-md">
            <strong>Error:</strong> {error.message || "Server connection failed"}
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={reset} className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Button variant="outline" onClick={() => (window.location.href = "/")} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            If the problem persists, please contact support or try again later.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
