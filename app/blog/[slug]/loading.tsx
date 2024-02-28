"use client"
import styles from "../../page.module.css"

export default function Loading(){

    return(
        <div className={styles.loading}>
            <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
        
    )
}