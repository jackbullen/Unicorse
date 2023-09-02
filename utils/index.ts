import { FilterProps } from "@/types";

export async function getCourses(filters: FilterProps) {
    const { subject, title, level, term } = filters;
    const response = await fetch(`http://course-api-144.wl.r.appspot.com/courses?subject=${subject}&title=${title}&level=${level}&term=${term}`);
    const result = await response.json();
    return result;
}

export const updateSearchParams = (term:string, year:string) => {
    const params = new URLSearchParams(window.location.search); 
    params.set(term, year);
    const newPathname = `${window.location.pathname}?${params.toString()}`;
    return newPathname;
}