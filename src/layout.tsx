import { Appbar } from "./customs/appbar";
import { CustomSidebar } from "./customs/custom-sidebar";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row bg-[#F5F5F5]">
      <CustomSidebar />
      <div className="flex flex-col w-full">
        <Appbar />
        <div className="p-5">{children}</div>
      </div>
    </main>
  );
};
