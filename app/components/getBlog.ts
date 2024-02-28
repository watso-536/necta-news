import client from "@/schemas/client"
import groq from "groq"

export async function getBlog(slug:string){
    return client.fetch(
        groq`*[_type=='post' && slug.current == $slug][0]{
            _id,
            title,
            'text':body[0].children[0].text,
            "imageUrl":mainImage.asset._ref,
            "time":_createdAt,
            author,
            "category":categories[0]->{
              _id,
              title
            }
          }`,{slug}
    )
}