export interface List {
    has_more: boolean;
    items: Array<any>;
    quota_max: number ;
    quota_remaining: number;
 }

export interface SearchItems{
    page: number;
    order: string;
    sort: string;
    q: string;
    answers: string;
    closed: boolean;
    title: string;
    user: string;
    url: string;
    views: string;
    wiki: boolean;
}
