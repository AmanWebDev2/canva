import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon, type LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  onClick,
  isActive,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full h-full aspect-video p-3 py-4 flex flex-col rounded-none",
        isActive && "bg-muted text-primary"
      )}
      onClick={onClick}
    >
      <Icon className="size-5 stroke-2 shrink-0" />
      <span className="mt-2 text-xs">{label}</span>
    </Button>
  );
};
