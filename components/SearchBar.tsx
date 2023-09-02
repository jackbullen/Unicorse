'use client';

import React, { use, useEffect } from 'react'
import { SearchSubject } from '.';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
    <button type="submit" className={`-ml-10 z-10 ${otherClasses}`}>
        <Image 
            src="./search.svg"
            alt="search-icon"
            width={30}
            height={30}
            className="object-contain"
        />
    </button>
)


const SearchBar = () => {
   const [subject, setSubject] = useState('')
   const [courseTitle, setCourseTitle] = useState('');

   useEffect(() => {
        updateSearchParams(subject, courseTitle);
    }, [subject, courseTitle])
   const router = useRouter();

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (subject === '' && courseTitle === '') {
            return alert('Please enter a subject or course title');
        }
        updateSearchParams(subject, courseTitle);
    }
    const updateSearchParams = (subject: string, courseTitle: string) => {
        const params = new URLSearchParams(window.location.search);
        
        if (subject) {
            params.set('subject', subject.split('(')[1].slice(0, -1));
        } else {
            params.delete('subject');
        }

        if (courseTitle) {
            params.set('courseTitle', courseTitle);
        } else {
            params.delete('courseTitle');
        }
        const newPathname = `${window.location.pathname}?${params.toString()}`;
        router.push(newPathname, {scroll: false});
   }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchSubject 
                subject={subject}
                setSubject={setSubject}
                />
 
            </div>
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <Image 
                    src="./title.svg"
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt="modal-icon"
                />
                <input 
                    type="text"
                    name="courseTitle"
                    value={courseTitle}
                    onChange={(e) => {setCourseTitle(e.target.value); updateSearchParams(subject, e.target.value)}}
                    placeholder="Course Title"
                    className="search-bar__input"
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
        <SearchButton otherClasses="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar