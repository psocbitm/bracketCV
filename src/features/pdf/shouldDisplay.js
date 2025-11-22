'use client'
export const ShouldDisplay = ({ children, data }) => {
  if (!data || data.display === false) {
    return null
  }

  return <>{children}</>
}
