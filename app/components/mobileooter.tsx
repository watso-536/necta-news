import styles from '../page.module.css'
import Image from 'next/image'
import insta from "../../public/insta-logo.svg"
import x from "../../public/twitter-logo.svg"
import tiktok from "../../public/tiktok.svg"
export default function MobileFooter(){
   return(
   <div className={styles.mobi__footer}>
     <div className={styles.mobi__footerHead}>
       <h1>necta • for you.</h1>
     </div>
     <div className={styles.socials}>
        <a href='/insta'>
         <Image
         src={insta}
         alt="instagram"
         width={40}
         height={40}
       
         />    
         </a>
         
         <a href='/'>
         <Image
         src={x}
         alt="x"
         width={40}
         height={40}
        
         />    
         </a>
         
         <a href='/'>
         <Image
         src={tiktok}
         alt="tiktok"
         width={40}
         height={40}
         
         />   
         </a> 
   </div>
   <div className={styles.copyright}>
     <p>© 2024 Necta Media • All Rights Reserved</p>
    </div>    
   </div>
   )
}