import { Calendar, Plus, SlidersHorizontal } from "lucide-react";
import { Button } from "./components/ui/button";
import { DataTable } from "./customs/data-table";
import SearchInputBox from "./customs/search-input-box";

function App() {
  return (
    <div className="p-[20px] rounded-md bg-white flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Model Library</h2>
        <Button
          variant="default"
          className="flex items-center justify-center gap-2 rounded-lg"
        >
          <Plus />
          Create New Model
        </Button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <SearchInputBox
          placeholder="Search by Name, ID"
          customClasses="w-[730px] bg-[#F9FAFB]"
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
      <DataTable />
    </div>
  );
}

export default App;
