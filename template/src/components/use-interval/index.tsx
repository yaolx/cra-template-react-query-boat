import { useRef, useEffect } from 'react'
/**
 * 计时器
 * @param {Function} callback
 * @param {number} delay
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef(() => {})
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
