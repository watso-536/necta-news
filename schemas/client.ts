import {type ClientConfig, createClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import imageUrlBuilder from "@sanity/image-url"


const config: ClientConfig = {
    
    projectId: '6e1kvr5x',
    dataset: 'production',
    apiVersion:"2023-11-28",
    useCdn:false
}

const client = createClient(config)





export default client