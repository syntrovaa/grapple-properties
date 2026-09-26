import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Grapple Properties"
            width={36}
            height={30}
            className="h-8 w-auto opacity-90"
          />
          <span className="font-display text-base text-white">
            Grapple Properties
          </span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Grapple Properties (Pvt) Ltd. Harare,
          Zimbabwe.
        </p>
      </div>
    </footer>
  );
}
