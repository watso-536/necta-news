
import type { Post } from "@/types/project"
import styles from '../page.module.css'
import Image from "next/image"
import Tings from "../../public/tinga.jpg"
import Link from "next/link"
import Urlfor from "@/schemas/imagebuilder"
import { uriLooksSafe } from "@portabletext/to-html"
import post from "@/schemas/post"
import category from "@/schemas/category"
import groq from "groq"
import { timer } from "./timer"
import React from "react"
import { error } from "console"
import client from "@/schemas/client"
import { Sarpanch } from "next/font/google"
import { Metadata } from "next"
import Footer from "./footer"
import MobileFooter from "./mobileooter"


export const metadata: Metadata = {
  title:'Necta | Home',
  description:"home page"
}

async function gettingData(index:number){
    const query = `*[ 
      _type == 'post'
    ] | order(_createdAt desc)[${index}]
    {
      _id,
      title,
      slug,
      'text': body[0].children[0].text,
      "imageUrl": mainImage.asset._ref,
      "time": _createdAt,
      author,
      "category": categories[0]->{
        _id,
        title
      }     
    }
      `

try{
    const post:Post = await client.fetch(query)
    return post;
    
  }catch(err){
    console.log('there appears to be an issue',err)
  }
}


export default async function Datas(){
   
   let numberOfPost = 1000
   const posts:Post[] = []
   
   for(let i = 0; i < numberOfPost; i++){
     const post = await gettingData(i)
     if(post){
       posts.push(post)
       console.log(post)
     }
   }

    return(
      <div className={styles.main__one}>
        <div className={styles.cardOneDisplay}>
        {posts.slice(0,1).map((post:any)=>(
        <Link href={`/blog/${post.slug.current}`} key={post._id}>
        <div className={styles.cardOne} >
        <div className={styles.cardOneImage}>
        <img
          src={Urlfor(post.imageUrl).url()}
          alt="image"
          className={styles.landing__image}
        />
      
          <div className={styles.cardOneDetails}>
            <div className={styles.CardOneTitle}>
              <div className="space">
                <span className={styles.category}>{post.category.title}</span>
              </div>
              <h1>{post.title}</h1>
            </div>
            
            <div className={styles.cardOneBody}>
              <p>{post.text}</p>
            </div>
          </div>
        </div>
      </div>
        </Link>
      
        ))}
      <div className={styles.cardOneLine}></div>
      <div className={styles.cards}>
        {posts.slice(1,3).map((post:any)=>(
      <Link href={`/blog/${post.slug.current}`} key={post._id}>
          <div className={styles.dataCard} >
                <div className={styles.info}>
                <div className={styles.miniDetail}>
                   <div className='cat'>
                         <span className={styles.category}>{post.category.title}</span>
                   </div>
                    <span className={styles.time}>{timer(post.time)}</span>
                </div>
                <div className="content">
                    <div className={styles.title}>
                        <h4>{post.title}</h4>
                    </div>
                    <p className={styles.p}>{post.text}</p>
                </div>
                </div>
                <div className={styles.cardImage}>
                  <img 
                  src={Urlfor(post.imageUrl).url()}
                  alt='{posting.name}'
                  className={styles.artImage}
                  />
                </div>
            </div>
      </Link>
        ))
      }
    </div>
    </div>
    <div className={styles.secondMainSection}>
      {
      posts.slice(3,7).map((post:any)=>(
        <Link href={`/blog/${post.slug.current}`} key={post._id}>  
        <section className={styles.secndsection}> 
               
        <div className={styles.child}>
         
         <div className="top-news">
            <div className={styles.miniDetail}>
              <div className="title">
                <span className={styles.category}>{post.category.title}</span>
              </div>
            <span className={styles.time}>{timer(post.time)}</span>
            </div>
            <div className="image">
              <img
              src={Urlfor(post.imageUrl).url()}
              alt="top image"
             className="image"
              />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>
                    <p>{post.title}</p>
                </div>
                <div className={styles.p}>
                    <p>{post.text}</p>
                </div>
            </div>
         </div>
        </div>
        </section>
      </Link>
      ))
     }
    </div>
   <div className={styles.thirdMainSection}>
   <div className={styles.cardsfour}>
    {posts.slice(7, 16).map((post:any)=>(
      <Link href={`/blog/${post.slug.current}`} key={post._id}>
      <div className={styles.fourthMainSection}>
      <div className={styles.fourthCard}>
         <img src={Urlfor(post.imageUrl).url()} alt="image" width={400} className={styles.imageCont}/>

       <div className={styles.fourthTitle}>
       <p>{post.title}</p> 
      </div>  
      </div>
    </div>
      </Link>
      ))
    }
    
  </div>
  </div>
    <div className={styles.final__section}>
    <div className={styles.final__child2}>
    {posts.slice(16,26).map((post:any)=>(
    <Link href={`/blog/${post.slug.current}`} key={post._id}> 
    <div className={styles.child2}>
        <div className="image">
            <img
            src={Urlfor(post.imageUrl).url()}
            alt="post image"
            className={styles.miniPic}
            />
        </div>
        <div className={styles.title}>
            <p>
               {post.title}
            </p>
        </div>
    </div> 
    </Link>
   ))} 
    </div>
    <div className={styles.final__two}>
    <div className={styles.cardsfour__final}>
    {posts.slice(26, 106).map((post:any)=>(
      <Link href={`/blog/${post.slug.current}`} key={post._id}>
      <div className={styles.fourthMainSection}>
      <div className={styles.fourthCard}>
         <img src={Urlfor(post.imageUrl).url()} alt="image" width={400} className={styles.imageCont}/>

       <div className={styles.fourthTitle}>
       <p>{post.title}</p> 
      </div>  
      </div>
    </div>
      </Link>
      ))
    }
    <div className="mobifooter">
     <MobileFooter/>     
    </div>
  </div>
    </div>
    </div>
   <Footer/>
  </div>
  
    )
}

