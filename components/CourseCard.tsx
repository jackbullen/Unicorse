'use client';

import { CourseProps } from '@/types';
import React from 'react'
import { useState } from 'react'
import { CourseDetails, CustomButton } from './';
import Link from 'next/link';

interface CourseCardProps {
  course: CourseProps;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { id, program, term, courseNumber, courseTitle, slug, creditHours, description, link } = course;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='course-card group' onClick={() => setIsOpen(true)}>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className="text-bold text-3xl">
          {program.subject}{courseNumber}
        </h2>
        <p className='text-l font-light'>{term}</p>
      </div>
      <p>
      <span className="self-end text-[14px] font-medium ">
         {program.subjectDescription}
      </span>
      </p>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">
         {courseTitle} 
        </span>
      </p>  

      {/* Just link the entire card. 
      <div className="relative flex w-full mt-0">
        <div className="course-card__btn-container">
          <CustomButton 
            title="Read Description"
            containerStyles="float-right y-[8px] rounded-full bg-prim-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right_arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div> */}
      <CourseDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} course={course} />
    </div>
  )
}

export default CourseCard