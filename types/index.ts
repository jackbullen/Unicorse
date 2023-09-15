import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchSubjectProps {
    subject: string;
    setSubject: (subject: string) => void;
}

export interface Subject {
    subject: string;
    title: string;
}

export interface ProgramProps {
    subject_code: string;
    id: number;
    subject: string;
    subjectDescription: string;

}

export interface CourseProps {
    id: number;
    program: ProgramProps;
    course_number: number;
    title: string;
    slug: string;
    credit: number;
    description: string;
    link: string;
}

export interface FilterProps {
    subject: string;
    title: string;
    level: string;
    term: string;
}

export interface OptionProps {
    title: string;
    value: string;
    name: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    icon: string;
}