import "./globals.css";

export const metadata = {
  title: "Hawi SH.P.K",
  description:
    "Ofrojme makineri dhe pjesë këmbimi, impiate prodhimi të materialeve inerte, asistencë teknike, eksperiencë shumëvjeçare, ndërtimin dhe vënien në funksion të impianteve të pastrimit të ujrave civile dhe atyre industriale. Operojmë në Shqipëri me prespektivë për tu zhvilluar edhe në rajonin e Ballkanit.",
  keywords:
    "çekiçë, koraca, transportier, pvc, përpunim mineralesh, miniera, rrula, sita rëre zhavorri, vibratorë bunkieri, elektromotorr, nofulla frantojo, xhunta mekanike, gomina për transportier, kushineta, buloneri, reduktor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
