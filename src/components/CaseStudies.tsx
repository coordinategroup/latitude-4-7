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

const PERSPECTIVES_QUERY = `
  *[_type == "post" && type == "Perspective"] | order(publishedAt desc) [0..2] {
    _id, type, title, slug,
    mainImage { asset->{ _id, url }, hotspot }
  }
`;

function ArticleCard({ post }: { post: Post }) {
  return (
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
  );
}

function PillarSection({
  label,
  heading,
  description,
  href,
  buttonLabel,
}: {
  label: string;
  heading: string;
  description: React.ReactNode;
  href: string;
  buttonLabel: string;
}) {
  return (
    <div className="px-4 md:px-[51px] lg:px-[56px] pt-44 pb-72">
      <div className="max-w-3xl flex flex-col gap-8 ml-[50%] mr-4 md:mr-[102px] lg:mr-[112px]">
          {label && (
            <span
              className="block text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {label}
            </span>
          )}
          <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
            {heading}
          </h2>
          <p className="m-0 text-[18px] 2xl:text-[22px] leading-[1.4] text-[#0A0A0B]">
            {description}
          </p>
          <Link
            href={href}
            className="self-start inline-flex items-center h-9 px-8 rounded-full text-[15px] font-medium text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300"
          >
            {buttonLabel}
          </Link>
      </div>
    </div>
  );
}

export default async function CaseStudies() {
  const perspectivePosts = await client.fetch<Post[]>(PERSPECTIVES_QUERY);

  return (
    <section id="case-studies" className="bg-[#FAFAFA]">

      {perspectivePosts.length > 0 && (
        <div className="px-4 md:px-[51px] lg:px-[56px] pt-24 md:pt-36 pb-24 md:pb-36">
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Perspectives
            </span>
            <Link
              href="/research-and-perspectives"
              className="shrink-0 inline-flex items-center h-9 px-8 rounded-full text-[15px] font-medium text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
            >
              Read more
            </Link>
          </div>
          <div className="flex overflow-x-auto -mr-4 sm:mr-0 gap-4 sm:gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {perspectivePosts.map((post) => (
              <div key={post._id} className="flex-none w-[82vw] snap-start sm:w-auto">
                <ArticleCard post={post} />
              </div>
            ))}
          </div>
        </div>
      )}


    </section>
  );
}
