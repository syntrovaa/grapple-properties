import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-content grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-16 md:py-24 lg:pl-6 lg:pr-14">
          <p className="font-display text-lg italic text-green">
            Power, Style &amp; Class.
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
            Property in Zimbabwe, handled properly — from first viewing to
            final sale.
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/75">
            Grapple Properties buys, sells, lets and manages residential,
            commercial and industrial property across Harare and Bulawayo.
            Define success and lead you home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="rounded-sm bg-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-deep"
            >
              View current listings
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
            >
              Talk to an agent
            </a>
          </div>
        </div>

        <div className="relative order-first h-64 md:order-last md:h-auto">
          <div className="absolute inset-4 -z-10 border border-green md:inset-6" />
          <div className="relative h-full w-full overflow-hidden md:m-6">
            <Image
              src="/images/team-professional.jpg"
              alt="The Grapple Properties team"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
