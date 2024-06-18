import { toast } from "react-toastify";

export const isFileSizeValid = (fileSize: number): boolean => {
  const maxFileSize = 244 * 1024; // Convert KB to bytes
  return fileSize < maxFileSize;
};
