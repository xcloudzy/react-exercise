import React, { useEffect, useReducer, useMemo } from "react";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "INSERT_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default function PageReducer() {
  const data = useMemo(
    () => Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`),
    []
  );

  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: data.length, // Set initial totalItems
  });

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]); // Only run once on mount because data is memoized

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex, lastIndex);

  const handlePageClick = (newPage) => {
    dispatch({ type: "INSERT_CURRENT_PAGE", payload: newPage });
  };

  return (
    <>
      <h1>Reducer Pagination</h1>
      <div>
        <div>
          {displayedItems.map((item, index) => (
            <Alert icon={false} key={index}>
              {item}
            </Alert>
          ))}
        </div>
      </div>
      <div>
        <Button
          onClick={() => handlePageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
        >
          &#8249; Prev
        </Button>
        <Button
          onClick={() => handlePageClick(paginationState.currentPage + 1)}
          disabled={lastIndex >= data.length}
        >
          Next &#8250;
        </Button>
      </div>
    </>
  );
}