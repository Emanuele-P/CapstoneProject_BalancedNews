import { useEffect, useState } from 'react'

export const useDynamicHeight = (ref) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.clientHeight
        setHeight(newHeight)
      }
    }

    updateHeight()

    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [ref])

  return height
}
