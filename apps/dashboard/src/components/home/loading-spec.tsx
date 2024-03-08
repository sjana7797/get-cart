import { Skeleton } from "@repo/ui/components/ui/skeleton";
import { Card } from "@repo/ui/components/tremor";

function LoadingSpec() {
  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content p-1">
        <Skeleton className="h-4 w-[250px]" />
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold p-1">
        <Skeleton className="h-4 w-[200px]" />
      </p>
    </Card>
  );
}

export default LoadingSpec;
