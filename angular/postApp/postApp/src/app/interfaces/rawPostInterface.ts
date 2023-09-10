import { Timestamp } from '@angular/fire/firestore'


export interface RawPost {
    id: string;
    title: string;
    content: string;
    createdAt: Timestamp;
    likes: number
}