import { PortableTextBlock } from "sanity";

export type ColumnThree= {
    _id:string,
    name:string,
    _createdAt:string,
    _image:string,
    title:string;
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
    content: PortableTextBlock[];
}