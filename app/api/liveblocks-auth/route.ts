import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: Request) {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    return new Response("Unauthorized", { status: 401 });
  }
  console.log("Session claims:", sessionClaims);
  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { room } = await req.json();
  console.log("Room ID:", room);
  const document = await convex.query(api.documents.getById, { id: room });
  console.log("Document:", document);
  if (!document) {
    return new Response("Unauthorized", { status: 404 });
  }

  const isOwner = document.ownerId === user.id;
  console.log(
    "Is Owner:",
    isOwner,
    "document.ownerId:",
    document.ownerId,
    "user.id:",
    user.id
  );

  const organizationId = sessionClaims.org_id || sessionClaims.o?.id;
  const isOrganizationMember = !!(
    document.organizationId && document.organizationId === organizationId
  );
  console.log(
    "Is Organization Member:",
    isOrganizationMember,
    "document.organizationId:",
    document.organizationId,
    "organizationId:",
    organizationId
  );

  if (!isOwner && !isOrganizationMember) {
    console.log("Access denied: not owner and not organization member");
    return new Response("Unauthorized", { status: 401 });
  }

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: user.fullName ?? "Anonymous",
      avatar: user.imageUrl ?? undefined,
    },
  });
  session.allow(room, session.FULL_ACCESS);

  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
