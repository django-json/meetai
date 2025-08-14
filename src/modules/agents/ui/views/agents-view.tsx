"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";

const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};

const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};

const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error Loading State"
      description="Something went wrong"
    />
  );
};

export { AgentsView, AgentsViewLoading, AgentsViewError };
