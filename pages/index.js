import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (

    <Box position="relative">
      <Box top="40%" right="10%" position="absolute" zIndex="10">
        <Link href="/home">
          <Heading color="white" fontFamily="times new roman,times,serif" cursor="pointer" fontWeight="900">it was only fantasy...</Heading>
        </Link>

      </Box>
      <Box filter="saturate(6.5)">
        <video autoPlay muted loop>
          <source src="/resources/videos/landing.mp4" />
        </video>
      </Box>
    </Box>

  )
}
