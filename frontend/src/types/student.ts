import { Course } from "./course"

export type Student = {
    id: number;
    name: string;
    nickname: string;
    age: number;
    graduated: boolean;
    imgUrl: string;
    courses: Course[];
}