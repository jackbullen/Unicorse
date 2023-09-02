'use client';

import { SearchSubjectProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { subjectList } from '@/constants'
import { Subject } from '@/types'

const SearchSubject = ({ subject, setSubject }: SearchSubjectProps) => {
    const [query, setQuery] = useState('');
    const subjects = subjectList.map((item: Subject) => item.title)

    const filteredSubjects = query === "" ? [] : subjects.filter((item: string) => (
        item.toLowerCase().replace(/\s/g, '').includes(query.toLowerCase().replace(/\s/g, ''))
    ))

    return (
        <div className="search-subject w-full">
            <Combobox value={subject} onChange={setSubject}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                        src="./subject_logo.svg" 
                        width={20} 
                        height={20} 
                        className="ml-4" 
                        alt="subject-logo" 
                        />
                    </Combobox.Button>
                    <Combobox.Input 
                    className="search-subject__input"
                    placeholder="Subject"
                    displayValue={(subject:string) => subject}
                    onChange={(event) => {
                        if (event.target.value === '') {
                            setSubject('');
                        }
                        setQuery(event.target.value)
                    }}
                    />
                    <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredSubjects.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>) : 
                                (filteredSubjects.map((item: string) => (
                                    <Combobox.Option
                                    key={item}
                                    className={({active}) => `
                                    relative cursor-default select-none py-2 pl-10 pr-4
                                    ${active ? 'bg-prim-blue text-white' : 'text-gray-900'}
                                    `}
                                    value={item}
                                    >
                                    {({ selected, active }) => (
                                        <>
                                        <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {item}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-900'
                                                }`}
                                            >
                                        </span>
                                            ) : null}
                                        </>
                                    )}
                                    </Combobox.Option>
                            )))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchSubject