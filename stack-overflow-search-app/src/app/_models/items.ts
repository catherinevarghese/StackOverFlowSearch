export interface ItemData {
    title: string;
    avatar: string;
    answered: boolean;
    answer_count: number;
    user_id: number;
    question_id:number;
    link: string;
    display_name: string;
    tags:any;
    view_count:number;
    content_license:string;
  }

export interface Answers {
  avatar: string;
  display_name:string;
  body: string;
}