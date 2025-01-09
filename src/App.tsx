import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="p-[20px] rounded-md bg-white">
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
    </div>
  );
}

export default App;
