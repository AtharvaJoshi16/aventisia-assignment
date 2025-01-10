import { Bell, Command, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Separator } from "../components/ui/separator";
import { IconButton } from "./icon-button";
import SearchInputBox from "./search-input-box";

export const Appbar = () => {
  return (
    <div className="bg-white h-[92px] flex items-center justify-between w-full p-[24px] shadow-md">
      <h2 className="font-semibold">AI/ML Model Builder</h2>
      <SearchInputBox
        placeholder="Search"
        endText={
          <div className="flex items-center gap-2">
            <Command width={16} /> K
          </div>
        }
      />
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 mr-3">
          <IconButton icon={<Bell />} badgeText="2" />
          <IconButton icon={<Heart />} />
        </div>
        <Separator className="h-[50px]" orientation="vertical" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-start">
                    <h2>Neurotic Spy</h2>
                    <p className="text-slate-400 font-light">
                      neurotic@taildo.com
                    </p>
                  </div>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <div className="w-[220px]">
                  <Button variant="ghost" className="w-full flex justify-start">
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full flex justify-start">
                    User Settings
                  </Button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
