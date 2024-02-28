'use client'
import imager from "../../public/necta-logo.svg"
import Image from "next/image"
import user from "../../public/user.svg"
import styles from "../page.module.css"
import React from "react"
import client from "@/schemas/client"
import { format } from "date-fns"
import Link from "next/link"
import MenuButton from "./burgerMenu"
import searchTool from "./searchbar"
import SearchTool from "./searchbar"

export default function Header(){
    const dates = new Date()
    const formattedDate = format(dates, "do MMMM, yyyy");
    
  
   
    return(
        <div className={styles.head}>
            <div className={styles.dates}>
                <h2>{formattedDate}</h2>
                <h2>Necta Today</h2>
            </div>
            <div className={styles.user__icon}>
              <Image
              src={user}
              alt="user-icon"
              width={30}
              />
            </div>
           <div className="logo">
            <Link href="/">
                <Image
                src={imager} 
                alt="logo" 
                className={styles.nectaLogo}
                />
            </Link>
           </div>
           <div className={styles.menu__button}>
             <MenuButton/>
           </div>
            <div className={styles.searchGroup}> 
            <SearchTool getSearchResults={(results)=>setQuery(results)}/>
            </div>
        </div>
    )
}