import { Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <Box position="relative">
      <Box top="40%" right="10%" position="absolute" zIndex="10">
        <Link href="/home">
          <Heading fontFamily="times new roman,times,serif" cursor="pointer" fontWeight="900">It was only fantasy...</Heading>
        </Link>

      </Box>
      <Box>
        <video autoPlay muted loop>
          <source src="/resources/videos/landing.mp4" />
        </video>
      </Box>
    </Box>

  )
}
