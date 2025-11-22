import { memo } from 'react'

const Panel = memo(function Panel({ children, isVisibleOnMobile, className = '' }) {
  return (
    <section
      className={`

        h-full overflow-y-auto


        ${isVisibleOnMobile ? 'flex w-full opacity-100' : 'hidden opacity-0'}


        md:flex md:w-1/2 md:opacity-100


        ${className}
      `}
      role="tabpanel"
      aria-hidden={!isVisibleOnMobile}
    >
      <div className="min-h-full w-full">{children}</div>
    </section>
  )
})

export default Panel
