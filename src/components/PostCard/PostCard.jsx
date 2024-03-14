import React from 'react'
import {Link} from 'react-router-dom'
import storageService from '../../appwrite/storage'

function PostCard({$id, Title, Image}) {
  return (
    <Link to={`/${$id}`}>
<div className=' w-52 h-52 rounded shadow-md'>
    <div className=' w-full h-3/4'>
        <img src={storageService.getFilePreview(Image)} className='w-full h-full'></img>
    </div>
<div className=' w-full h-1/4'>
    <h1 className='text-center text-2xl'>{Title}</h1>
</div>
</div>

    </Link>
  )
}

export default PostCard
