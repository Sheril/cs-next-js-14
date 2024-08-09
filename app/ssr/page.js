import { Stack } from "@/app/components/stack";
import { LivePreviewInit } from "@/app/components/livepreview";

const CS_CONTENT_TYPE_UID = process.env.NEXT_PUBLIC_CS_CONTENT_TYPE_UID ?? "";
const CS_ENTRY_UID = process.env.NEXT_PUBLIC_CS_ENTRY_UID_NEXTJS14_SSR ?? "";

export const fetchData = async () => {
  const response = await Stack.ContentType(CS_CONTENT_TYPE_UID)
    .Entry(CS_ENTRY_UID)
    .toJSON()
    .fetch();
  return response;
};

export default async function Page({ searchParams }) {
  if (searchParams?.live_preview) {
    Stack.livePreviewQuery(searchParams);
  }

  const data = await fetchData();

  return (
    <>
      <LivePreviewInit />
      <h1>{data?.headline}</h1>
      <p>{data?.description}</p>
      <pre>Next.js 14 / App Router / SSR</pre>
    </>
  );
}
