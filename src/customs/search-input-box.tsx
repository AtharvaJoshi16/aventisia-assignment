import classNames from "classnames";
import { Search } from "lucide-react";
import { useId } from "react";
import { Input } from "../components/ui/input";

interface SearchInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endText?: React.ReactNode;
  customClasses?: string;
}

export default function SearchInputBox(props: SearchInputBoxProps) {
  const id = useId();
  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center pe-2 px-3 left-auto text-muted-foreground">
          <Search width={16} className="text-black" />
        </div>
        <Input
          id={id}
          className={classNames(
            "ps-9 pe-11 border-none bg-[#F3F3FD] shadow-none h-[44px] w-[280px]",
            props.customClasses
          )}
          type="search"
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground">
          <kbd className="inline-flex h-5 max-h-full items-center rounded px-1 font-medium text-sm text-muted-foreground/70">
            {props.endText}
          </kbd>
        </div>
      </div>
    </div>
  );
}
