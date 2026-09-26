const details = [
  { label: "Address", value: "53 Samora Machel Avenue, Karigamombe Centre, 17th Floor, Harare" },
  { label: "Phone", value: "+263 242 770 186" },
  { label: "WhatsApp", value: "+263 77 725 1575" },
  { label: "Email", value: "info@grappleproperties.co.zw" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-green-deep text-white">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-3xl">Get in touch</h2>
          <p className="mt-4 max-w-sm text-white/75">
            Buying, selling, letting or looking for someone to manage a
            property — reach the office directly.
          </p>

          <dl className="mt-8 space-y-5 border-t border-white/15 pt-6">
            {details.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[17px]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <a
            href="https://wa.me/263777251575"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-6 py-4 text-center text-[15px] font-medium transition-colors hover:bg-white hover:text-green-deep"
          >
            Message us on WhatsApp
          </a>
          <a
            href="mailto:info@grappleproperties.co.zw"
            className="border border-white/30 px-6 py-4 text-center text-[15px] font-medium transition-colors hover:bg-white hover:text-green-deep"
          >
            Email the office
          </a>
          <a
            href="tel:+263242770186"
            className="border border-white/30 px-6 py-4 text-center text-[15px] font-medium transition-colors hover:bg-white hover:text-green-deep"
          >
            Call +263 242 770 186
          </a>
        </div>
      </div>
    </section>
  );
}
