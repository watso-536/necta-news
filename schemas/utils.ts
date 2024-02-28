// sanity/sanity.client.ts

import { Post } from "@/types/project";
import { createClient, groq } from "next-sanity";
import { ClientConfig } from "next-sanity";
import client from "./client"


export async function gettingData(){
  return client.fetch(
    groq`*[_type=='post']{
      _id,
      title,
      slug,
      'text':body[0].children[0].text,
      "imageUrl":mainImage.asset._ref,
      "time":_createdAt,
      author,
      "category":categories[0]->{
        _id,
        title
      }
    }`
  )
}

