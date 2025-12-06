import JoinCard from "@/components/JoinCard";

export default function HeroSection() {
  return (
    <section className="pt-6 pb-10 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="px-4 md:px-6 lg:px-8 container mx-auto relative z-10">
        <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-center">
          <div
            className="flex justify-center items-center mt-4 md:mt-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl animate-breathe">
              <JoinCard />
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div
        className="hidden md:block absolute top-1/4 left-[5%] w-8 h-8 bg-primary/5 rounded-full animate-float"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="hidden md:block absolute bottom-1/4 right-[8%] w-12 h-12 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "0.7s" }}
      ></div>
      <div
        className="hidden md:block absolute top-2/3 left-[15%] w-5 h-5 bg-primary/5 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </section>
  );
}
