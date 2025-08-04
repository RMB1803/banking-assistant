export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 sm:mb-6 leading-tight">
          Banking Made Simple
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Experience enhanced banking with our accessible platform designed for everyone. 
          Get help when you need it, learn at your own pace, and manage your finances with confidence.
        </p>
      </div>
    </section>
  );
}