import { SectionFive } from '@/components/homePageComponents/SectionsFive'
import { SectionFour } from '../components/homePageComponents/SectionFour'
import { SectionOne } from '../components/homePageComponents/SectionOne'
import { SectionThree } from '../components/homePageComponents/SectionThree'
import { SectionTwo } from '../components/homePageComponents/SectionTwo'
import { SectionSix } from '@/components/homePageComponents/SectionSix'
import { SectionSeven } from '@/components/homePageComponents/SectionSeven'
import { SectionEight } from '@/components/homePageComponents/SectionEight'
import { Footer } from '@/components/homePageComponents/Footer'

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </>
  )
}
