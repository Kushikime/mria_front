export interface Pagination {
  count: number;
  currentPage: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
  perPage: number;
};

export interface ResponseData<T> {
  pagination: Pagination;
  records: Array<T>;
}