import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface Props {
  className?: string;
}

export default function Loader({ className }: Props) {
  return (
    <Loader2 className={cn("animate-spin w-8 h-8 text-white", className)} />
  );
}
