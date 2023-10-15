"use client"
import { BlogType } from '@/lib/constants';
import { createContext } from 'react';
export interface IBlogContext {
    allBlogs: BlogType[];
  }
export  const BlogContext = createContext<IBlogContext>({
    allBlogs:[]
});