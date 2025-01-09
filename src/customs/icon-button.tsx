import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export const IconButton = ({
  icon,
  badgeText,
}: {
  icon: React.ReactNode;
  badgeText?: string;
}) => {
  return (
    <Button variant="outline" size="icon" className="rounded-full relative">
      {icon}
      {badgeText && (
        <Badge
          variant="default"
          className="bg-[#FBBF24] text-black absolute rounded-full top-[-8px] right-[-8px]"
        >
          {badgeText}
        </Badge>
      )}
    </Button>
  );
};
