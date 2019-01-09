import * as React from 'react'

export const memo = (React as any).memo

export const useState: <T>(
  t: T
) => [T, (prev: T | ((t: T) => T)) => void] = (React as any).useState

export const useEffect: (f: () => void, inputs?: any[]) => void = (React as any)
  .useEffect

export const useRef = (React as any).useRef
