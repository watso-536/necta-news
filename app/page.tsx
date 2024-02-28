import Home from "./home/page"
import { Metadata } from "next"


export const metadata:Metadata = {
    title:"Necta | Home",
    description:"The Home Page"
  }

export default function MainPage(){
    return(
      <Home/>
    )
}