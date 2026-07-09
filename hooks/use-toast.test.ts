import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { reducer, toast, useToast } from '@/hooks/use-toast'

type State = { toasts: Array<{ id: string; open?: boolean; title?: unknown }> }

const baseToast = (id: string) => ({ id, open: true, title: `toast-${id}` })

describe('use-toast reducer', () => {
  it('adds a toast', () => {
    const state: State = { toasts: [] }
    const next = reducer(state, { type: 'ADD_TOAST', toast: baseToast('1') })
    expect(next.toasts).toHaveLength(1)
    expect(next.toasts[0].id).toBe('1')
  })

  it('enforces the toast limit of 1 by keeping only the newest', () => {
    const state: State = { toasts: [baseToast('1')] }
    const next = reducer(state, { type: 'ADD_TOAST', toast: baseToast('2') })
    expect(next.toasts).toHaveLength(1)
    expect(next.toasts[0].id).toBe('2')
  })

  it('updates only the matching toast', () => {
    const state: State = { toasts: [baseToast('1'), baseToast('2')] }
    const next = reducer(state, {
      type: 'UPDATE_TOAST',
      toast: { id: '1', title: 'updated' },
    })
    expect(next.toasts.find((t) => t.id === '1')?.title).toBe('updated')
    expect(next.toasts.find((t) => t.id === '2')?.title).toBe('toast-2')
  })

  it('dismissing a specific toast marks it closed but keeps it in state', () => {
    const state: State = { toasts: [baseToast('1'), baseToast('2')] }
    const next = reducer(state, { type: 'DISMISS_TOAST', toastId: '1' })
    expect(next.toasts.find((t) => t.id === '1')?.open).toBe(false)
    expect(next.toasts.find((t) => t.id === '2')?.open).toBe(true)
  })

  it('dismissing without an id closes every toast', () => {
    const state: State = { toasts: [baseToast('1'), baseToast('2')] }
    const next = reducer(state, { type: 'DISMISS_TOAST' })
    expect(next.toasts.every((t) => t.open === false)).toBe(true)
  })

  it('removes a specific toast by id', () => {
    const state: State = { toasts: [baseToast('1'), baseToast('2')] }
    const next = reducer(state, { type: 'REMOVE_TOAST', toastId: '1' })
    expect(next.toasts).toHaveLength(1)
    expect(next.toasts[0].id).toBe('2')
  })

  it('removes all toasts when id is undefined', () => {
    const state: State = { toasts: [baseToast('1'), baseToast('2')] }
    const next = reducer(state, { type: 'REMOVE_TOAST' })
    expect(next.toasts).toHaveLength(0)
  })
})

describe('toast() + useToast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    // Flush any pending dismiss/remove and reset the shared memory state.
    act(() => {
      vi.runOnlyPendingTimers()
    })
    vi.useRealTimers()
  })

  it('adds a toast that is exposed through the hook', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      toast({ title: 'Hello' })
    })
    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0].title).toBe('Hello')
    expect(result.current.toasts[0].open).toBe(true)
  })

  it('returns a handle that can update the toast', () => {
    const { result } = renderHook(() => useToast())
    let handle: ReturnType<typeof toast>
    act(() => {
      handle = toast({ title: 'first' })
    })
    act(() => {
      handle.update({ id: handle.id, title: 'second' })
    })
    expect(result.current.toasts[0].title).toBe('second')
  })

  it('dismiss closes the toast', () => {
    const { result } = renderHook(() => useToast())
    let handle: ReturnType<typeof toast>
    act(() => {
      handle = toast({ title: 'bye' })
    })
    act(() => {
      handle.dismiss()
    })
    expect(result.current.toasts[0].open).toBe(false)
  })

  it('closes the toast when onOpenChange is called with false', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      toast({ title: 'closeable' })
    })
    const created = result.current.toasts[0] as { onOpenChange?: (open: boolean) => void }
    act(() => {
      created.onOpenChange?.(false)
    })
    expect(result.current.toasts[0].open).toBe(false)
  })

  it('leaves the toast open when onOpenChange is called with true', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      toast({ title: 'stay-open' })
    })
    const created = result.current.toasts[0] as { onOpenChange?: (open: boolean) => void }
    act(() => {
      created.onOpenChange?.(true)
    })
    expect(result.current.toasts[0].open).toBe(true)
  })

  it('hook-level dismiss with no id closes all toasts', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      toast({ title: 'a' })
    })
    act(() => {
      result.current.dismiss()
    })
    expect(result.current.toasts.every((t) => t.open === false)).toBe(true)
  })
})
