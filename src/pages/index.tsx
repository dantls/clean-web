import Head from 'next/head'
import { SafeEnvironment } from 'ui/components/feedback/SafeEnvironment'

export default function Home() {
  return (
    <>
      <SafeEnvironment />
    </>
  )
}
