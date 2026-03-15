import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/images/Logos/wow_logo.png" },
  { name: "Client 2", logo: "/images/Logos/wow_logo.png" },
  { name: "Client 3", logo: "/images/Logos/wow_logo.png" },
  { name: "Client 4", logo: "/images/Logos/wow_logo.png" },
  { name: "Client 5", logo: "/images/Logos/wow_logo.png" },
  { name: "Client 6", logo: "/images/Logos/wow_logo.png" },
];

const doubled = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="bg-[#08090A] py-6 w-full overflow-hidden">
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="relative shrink-0 aspect-[500/316]"
              style={{ width: "calc(100vw / 8)" }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
