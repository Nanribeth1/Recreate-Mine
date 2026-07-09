import { describe, expect, it } from 'vitest'

import { cn } from '@/lib/utils'

describe('cn', () => {
  it('joins multiple class name strings', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('ignores falsy values', () => {
    expect(cn('a', false, null, undefined, 0, '', 'b')).toBe('a b')
  })

  it('resolves conditional object syntax', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active')
  })

  it('flattens nested arrays of class names', () => {
    expect(cn(['a', ['b', 'c']], 'd')).toBe('a b c d')
  })

  it('merges conflicting tailwind classes keeping the last one', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('keeps non-conflicting tailwind utilities', () => {
    expect(cn('px-2 py-1', 'text-sm')).toBe('px-2 py-1 text-sm')
  })

  it('returns an empty string when given no arguments', () => {
    expect(cn()).toBe('')
  })
})
