import Head from 'next/head'
import Header from '../components/Organisms/Header'

export default function Home () {
  return (
    <div>
      <Head>
        <title>PlatoVision</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* //Header */}
      <Header />
      {/* //Nav */}
      {/* //Results */}
    </div>
  )
}
