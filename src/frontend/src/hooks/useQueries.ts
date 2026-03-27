import { useQuery } from "@tanstack/react-query";
import type { Submission } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllForms() {
  const { actor, isFetching } = useActor();
  return useQuery<Submission[]>({
    queryKey: ["forms"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllForms();
    },
    enabled: !!actor && !isFetching,
  });
}
