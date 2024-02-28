import { title } from "process"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Necta | About',
    description:'political news'
}

export default function About(){
    return(
        <div className="ki"><h1>the about page</h1></div>
    )
}