'use client';

import { CourseProps } from '@/types';
import React from 'react'
import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { sampleRequirement } from '@/constants';

interface CourseDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    course: CourseProps;
}

const CourseDetails = ({ isOpen, closeModal, course }: CourseDetailsProps) => {
  const { id, program, term, courseNumber, courseTitle, slug, creditHours, description, link } = course;
  var text = "No description available."
  if (description) {
    text = description.replace(/<\/?p>/g, '')
  }
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex-col gap-5">
                        <button
                            className="absolute top-2 right-2 z-10 w-fit p-2 bg-prim-blue-100 rounded-full"
                            type="button"
                            onClick={closeModal}
                        >
                            <Image src="./close.svg" alt="close" width={20} height={20} className="object-contain"></Image>
                        </button>
                        <div className='flex-1 flex flex-col gap-3 justify-between'>
                            <h2 className="text-center text-bold text-3xl pl-4 pr-10 pt-4">
                                {courseTitle}
                            </h2>
                            <div className="text-center relative w-full h-full">
                                <p>
                                    <span className="text-bold text-xl">
                                        {program.subject}{courseNumber}
                                    </span>
                                </p>
                            </div>
                            <div className="flex-1 relative w-full h-full rounded-lg object-contain">
                                <p className="px-4 h-full pb-4">
                                    <span className="self-end text-[14px] font-light">
                                        {text}
                                    </span>
                                </p>
                                {/* <p className="text-xl pt-4 px-4 h-full">
                                    Prerequisites
                                </p> */}
                            </div>
                            {/* <div className='mt-3 flex flex-wrap gap-4'>
                                
                                {Object.entries(sampleRequirement).map(([outKey, mainReq]) => (
                                    <div className="flex justify-between gap-5 w-full text-right px-4" key={outKey}>
                                        <h4>{outKey}</h4>
                                            {Object.entries(mainReq).map(([itemNum, subReq]) => (
                                                <div>
                                                    <h4>{itemNum}</h4>
                                                     {Object.entries(subReq).map(([todoIndex, todo]) => (
                                                         <li key={todoIndex}>
                                                            {itemNum}: {todo}
                                                         </li>
                                                    ))}
                                                </div>
                                            ))}
                                    </div>

                                ))}
                            </div> */}
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CourseDetails