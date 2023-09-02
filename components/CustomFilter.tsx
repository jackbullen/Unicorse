'use client';

import React from 'react'
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';

const CustomFilter = ({title, options, icon}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (title: string, value: string) => {
    const params = new URLSearchParams(window.location.search); 

    if (value === '') {
      // Here we are deleting the param from the url
      params.delete(title);
      const newPathname = `${window.location.pathname}?${params.toString()}`;
      router.push(newPathname, {scroll: false});
      return;
    }

    // Here we are updating the param in the url
    params.set(title, value);
    const newPathname = `${window.location.pathname}?${params.toString()}`;
    router.push(newPathname, {scroll: false});
  }

  return (
    <div className='w-fit '>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e.title, e.value);
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.name==='' ? selected.title : selected.name}</span>
            <Image 
            src={icon}
            width={20}
            height={20}
            alt="filter-icon"
            />
          </Listbox.Button>
          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.name}
                  value={option}
                  className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-prim-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.name}
                    </span>
                  )}

                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter