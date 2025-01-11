import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Calendar, Plus, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { columns, TABLE_DATA } from "./constants/data";
import { DataTable } from "./customs/data-table";
import { NewModelDialog } from "./customs/new-model-dialog";
import SearchInputBox from "./customs/search-input-box";

function App() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: TABLE_DATA,
    columns: columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    table.setColumnVisibility({
      modelId: false,
    });
    table.setPageSize(5);
  }, [table]);

  return (
    <div className="p-[20px] rounded-md bg-white flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Model Library</h2>
        <NewModelDialog>
          <Button
            variant="default"
            className="flex items-center justify-center gap-2 rounded-lg"
          >
            <Plus />
            Create New Model
          </Button>
        </NewModelDialog>
      </div>
      <div className="flex items-center justify-between gap-2">
        <SearchInputBox
          placeholder="Search by Name, ID"
          customClasses="w-[730px] bg-[#F9FAFB]"
          value={
            table.getColumn("modelName")?.getFilterValue()?.toString() ?? ""
          }
          onChange={(event) => {
            table.getColumn("modelName")?.setFilterValue(event.target.value);
          }}
        />
        <Button variant="defaultSecondary" className="flex items-center gap-2">
          <SlidersHorizontal />
          <p>Filters</p>
        </Button>
        <Button variant="defaultSecondary" className="flex items-center gap-2">
          <Calendar />
          <p>April 11 - April 24</p>
        </Button>
      </div>
      <DataTable table={table} />
    </div>
  );
}

export default App;
