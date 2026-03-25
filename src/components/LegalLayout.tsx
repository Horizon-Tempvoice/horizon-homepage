import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#080a10] text-[#dde2f0] min-h-screen">
      <Navbar />

      <div className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00A0FF]/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A0FF] to-[#0070cc]">
            {title}
          </h1>
          {subtitle && <p className="mt-3 text-white/50 text-sm">{subtitle}</p>}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-headings:font-semibold prose-li:text-white/70 prose-strong:text-white prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-p:leading-relaxed max-w-none">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
