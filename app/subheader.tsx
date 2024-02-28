"use client"
import { Post } from "@/types/project"
import styles from "./page.module.css"
import Link from "next/link";
import { gettingData } from "@/schemas/utils"
import post from "@/schemas/post";
import client from "@/schemas/client";
import React, {useEffect, useState } from "react";
import { title } from "process";



export default function SubHeader(){
     
      const [titles,setTitles]  = useState(['Discover More News'])
      const [titleIndex, setTitleIndex] = useState(0)


      useEffect(()=>{
        const query = `*[_type == 'post']{
            title
        }`
       
        client.fetch(query).then((posts:any)=>{
          const Titles = posts.map((post:any)=>post.title)
           setTitles(Titles)
          
        })
      },[])

      useEffect(()=>{
        const intervalId = setInterval(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 7000);

      return () => clearInterval(intervalId);
       
      }, [titles])

  
  return(
  <div className={styles.subHeader}>
  <div className={styles.sublinks}>
        <div className={styles.live}>
            <h2>Top News</h2>
            <span></span>
            <p className={styles.liveView}>{titles.length > 0 ? titles[titleIndex]: 'from us'}</p>
        </div>
        <div className="ul"> 
        <ul className={styles.subs}>
           <li><Link href='/category/[slug]' as='/category/politics'>politics</Link></li>
           <li><Link href="/category/[slug]" as="/category/entertainment">entertainment</Link></li>
           <li><Link href="/category/[slug]" as='/category/research'>research</Link></li>
           <li><Link href="/category/[slug]" as='/category/sports'>sports</Link></li>
           <li><Link href="/category/[slug]" as='/category/technology'>tech</Link></li>
           <li><Link href="/category/[slug]" as='/category/TopNews'>trending</Link></li>
        </ul>
        </div>
    </div>
    </div>
    )
}