import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import { Chip } from "../customs/chip";

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
    header: "Model Name",
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
    header: "Model Type",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
  },
  {
    accessorKey: "lastTrainedOn",
    header: "Last Trained On",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Chip text={row.getValue("status")} />,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => <EllipsisVertical width={20} />,
  },
];

export const TABLE_DATA: TableData[] = [
  {
    modelName: "Blonde Drizzle",
    modelId: "54188",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "5412449",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "54124410",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541811",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541812",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541813",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541814",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541815",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541816",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541817",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541818",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541819",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541820",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541821",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
  {
    modelName: "Blonde Drizzle",
    modelId: "541822",
    modelType: "Extraction",
    description: "Edit Customer Model Type",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "Active",
  },
];
