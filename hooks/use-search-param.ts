import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam() {
  return useQueryState<string>(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
