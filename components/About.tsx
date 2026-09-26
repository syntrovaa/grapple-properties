import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative h-72 w-full overflow-hidden border border-line md:h-96">
          <Image
            src="/images/team-casual.jpg"
            alt="The Grapple Properties team"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl text-ink">
            Led by people who know Zimbabwean property.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink/75">
            Grapple Properties (Pvt) Ltd is led by founder and CEO Allen
            Chigwaza, alongside a team covering sales, letting, management
            and consultancy. The company works across Harare and Bulawayo,
            with listings on Property.co.zw, Propertybook, ShonaHome and OTM
            in addition to direct enquiries.
          </p>
          <p className="mt-4 font-display text-lg italic text-green">
            Define success and lead you home.
          </p>
        </div>
      </div>
    </section>
  );
}
