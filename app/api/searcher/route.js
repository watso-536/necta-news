import { Post } from '@/types/project'
import client from '../../../schemas/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'


async function gettingData(){
    const query  = `*[_type == 'post']{
        title,
        'text':body[0].children[0].text,
    }`

    try {
        const post = await client.fetch(query)
        console.log(post)
        return post
        
    } catch (error) {
        console.log('an error was encountered', error)
        throw new Error('failed to fetch the data requested')
    }
}

export async function GET(request){
 const data = await gettingData()
 return NextResponse.json(data) 
} 