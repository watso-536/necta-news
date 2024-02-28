
import { PortableTextBlock } from "sanity";

export type Post = {
    _id:string,
    name:string,
    _createdAt:string,
    _image:string,
    title:string;
    author:{
        name:string;
    };
    text:string;
    url:string;
    slug:string,
    body:string;
    category:{
        _id:string;
        title:string;
    };
    imageUrl:string;
    time:string;
    photoCredits:string;
    mainArticle:string;
    content: PortableTextBlock[];
    
}


