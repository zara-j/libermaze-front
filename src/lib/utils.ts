import axios from "axios";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const axiosInstance = axios.create({
    baseURL: "https://api.libermaze.com/api",
    withCredentials: true,
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  

