import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from './footer'
import Meta from './meta'

type Props = {
      preview?: boolean
      children: React.ReactNode
      footer?: boolean
}

const Layout = ({ preview, children, footer = true }: Props) => {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: 'rgb(28, 29, 32)' }}>
        <Meta />
        <main>{children}</main>
          <Analytics />
        <SpeedInsights />
          {footer && <Footer/> }
      </div>
    </>
  )
}

export default Layout
