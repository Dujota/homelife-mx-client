import { Loader2 } from "lucide-react";

export default function SearchLoading() {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-background rounded-lg shadow-md">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <h2 className="text-lg font-semibold text-foreground">Loading Search</h2>
      <p className="text-sm text-muted-foreground">
        Please wait while we prepare the search options...
      </p>
      <div className="w-full max-w-md space-y-2">
        <div className="h-10 bg-muted rounded animate-pulse" />
        <div className="h-10 bg-muted rounded animate-pulse" />
        <div className="h-10 bg-muted rounded animate-pulse" />
      </div>
      <p className="text-xs text-muted-foreground">
        This may take a few moments
      </p>
    </div>
  );
}
