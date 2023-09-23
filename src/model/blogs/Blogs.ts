// blog list item
export interface BlogItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  writer?: string;
  createdate?: string;
  views?: number;
}

export interface BlogComment {
  id: string;
  content: string;
  writer: string;
  createdate: string;
}

export interface BlogContent extends BlogItem {
  comments: BlogComment[];
}
