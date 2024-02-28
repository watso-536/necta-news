
import styles from '../page.module.css'
import Link from "next/link"
import React, { useState } from 'react'



import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
export default function SearchTool({}){

    const [query, setQuery] = useState('')
   
    const handleSubmit = async (e:any) =>{
       e.preventDefault()

       const response = await fetch(`/api/searcher/search?query=${query}`)
       const reslt = await response.json()
    }



    return(
    <div className={styles.magnifying__space}>
       <div className={styles.search__input}>
        <div className={styles.magnifying__lens}>
        <MagnifyingGlassIcon type='submit'/>
       </div>
        <form onKeyDown={handleSubmit} onSubmit={handleSubmit}>
            <input type="text" placeholder='Search Article...' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </form>
       </div>
    </div>
    )
}