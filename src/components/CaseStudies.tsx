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

const QUERY = `
  *[_type == "post" && type != "Spotlight"] | order(publishedAt desc) [0..3] {
    _id,
    type,
    title,
    slug,
    mainImage {
      asset->{ _id, url },
      hotspot
    }
  }
`;

export default async function CaseStudies() {
  const posts: Post[] = await client.fetch(QUERY);

  return (
    <section id="case-studies" className="bg-[#08090A] py-16 md:py-32">
      <div className="px-6 md:px-20 lg:px-32">

        <div className="flex items-end justify-between mb-10">
          <h2 className="text-[26px] md:text-[36.8px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-tight">
            Research &amp; Perspectives
          </h2>
          <Link href="/research-and-perspectives" className="group relative px-6 py-2.5 text-[10px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 hover:translate-x-px transition-all duration-300" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            READ MORE
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/research-and-perspectives/${post.slug.current}`}
              className="flex flex-col group cursor-pointer border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-300 overflow-hidden"
            >
              {/* Top half: image */}
              <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-white/[0.03]">
                {post.mainImage?.asset?.url ? (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(440).url()}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : null}
              </div>

              {/* Bottom half: content */}
              <div className="flex flex-col justify-between gap-4 p-6 bg-[#0E1012] flex-1">
                <h3 className="text-[16px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8a8f98]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {post.type}
                  </span>
                  <svg className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#D4B996]" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
