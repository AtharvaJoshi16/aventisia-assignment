import {
  ClipboardList,
  FileQuestion,
  Layers,
  LayoutGrid,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    group: "Model Library",
    items: [
      {
        name: "Model Library",
        active: true,
        icon: <LayoutGrid />,
      },
    ],
  },
  {
    group: "Extraction Builder",
    items: [
      {
        name: "Label Data",
        icon: <LayoutGrid className="text-black" />,
      },
      {
        name: "Model",
        icon: <Layers className="text-black" />,
      },
      {
        name: "Test",
        icon: <ClipboardList className="text-black" />,
      },
    ],
  },
  {
    group: "Help",
    items: [
      {
        name: "Setting",
        icon: <Settings className="text-black" />,
      },
      {
        name: "Support",
        icon: <FileQuestion className="text-black" />,
      },
    ],
  },
];
