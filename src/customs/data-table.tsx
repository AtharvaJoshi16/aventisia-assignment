import { flexRender, Table as ITable } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { columns, TABLE_DATA, TableData } from "../constants/data";
import { TablePagination } from "./table-pagination";

export const DataTable = ({ table }: { table: ITable<TableData> }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const currentTotalResults = table.getState().columnFilters.length
    ? table.getRowModel().rows.length
    : TABLE_DATA.length;
  const low = currentTotalResults > 5 ? pageIndex * 5 + 1 : 1;
  const high = currentTotalResults > 5 ? low - 1 + 5 : currentTotalResults;
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
          Showing {low} to {high} of {currentTotalResults} results
        </h2>
        <TablePagination pageIndex={pageIndex} tableConfig={table} />
      </div>
    </div>
  );
};
