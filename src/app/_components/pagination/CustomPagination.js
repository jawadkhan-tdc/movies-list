"use client";
import * as React from "react";
import usePagination from "@mui/material/usePagination";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginBottom: "120px",
  display: "flex",
  justifyContent: "space-between",
});

const PaginationBox = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CustomPagination = ({ count, onChange, currentPage }) => {
  const { items } = usePagination({
    count,
  });
  return (
    <nav>
      <List>
        <PaginationBox>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid white",
              borderRadius: "15px",
              marginRight: 2,
            }}
            startIcon={<KeyboardArrowLeft />}
            {...items[0]}
            onClick={(e) => {
              onChange(currentPage - 1);
              items[0].onClick(e);
            }}
          >
            previous
          </Button>
        </PaginationBox>
        <PaginationBox sx={{ color: "#016B36" }}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  onClick={(e) => {
                    onChange(page);
                    item.onClick(e);
                  }}
                  style={{
                    width: "50px",
                    height: "42px",
                    borderRadius: "45%",
                    color: selected ? "white" : "#197065",
                    fontWeight: selected ? "bold" : undefined,
                    border: selected ? "1px solid green" : "none",
                    background: selected ? "#016B36" : "unset",
                  }}
                  ariaCurrent={item["aria-current"]}
                  disabled={item.disabled}
                >
                  {page}
                </button>
              );
            }

            return <div key={index}>{children}</div>;
          })}
        </PaginationBox>
        <PaginationBox>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid white",
              borderRadius: "15px",
              marginLeft: 2,
            }}
            endIcon={<KeyboardArrowRight />}
            {...items[items.length - 1]}
            onClick={(e) => {
              onChange(currentPage + 1);
              items[items.length - 1].onClick(e);
            }}
          >
            Next
          </Button>
        </PaginationBox>
      </List>
    </nav>
  );
};

export default CustomPagination;
