// utils/scrollRevealConfig.js

import ScrollReveal from 'scrollreveal'

const scrollRevealConfig = {
  delay: 350,
  distance: '20px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'top',
}

const srInstance = ScrollReveal(scrollRevealConfig)

export default srInstance
