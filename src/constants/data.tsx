import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../components/ui/button";
import { Chip } from "../customs/chip";
import { ColumnHeader } from "../customs/column-header";

export interface TableData {
  modelName: string;
  modelId: string;
  modelType: string;
  description: string;
  createdOn: string;
  lastTrainedOn: string;
  status: React.ReactNode;
}

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "modelName",
    header: ({ column }) => (
      <ColumnHeader headerName="Model Name" column={column} />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{row.getValue("modelName")}</p>
          <p className="text-xs text-[#767676]">
            ID: #{row.getValue("modelId")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "modelId",
    header: "Model ID",
    enableHiding: true,
  },
  {
    accessorKey: "modelType",
    header: ({ column }) => (
      <ColumnHeader headerName="Model Type" column={column} />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <ColumnHeader headerName="Description" column={column} />
    ),
    cell: ({ row }) => (
      <p className="line-clamp-1 max-w-[190px]">
        {row.getValue("description")}
      </p>
    ),
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => (
      <ColumnHeader headerName="Created On" column={column} />
    ),
    cell: ({ row }) => (
      <p className="flex items-center justify-end w-[100px]">
        {row.getValue("createdOn")}
      </p>
    ),
  },
  {
    accessorKey: "lastTrainedOn",
    header: ({ column }) => (
      <ColumnHeader headerName="Last Trained On" column={column} />
    ),
    cell: ({ row }) => (
      <p className="flex items-center justify-end w-[120px]">
        {row.getValue("lastTrainedOn")}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <ColumnHeader center headerName="Status" column={column} />
    ),
    cell: ({ row }) => <Chip text={row.getValue("status")} />,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <Button size="icon" variant="ghost">
        <EllipsisVertical width={20} />
      </Button>
    ),
  },
];

export const TABLE_DATA: TableData[] = [
  {
    modelName: "Demo User",
    modelId: "54188",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "5412449",
    modelType: "Demo",
    description: "Demo description for sorting",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "54124410",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "541811",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "541812",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "541813",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541814",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "John Doe",
    modelId: "541815",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541816",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541817",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541818",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541819",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541820",
    modelType: "Demo",
    description: "Demo description for sorting",
    createdOn: "23/02/2024",
    lastTrainedOn: "19/02/2014",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541821",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541822",
    modelType: "Extraction",
    description: "Edit Customer Model Type Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
];
