import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: 'rgb(28, 29, 32)' }}>
        <Meta />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </div>
      {/*<Footer />*/}
    </>
  )
}

export default Layout
