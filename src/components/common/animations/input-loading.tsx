import { Loader2 } from "lucide-react";

interface InputLoaderProps {
  className?: string;
}

export default function InputLoader({ className = "" }: InputLoaderProps) {
  return (
    <div
      className={`flex items-center justify-center p-2 bg-muted rounded-md animate-pulse ${className}`}
    >
      <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
    </div>
  );
}
