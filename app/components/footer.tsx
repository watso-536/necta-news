import styles from "../page.module.css"
import loger from '../../public/footer-logo.svg'
import Image from "next/image"
import nativeLogo from '../../public/necta-logo.svg'
import insta from '../../public/insta-logo.svg'
import tiktok from '../../public/tiktok.svg'
import x from '../../public/twitter-logo.svg'
export default function Footer(){
    return(
    <div className={styles.footer}>
        <footer>
            <div className={styles.inFooter}>
            <div className={styles.footerBody}>
                <div className={styles.intro}>
                    <h1>Necta • For You</h1>
                </div>
                <div className={styles.sera}>
                    <p>Discover the pulse of the world at Necta News – your daily source of diverse, engaging stories. Stay informed, enlightened, and connected with our carefully curated blend of news and updates</p>
                </div>
            </div>
            <div className={styles.innerFooter}>
            <div className={styles.footlogo}>
                <Image
                src={nativeLogo}
                alt="footer logo"
                className={styles.footerLogo}
                width={150}
                />
            </div>
            <div className={styles.copyright}>
                <p>© 2024 Necta Media  •  All Rights Reserved</p>
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
    </div>
</div>
            
</footer>
</div>
    )
}