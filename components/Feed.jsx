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
const [posts, setPosts] = useState([]);



//search
const [searchText, setSearchText] = useState('');
const [searchResults, setSearchResults] = useState([])
const [searchTimeout, setSearchTimeout] = useState(0)



const filterPrompts = (searchtext) => {
  const regex = new RegExp(searchtext, "i"); // i => case sensitive search
  return posts.filter(
    (item) =>
    regex.test(item.creator.username) ||
    regex.test(item.tag) ||
    regex.test(item.prompt)
  )
}

const handleSearchChange = (e) => {
  clearTimeout(searchTimeout);
  setSearchText(e.target.value);

  //debounce method
  setSearchTimeout(
    setTimeout(() => {
      const searchResult = filterPrompts(e.target.value);
      setSearchResults(searchResult);
    }, 500)
  )
}

const handleTagClick = (tagName) => {
  setSearchText(tagName);

  const searchResult = filterPrompts(tagName);
  setSearchResults(searchResult);
}

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setPosts(data);
  }

  fetchPosts();
}, [])


return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input 
        type="text"
        value={searchText}
        placeholder='Search for a tag or a username'
        required
        onChange={handleSearchChange} />
      </form>
      
    <PromptCardList
      data={posts}
      handleTagClick={handleTagClick}
    />
    </section>
  )
}

export default Feed