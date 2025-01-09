import classNames from "classnames";
import { ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../components/ui/sidebar";
import { sidebarItems } from "../constants/sidebar-items";

export const CustomSidebar = () => {
  return (
    <SidebarProvider className="w-[264px]">
      <Sidebar>
        <SidebarHeader className="relative bg-[#F8FAFC] px-[24px] py-[16px] h-[92px]">
          <img width={166} height={32} src="src/assets/logo.png" alt="logo" />
          <div
            dir="ltr"
            className="bg-white w-fit absolute top-[40%] right-0 h-[20px] rounded-s-sm flex items-center"
          >
            <ChevronLeft width={12} height={12} color="#2563EB" />
          </div>
        </SidebarHeader>
        <SidebarContent className="px-[8px]">
          {sidebarItems.map((group) => (
            <SidebarGroup>
              <SidebarGroupLabel className="text-black">
                {group.group}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item: any) => (
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button
                          className={classNames(
                            "flex items-center justify-start rounded-lg h-[42px]",
                            {
                              "hover:bg-secondary active:bg-secondary hover:text-white active:text-white":
                                item?.active,
                            }
                          )}
                          variant={item?.active ? "secondary" : "ghost"}
                        >
                          {item.icon}
                          {item.name}
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
