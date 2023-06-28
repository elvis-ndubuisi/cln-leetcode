// import { Metadata, ResolvingMetadata } from "next";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

// export default function ProblemPage({ params, searchParams }: Props) {
//   return <div>problem</div>;
// }
"use client";
import Split from "react-split";
import Editor from "@/components/client/Editor";

export default function ProblemPage() {
  return (
    <main className="flex-1 h-full bg-red-400">
      <Split className="split h-full" minSize={0}>
        <div>daf</div>
        <Editor />
      </Split>
    </main>
  );
}
