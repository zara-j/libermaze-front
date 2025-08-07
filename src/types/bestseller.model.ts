export interface NYTBook {
    primary_isbn13: string;
    book_image: string;
    title: string;
    author: string;
  }
  export interface OpenLibraryBook {
    key: string;
    cover_i?: number;
    title: string;
    author_name?: string[];
  }
  