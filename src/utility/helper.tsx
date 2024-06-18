import { toast } from "react-toastify";

export const isFileSizeValid = (fileSize: number): boolean => {
  const maxFileSize = 244 * 1024; // Convert KB to bytes
  if (fileSize >= maxFileSize) {
    toast("File size should not exceed 244 KB");
  }
  return fileSize < maxFileSize;
};
