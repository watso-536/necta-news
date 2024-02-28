'use client'
import client from "@/schemas/client";
import groq from "groq";
import post from "@/schemas/post";
import {Post}  from "@/types/project";
import { timer } from "@/app/components/timer";
import Header from "@/app/components/header";
import styles from "../../page.module.css"
import Urlfor from "@/schemas/imagebuilder";
import insta from "../../../public/insta-logo.svg"
import x from "../../../public/twitter-logo.svg"
import tiktok from "../../../public/tiktok.svg"
import share from "../../../public/share.svg"
import "@nextcss/reset"
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "../../components/footer"
import Tings from "../../../public/tinga.jpg"
import Link from "next/link";
import MobileFooter from "@/app/components/mobileooter";
import { usePathname } from "next/navigation";
import { WhatsappIcon, WhatsappShareButton } from "react-share";


type Params = {
    params:{
        slug:string;
    }
}

async function gettingData(slug:string){
   const query = `*[_type == 'post' && slug.current == '${slug}'][0]{
       title,
       _id,
       slug,
       "text":body[0].children[0].text,
       "imageUrl":mainImage.asset._ref,
       "time":_createdAt,
       "author":author->{
        name
       },
       "category":categories[0]->{
        _id,
        title,
      }, 
         photoCredits,
        'mainArticle':mainArticle[0].children[0].text,
   }`

   const post = await client.fetch(query)
   return post
}
async function gettingMoreData(index:number){
    
   const query = `*[ 
    _type == 'post'
  ] | order(_createdAt desc)[${index}]
  {
    _id,
    title,
    slug,
    "imageUrl": mainImage.asset._ref,  
  }`
  try{
  const post = await client.fetch(query)
  return post
  }catch(err){
   console.log('an error in the code was detected')
  }
  

}

export default async function BlogPost({params}:Params){
    
    let numberOfPost = 31
    const posts:Post[] = []
    for(let i = 0; i < numberOfPost; i++){
      const postMore = await gettingMoreData(i)
      if(postMore){
        posts.push(postMore)

      }
    }
    
    const post: Post = await gettingData(params.slug)
  const title = typeof document !== 'undefined' ? post.title : 'hey lets get going'
  const currentUrl = post.text 
  const url =   `http://localhost:3000//blog/${currentUrl}`
 


    return(
        <Suspense fallback={<Loading/>}>
           
        <div className={styles.blogPage}>
            <Header />
            <div className={styles.article}>
            <div className={styles.intro}>
                <h1 className={styles.h2}>{post.category.title}</h1>
                <div className={styles.reveal}>
                    <span><h1>story by</h1></span> 
                    {post.author.name}
                </div>
            </div>    
                <div className={styles.seperate}></div>
                <div className={styles.proTitle}>
                <span className={styles.time__blog}>{timer(post.time)}</span>
                    <h2><span className={styles.storyTitle}>{post.title}</span></h2>
                    <p>{post.text}</p>
                </div>
                <div className={styles.storyimage1}>
                    <img src={Urlfor(post.imageUrl).url()} alt="blog-image" className={styles.storyimage}/>
                </div>
                 <p className={styles.photoCreds}>{post.photoCredits ? post.photoCredits : 'photo gotten from another sight'}</p>
                <div className={styles.logos}>
                    <ul>
                        <li><a href='https://www.instagram.com/nectas__1/'>
                        <Image
                        src={insta}
                        alt="instagram"
                        width={40}
                        height={40}
                        className={styles.logo1}
                        />    
                        </a>
                        </li>
                        <li><a href='https://twitter.com/murigu128'>
                        <Image
                        src={x}
                        alt="x"
                        width={40}
                        height={40}
                        className={styles.logo1}
                        />    
                        </a>
                        </li>
                        <li><a href='https://www.tiktok.com/@necta603?lang=en'>
                        <Image
                        src={tiktok}
                        alt="tiktok"
                        width={40}
                        height={40}
                        className={styles.logo1}
                        />   
                        </a>
                        </li>
                        <WhatsappShareButton url={url} title={title}>
                        <li>
                          <a>
                        <Image
                        src={share}
                        alt="share"
                        width={40}
                        height={40}
                        className={styles.logo1}
                        /> 
                        </a>
                        </li> 
                        </WhatsappShareButton>
                      
                    </ul>
                </div>
                <div className={styles.mainArticle}>
                    <p className={styles.mainArticle}>
                {post.mainArticle ? post.mainArticle : 'article to be updated soon...'}
                    </p>
                </div>
            </div>
                  
        <div className={styles.more}>
          <div className={styles.suggested__stat}>
            <h1>suggested for you</h1>
          </div>
        <div className={styles.moreDataCards}>
        {posts.slice(0,30).map((post:any)=>(
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
         <div className={styles.moreData}>
            <div className="Morecards">
                <img 
                src={Urlfor(post.imageUrl).url()}
                alt="More Card Image"
                />
            <div className={styles.TitleCards}>
                <p>{post.title}</p>
            </div>
            </div>
          </div>    
            </Link>
        ))}
        </div>
      </div>
    <MobileFooter/>        
   <Footer/>    
    </div> 
    </Suspense>
    )
}