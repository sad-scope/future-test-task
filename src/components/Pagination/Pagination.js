import React, { useState, useMemo, useEffect } from "react";
import {
  PaginationWhrapper,
  PaginationButton,
  PaginationContainer,
  PaginationIcon,
} from "./Pagination.elements";
function Pagination({
  totalItems = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) {
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (totalItems > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const renderPagination = useMemo(() => {
    let pageNumbersArray = [];
    var startIndex, endIndex;
    if (totalPages <= 5) {
      startIndex = 1;
      endIndex = totalPages;
    } else {
      if (currentPage <= 3) {
        startIndex = 1;
        endIndex = 5;
      } else if (currentPage + 2 >= totalPages) {
        startIndex = totalPages - 4;
        endIndex = totalPages;
      } else {
        startIndex = currentPage - 2;
        endIndex = currentPage + 2;
      }
    }

    if (startIndex > 1) {
      pageNumbersArray.push(
        <PaginationIcon
          key={startIndex - 1}
          onClick={() => onPageChange((prev) => prev - 1)}
        />
      );
    }

    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbersArray.push(
        <PaginationButton
          $activePage={currentPage === i}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    if (endIndex < totalPages) {
      pageNumbersArray.push(
        <PaginationIcon
          $right
          key={endIndex + 1}
          onClick={() => onPageChange((prev) => prev + 1)}
        />
      );
    }

    return pageNumbersArray;
  }, [currentPage, totalPages]);

  return (
    <PaginationWhrapper>
      <PaginationContainer>{renderPagination}</PaginationContainer>
    </PaginationWhrapper>
  );
}

export default Pagination;
