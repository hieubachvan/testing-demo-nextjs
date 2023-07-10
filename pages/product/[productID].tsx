import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'src/layouts'

const productID = () => {
        const router = useRouter()
        
  return (
    <Layout>productID {router.asPath}</Layout>
  )
}

export default productID