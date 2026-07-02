import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  _id: string;
  type: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _id: string; url: string }; hotspot?: object };
};

const RESEARCH_QUERY = `
  *[_type == "post" && type == "Research"] | order(publishedAt desc) [0..2] {
    _id, type, title, slug,
    mainImage { asset->{ _id, url }, hotspot }
  }
`;

export default async function ResearchRow() {
  const researchPosts: Post[] = await client.fetch(RESEARCH_QUERY);

  if (researchPosts.length === 0) return null;

  return (
    <div className="bg-[#FAFAFA] px-4 md:px-[51px] lg:px-[56px] pt-0 pb-24 md:pb-36">
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Research
        </span>
        <Link
          href="/research-and-perspectives"
          className="shrink-0 inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Read more
        </Link>
      </div>
      <div className="flex overflow-x-auto -mr-4 sm:mr-0 gap-4 sm:gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {researchPosts.map((post) => (
          <div key={post._id} className="flex-none w-[82vw] snap-start sm:w-auto">
          <Link
            href={`/research-and-perspectives/${post.slug.current}`}
            className="flex flex-col group cursor-pointer overflow-hidden"
          >
            <div className="relative aspect-[5/6] overflow-hidden bg-[#292929]/5">
              {post.mainImage?.asset?.url ? (
                <Image
                  src={urlFor(post.mainImage).width(1200).height(1600).url()}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : null}
            </div>
            <div className="flex flex-col gap-5 pt-8">
              <span
                className="text-[10px] uppercase tracking-widest text-[#292929]/80"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {post.type}
              </span>
              <h3 className="text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug max-w-[85%]">
                {post.title}
              </h3>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
