"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const { documentId } = useParams();
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_aYokk6eH-hBqTioTHQpFVMiibPUjZlYub0Qi3uOeTmYUSmvH3Xqh4QAgLjCnfyW0"
      }>
      <RoomProvider id={documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
