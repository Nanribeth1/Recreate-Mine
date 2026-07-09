import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useIsMobile } from '@/hooks/use-mobile'

type Listener = () => void

function mockMatchMedia() {
  const listeners = new Set<Listener>()
  const mql = {
    matches: false,
    media: '',
    addEventListener: (_: string, cb: Listener) => listeners.add(cb),
    removeEventListener: (_: string, cb: Listener) => listeners.delete(cb),
  }
  window.matchMedia = vi.fn().mockReturnValue(mql) as unknown as typeof window.matchMedia
  return {
    fire: () => listeners.forEach((cb) => cb()),
    listenerCount: () => listeners.size,
  }
}

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width,
  })
}

describe('useIsMobile', () => {
  let media: ReturnType<typeof mockMatchMedia>

  beforeEach(() => {
    media = mockMatchMedia()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns true when the viewport is narrower than the breakpoint', () => {
    setWidth(500)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('returns false when the viewport is at or above the breakpoint', () => {
    setWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('treats exactly 768px as not mobile', () => {
    setWidth(768)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('updates when the media query change event fires', () => {
    setWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      setWidth(400)
      media.fire()
    })
    expect(result.current).toBe(true)
  })

  it('removes its listener on unmount', () => {
    setWidth(1024)
    const { unmount } = renderHook(() => useIsMobile())
    expect(media.listenerCount()).toBe(1)
    unmount()
    expect(media.listenerCount()).toBe(0)
  })
})
