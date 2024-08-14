import { createLazyFileRoute } from "@tanstack/react-router";

import { useAllTokens } from "@/lib/api";

import { CardWithForm } from "@/components/demo-card-form";
import { Button } from "../components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // Example React Query implementation
  // const {
  //   isPending: tokensIsPending,
  //   isError: tokensIsError,
  //   data: tokens,
  // } = useAllTokens();

  // if (tokensIsPending) return <div>Pending...</div>;
  // if (tokensIsError) return <div>Error...</div>;
  return (
    <div className="p-2 flex justify-center">
      <CardWithForm />
    </div>
  );
}
