import { Table } from "@tanstack/react-table";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { TABLE_DATA, TableData } from "../constants/data";

export const TablePagination = ({
  tableConfig,
  pageIndex,
}: {
  tableConfig: Table<TableData>;
  pageIndex: number;
}) => {
  const [active, setActive] = useState(1);
  const paginationCount = Math.round(TABLE_DATA.length / 5);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={classNames({
              "pointer-events-none opacity-80": pageIndex + 1 <= 1,
            })}
            onClick={() => {
              active - 1 >= 1 && setActive(active - 1);
              tableConfig.getCanPreviousPage() && tableConfig.previousPage();
            }}
            size="icon"
          />
        </PaginationItem>
        {Array.from({ length: paginationCount }, (_, idx) => idx + 1).map(
          (item) => (
            <PaginationItem>
              <Button
                size="icon"
                className="rounded-full"
                variant={active === item ? "default" : "ghost"}
                onClick={() => {
                  tableConfig.setPageIndex(item - 1);
                  setActive(item);
                }}
              >
                {item}
              </Button>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            className={classNames({
              "pointer-events-none opacity-80":
                pageIndex + 1 >= paginationCount,
            })}
            onClick={() => {
              active + 1 <= paginationCount && setActive(active + 1);
              tableConfig.getCanNextPage() && tableConfig.nextPage();
            }}
            size="icon"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
