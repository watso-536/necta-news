import { PortableTextBlock } from "sanity"

export type Column = {
    _id:string,
    name:string,
    _createdAt:string,
    _image:string,
    title:string;
    text:string;
    url:string;
    body:string;
    category:{
        _id:string;
        title:string;
    };
    imageUrl:string;
    slug:string,
    time:string;
    content: PortableTextBlock[];
}
