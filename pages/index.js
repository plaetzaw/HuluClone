import Head from 'next/head'
import Navbar from '../components/Molecules/Navbar'
import Header from '../components/Molecules/Header'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Hulu Remastered</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Navbar />
      {/* //Results */}
    </div>
  )
}
