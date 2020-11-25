import { useState, useEffect } from "react"

const useDeviceHeight = () => {
  const [height, setHeight] = useState(getWindowHeight())

  const handleResize = () => {
    setHeight(getWindowHeight())
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return height
}

function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window
    return height
  }
}

export default useDeviceHeight
