import Image from 'next/image'
import styles from '../page.module.css'
import Header from '../components/header'
import SubHeader from '../subheader'
import Datas from '../components/data'

import '@nextcss/reset';
import { Metadata } from 'next'
import Loading from './loading'
import { Suspense } from 'react'
import MobileFooter from '../components/mobileooter'
export const metadata: Metadata = {
  title:'Necta | Home Page',
  description:"The Home Page",
  
}


export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>     
    <div className={styles.body}>
    <div className={styles.combined__header}>
      <Header />
      <SubHeader/>   
    </div>    
    <div className={styles.homeDisplay}>
      <Datas />
    </div>
    </div >
 </Suspense>
  )
}
