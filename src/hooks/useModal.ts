import { useState } from 'react'

const useModal = () => {
  const [isVisible, setVisibility] = useState(false)

  const changeVisibility = () => setVisibility(prev => !prev)

  return [isVisible, changeVisibility] as const
}

export { useModal }
