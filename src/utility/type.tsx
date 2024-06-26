export interface DataProps {
  post_heading: string;
  pre_heading: string;
  highlightned: string;
  detail: string;
  data: Array<{
    heading: string;
    content: string;
    key_points: string;
    short_description: string;
    author_name: string;
    hobby: string;
    user_name: string;
    blog_heading: string;
    blog_content: string;
    richText: string;
    created_at: string;
    rating: string;
    id: string;
    blogCategory: { category_name: string };
  }>;
  content_one: string[];
  content_two: string[];
  part1heading: string;
  part1content: string;
  part2heading: string;
  part2content: string;
  part3heading: string;
  part3content: string;
  part4heading: string;
  part4content: string;
  title_one: string;
  title_two: string;
  optionalProp?: string;
}
export interface DataItem {
  id: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}
export interface BlogPost {
  blog_heading: string;
  user_name: string;
  user_image: string;
  blog_image: string;
  blog_content: string;
  created_at: string;
  id: string;
  richText: string;
  blogCategory: { category_name: string };
}
export interface Category {
  id: number;
  category_name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface CustomError {
  response?: {
    status: number;
    data?: {
      data?: {
        status: number;
        message: string;
      };
    };
  };
}
export interface MoneySectionType {
  id: string;
  post_heading: string;
  pre_heading: string;
  highlightned: string;
  sub_heading: string;
  created_at: string;
  updated_at: string;
}