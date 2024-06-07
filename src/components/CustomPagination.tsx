import React from "react";

interface PaginationProps {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  total,
  onPageChange,
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5; // Maximum number of pages to show

    if (total <= maxPagesToShow) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show the current page, the page before it, and the page after it
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(total - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < total - 2) {
        pages.push("...");
      }

      // Always show the last page
      pages.push(total);
    }

    return pages;
  };

  const handleClick = (page: number | string): void => {
    if (typeof page === "number" && page >= 1 && page <= total) {
      onPageChange(page);
    }
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex w-full -space-x-px text-sm justify-center md:justify-between">
          <li>
            <button
              onClick={() => handleClick(currentPage - 1)}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white  border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            >
              {"<"} Previous
            </button>
          </li>
          <li className="hidden md:block">
            <ul className="inline-flex  text-sm">
              {getPageNumbers().map((page, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(page)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight  border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === page
                        ? "text-blue-600 bg-green-100 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
                        : "text-gray-500 bg-white"
                    }`}
                    aria-current={currentPage === page ? "page" : undefined}
                    disabled={page === "..."}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <button
              onClick={() => handleClick(currentPage + 1)}
              className={`flex items-center justify-center px-3 h-8 rounded-e-lg leading-tight text-gray-500 bg-white  border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === total ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === total}
            >
              Next {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomPagination;
