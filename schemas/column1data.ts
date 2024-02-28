import groq from "groq";
import client from "./client";


export async function columnData(){
    return client.fetch(
        groq`
        *[_type == 'post' && (categories[0]->title == 'research' || categories[0]->title == 'Top News')] {
         _id,
         title,
         slug,
         'text': body[0].children[0].text,
         "imageUrl": mainImage.asset._ref,
         "time": _createdAt,
         author,
         "category": categories[0]->{
           _id,
           title
         }     
    }`    
 )   
}
