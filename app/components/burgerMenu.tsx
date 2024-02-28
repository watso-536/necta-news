import { useState } from "react"
import styles from "../page.module.css"
import Link from "next/link"
import burger from "../../public/burger.svg"
import burgerCancle from "../../public/burgCancle.svg"
import Image from "next/image"
export default function MenuButton(){
 const [open, isopen]  = useState('')
 const [toogle, setToggle] = useState('')


const menuClicked = ()=>{
    if(toogle == styles.toogle){
       setToggle('');
    }else{
      setToggle(styles.toogle)
    }
    if(open == styles.open){
      isopen('');
    }else isopen(styles.open)
} 
  return(
    <div className={styles.nav__menu}>
    <div className={`${styles.nav__barIcon} ${toogle}`} onClick={()=>menuClicked()}>
        <div className={styles.nav__line1}></div>
        <div className={styles.nav__line2}></div>
        <div className={styles.nav__line3}></div>
    </div> 
    <div className={`${styles.nav__links} ${open}`}>
    <input type="text" placeholder="search" className={styles.nav__search}/>
    <Link href="/category/[slug]" as='/category/politics'><h2>politics</h2></Link>
    <Link href="/category/[slug]" as='/category/entertainment'><h2>entertainment</h2></Link>  
    <Link href="/category/[slug]" as='/category/reasearch'><h2>research</h2></Link>  
    <Link href="/category/[slug]" as='/category/sports'><h2>sports</h2></Link>  
    <Link href="/category/[slug]" as='/category/technology'><h2>tech</h2></Link>
    <Link href="/category/[slug]" as='/category/TopNews'><h2>trending</h2></Link>        
    </div> 
    </div>
  

  )
}
  
