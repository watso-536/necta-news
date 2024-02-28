import Header from "@/app/components/header"
import styles from "../../page.module.css"
import Loading from "./loading"
import "@nextcss/reset"
import DataCat1, { Params as DataCat1Params} from "@/app/components/dataCat1"
import Footer from "@/app/components/footer"
import { Suspense } from "react"
export default function CategoryPage({params}: DataCat1Params){
return(
    <Suspense fallback={<Loading/>}>
         <div className={styles.body}>
        <div className={styles.cat__Header}>
      <Header/>      
        </div>
        <div className={styles.catMain}>
            <DataCat1 params={params}/>
        </div>
        <Footer/>
    </div> 
    </Suspense>
  
    
)
}