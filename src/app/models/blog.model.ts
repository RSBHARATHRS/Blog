export interface blogDataType {
    title: string;
    author: string;
    description: string;
    content: string;
    urlToImage: string;
    publishedAt: Date;
    url: string;
}

export class BlogModel implements blogDataType {
    title = "";
    author = "";
    description = "";
    content = "";
    urlToImage = "";
    publishedAt = new Date();
    url = "";
}
