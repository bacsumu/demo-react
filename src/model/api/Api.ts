import { BlogItem } from "../blogs/Blogs";

export interface ApiResult<T> {
  data: T[];
  totalPages: number;
  curPage: number;
}

export type BlogListResponse = ApiResult<BlogItem>;
