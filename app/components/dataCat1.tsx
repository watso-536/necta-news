import tinga from "../../public/tinga.jpg"
import styles from "../page.module.css"
import Image from "next/image"
import client from "@/schemas/client"
import { Post } from "@/types/project"
import urlBuilder from "@sanity/image-url"
import Urlfor from "@/schemas/imagebuilder"
import { timer } from "./timer"
import Link from "next/link"
import post from "@/schemas/post"
import MobileFooter from "./mobileooter"
import Header from '../components/header'
export type Params = {
    params:{
        slug: string;
    }
}


async function GetCategoryData(slug:string, index:number){
    
  const query = `*[_type == 'post' && categories[0]->title == "${slug}"][${index}]{
    title,
    'text':body[0].children[0].text,
    slug,
    _id,
    "imageUrl":mainImage.asset._ref,
    "time":_createdAt,
  }`

  try{
    const post:Post = await client.fetch(query)
    return post;
  }catch(err){
    console.log(err)
  }
}

export default async  function DataCat1({params}:Params){
   console.log(params) 
   let numberOfPost  = 1100
   const posts:Post[] = []

   for(let i = 0; i < numberOfPost; i++){
    const post = await GetCategoryData(params.slug, i)
    if(post){
        posts.push(post)
    }
   }
   
    return(
        <div className={styles.sectionCat}>
        
          <div className={styles.miniHeader}>
                  <h2>{params.slug}</h2>
         <div className={styles.seperater}></div>         
        </div>     
           
         
        <div className={styles.sectionCat1}>
        
        {posts.slice(0,1).map((post:any)=>(
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
             <div className={styles.part1}>
            <img
            src={Urlfor(post.imageUrl).url()}
            alt='image'
            width={500}
           className={styles.cat1Image}
            />
            <div className={styles.cat1data}>
                <div className={styles.catTitle}>
                    <p className={styles.titleCat}>{post.title}</p>
                </div>
                <p className={styles.storyCat}>{post.text}</p>
                <span className={styles.time}>{timer(post.time)}</span>
            </div>
           </div> 
            </Link>
          
        ))}
        <div className={styles.gridline}></div>
       
            <div className={styles.catsec2Main}>
         {posts.slice(1,3).map((post:any)=>(
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
             <div className = {styles.catsec2}>
            <img
            src={Urlfor(post.imageUrl).url()}
            alt="image2"
            className={styles.imagecatsec2}
            />
            <div className={styles.titleCat1}>
             <p>{post.title}</p>
             </div>
            <span className={styles.time}>{timer(post.time)}</span>
            </div>   
            </Link>
           
        ))}
        </div>
            <div className={styles.gridline2}></div>
            <div className={styles.data__three}>
            {posts.slice(3,4).map((post:any)=>(
             <Link href={`/blog/${post.slug.current}`} key={post._id}>     
            <div className={styles.catdata3}>
             
                 <div className={styles.title3}>
                      <p> 
                          {post.title}
                      </p>
                  </div>
               <div className={styles.child23}>
                  <div className="image">
                      <img
                      src={Urlfor(post.imageUrl).url()}
                      alt="post image"
                      className={styles.imagedataCat3}
                      />
                  </div>
              </div> 
            </div> 
            </Link>
            ))}    
            </div>
          
        </div>

        <div className={styles.sectionSeperate}></div>

        <div className={styles.fourelements}>
        <h2 className={styles.category__add}>more {params.slug} stories for you</h2>
        <div className={styles.fourCards}>
        {posts.slice(4,9).map((post:any)=>(
        <Link href={`/blog/${post.slug.current}`} key={post._id}>
        <div className={styles.card1}>
         <div className={styles.cardDetails}>
            <p className={styles.cardTitle}>
                {post.title}
            </p>
         </div>
         <img
         src={Urlfor(post.imageUrl).url()}
         alt="card image"
         className={styles.cardImage}
         />
        </div> 
        </Link>
        ))}
        </div>        
        </div>
        <div className={styles.sectionSeperate}></div>
        <div className={styles.mainmorecard}>
        {posts.slice(9,100).map((post:any)=>(
        <Link href={`/blog/${post.slug.current}`} key={post._id}>
        <div className={styles.moreCard}>
                <div className="image">
                    <img
                    src={Urlfor(post.imageUrl).url()}
                    alt="more card image"
                  
                    className={styles.moreImage} 
                    />
                </div>
                <div className={styles.moreDetails}>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <div className={styles.time}>{timer(post.time)}</div>
                </div>
            </div> 
        </Link> 
        ))}
       </div>
    <MobileFooter/>
    </div>
    )
}




