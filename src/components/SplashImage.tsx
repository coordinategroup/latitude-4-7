export default function SplashImage() {
  return (
    <section className="w-full px-8 lg:px-16">
      <div className="aspect-[16/6] relative overflow-hidden">
      <video
        src="/images/Videos/seychelles_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      </div>
    </section>
  );
}
