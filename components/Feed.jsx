'use client'

import {useEffect, useState} from 'react'

import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
      ))}
    </div>
  )
}

const Feed = () => {
const [searchText, setSearchText] = useState('');
const [posts, setPosts] = useState([]);

const handleSearchChange = (e) => {

}

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.ison();

    setPosts(data);
  }

  fetchPosts();
}, [])


return (
    <section className='feed'>
      <Form className="relative w-full flex-center">
        <input 
        type="text"
        value={searchText}
        placeholder='Search for a tag or a username'
        required
        onChange={handleSearchChange} />
      </Form>
      
    <PromptCardList
      data={posts}
      handleTagClick={()=>{ }}
    />
    </section>
  )
}

export default Feed