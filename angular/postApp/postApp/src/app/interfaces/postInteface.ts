import { Timestamp } from "@angular/fire/firestore";

export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Timestamp;
    likes: number
}