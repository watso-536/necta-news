import client from "./client"
import imageUrlBuilder from "@sanity/image-url"



const builder = imageUrlBuilder(client)

function Urlfor(source: any){
return builder.image(source)
}


export default Urlfor