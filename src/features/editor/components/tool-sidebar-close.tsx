import { ChevronsLeft } from "lucide-react";

interface ToolbarSidebarCloseProps {
  onClick: () => void;
}

export const ToolbarSidebarClose = ({ onClick }: ToolbarSidebarCloseProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute h-[70px] bg-white -right-[1.80rem] top-1/2 px-1 border-r border-y group rounded-r-xl flex items-center justify-center
      transform -translate-y-1/2 pr-2"
    >
      <ChevronsLeft className="size-4 text-black group-hover:opacity-75 transition" />
    </button>
  );
};
