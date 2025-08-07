export interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number)=> void;
    isLastPage: boolean;
  }