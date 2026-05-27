export default function VideoHero() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-for-clothes-in-a-store-4613-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold">
            Ivonne Store
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-2 font-medium">
            O lugar de comprar barato!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Moda masculina e feminina com a melhor relação custo-benefício da região
          </p>
        </div>
      </div>
    </div>
  );
}
