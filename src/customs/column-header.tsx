import { Column } from "@tanstack/react-table";
import classNames from "classnames";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { TableData } from "../constants/data";

export const ColumnHeader = ({
  headerName,
  column,
  center,
}: {
  headerName: string;
  column: Column<TableData, unknown>;
  center?: boolean;
}) => {
  return (
    <div
      className={classNames("flex items-center gap-1", {
        "justify-center": center,
      })}
    >
      <h2 className="text-sm">{headerName}</h2>
      <Button
        variant="ghost"
        className="h-3 w-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <ArrowUpDown className="text-[#A3A3A3]" />
      </Button>
    </div>
  );
};
