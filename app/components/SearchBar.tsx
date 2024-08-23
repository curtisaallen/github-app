'use client'
import React, {useState} from 'react';
import Image from "next/image";
import search from "@/public/icon-search.svg";

interface SearchBarProps {
  searchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchChange }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }
  const handleSearch = () => {
    //console.log(searchInput)
    searchChange(searchInput)
  }
  return (
      <div className='shadow-md bg-white p-3 mb-5 rounded-lg flex justify-center items-center search-bar'>
        <Image className='flex-none w-14 search-icon' src={search} alt='search icon' />
        <input className='flex-1 w-72 me-1' type="text" id="search" name="search" 
        placeholder='Search...'
        onChange={handleQuery} />
        <button className='flex-none w-32 bg-[#0279ff] rounded text-white p-2' onClick={handleSearch}>
          Search
        </button>
      </div>
  );
};