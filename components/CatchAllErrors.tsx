'use client';
import { useEffect } from 'react';

export default function CatchAllErrors({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onError = (ev: ErrorEvent) => {
      // swallow TimeoutError
      if (ev.error?.code === 23 || ev.message?.includes('TimeoutError')) {
        ev.preventDefault()
        ev.stopImmediatePropagation()
      }
    }
    const onRejection = (ev: PromiseRejectionEvent) => {
      if (ev.reason?.code === 23 || ev.reason?.message?.includes('TimeoutError')) {
        ev.preventDefault()
      }
    }
    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onRejection)
    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
    }
  }, [])

  return <>{children}</>
};