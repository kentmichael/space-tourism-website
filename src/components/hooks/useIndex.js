import { useState } from "react"

const useIndex = () => {
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState({})

  return { index, setIndex, status, setStatus }
}

export default useIndex
