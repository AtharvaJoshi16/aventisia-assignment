import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { columns, TABLE_DATA } from "../constants/data";
import { TablePagination } from "./table-pagination";

export const DataTable = () => {
  const table = useReactTable({
    data: TABLE_DATA,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const pageIndex = table.getState().pagination.pageIndex;
  const low = pageIndex + 1;
  const high = (pageIndex + 1) * 5;

  useEffect(() => {
    table.setColumnVisibility({
      modelId: false,
    });
    table.setPageSize(5);
  }, [table]);
  return (
    <div className="flex flex-col gap-5">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between w-full p-[20px]">
        <h2 className="text-[#475569] text-sm">
          Showing {low} to {high} of {TABLE_DATA.length} results
        </h2>
        <TablePagination pageIndex={pageIndex} tableConfig={table} />
      </div>
    </div>
  );
};
