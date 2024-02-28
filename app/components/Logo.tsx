import Image from "next/image"
import styles from "../page.module.css"
import NectaLogo from '../../public/necta-logo.svg'
export default function Logo(){
    return<>
    
     <div className={styles.logoContainer}>
        <Image
        alt="logo"
        className="logo"
        src={NectaLogo}
        width={100}
        height={120}
        />
        <div className="letters">
            <h2>Necta, content studio</h2>
        </div>
     </div>

    </>
}