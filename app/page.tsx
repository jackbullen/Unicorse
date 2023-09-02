
import { CustomFilter, Main, SearchBar, CourseCard } from '@/components'
import { getCourses } from '@/utils';
import Image from 'next/image'
import { terms, years } from '@/constants';

export default async function Home({searchParams}: any) {
  const Courses = await getCourses({
    title : searchParams.courseTitle || '',
    level : searchParams.level || '',
    term : searchParams.term || '',
    subject: searchParams.subject || '',
  });
  const allCourses = Courses.results;
  const isDataEmpty = !Array.isArray(allCourses) || allCourses.length<1 || !allCourses;
  return (
    <main className="overflow-hidden">
      <Main />

      <div className='mt-12 sm:px-16 px-6 max-w-[1440px] mx-auto' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-1000'>
          <h1 className='text-4xl font-extrabold'>Course Catalog</h1>
          <p>
            Browse the course catalog before getting started.
          </p>
        </div>
        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <SearchBar />
  
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="term" options={terms} icon="./year.svg" />
            <CustomFilter title="year" options={years} icon="./level.svg"/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='course-rapper'>
              {allCourses?.map((course) => (
                <CourseCard course={course} />
                ))}
            </div>
          </section>
        ) : (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>No Courses found</h2>
            <p>Check back later for new Courses.</p>
            <p>{allCourses?.message}</p>
          </div>
        )}


      </div>
    </main>
  )
}
