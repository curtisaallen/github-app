'use client'
import React, { useState, useEffect } from 'react';
import {SearchBar} from "./SearchBar";
import {UserProfile} from "./UserProfile";
import {Header} from "./Header";
import { fetchUser } from '../services/api';
import { GitHubUser } from "../interface/GitHubUser";

export default function DevFinder() {
    const [searchInput, setSearchInput] = useState<string | null>(null);
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [error, setError] = useState<string | null>(null);
    const handleSearchSubmit = (value: string) => {
      fetchUser(value).then((data) => {
          setUser(data);
          setError(null);
       })
       .catch((err) => {
        setUser(null);
        setError(err.message)
       });
    }
    useEffect(() => {
        fetchUser('octocat')
          .then((data) => {
            console.log(data)
             setUser(data);
             setError(null);
          })
          .catch((err) => {
            setUser(null);
            setError(err.message)
          });
    }, []);


    return (
      <>
        <Header />
        <SearchBar searchChange={handleSearchSubmit} />
        {searchInput}
        {error && <p>{error}</p>}
        {user && <UserProfile user={user} />}
      </>
    );
  }