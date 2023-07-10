import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <h1 data-testid="test-id" >hello word</h1>
      <button onClick={handleClick}>Button - {count}</button>
    </div>
  )
}
