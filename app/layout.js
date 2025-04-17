import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
/* git add .
git commit -m "változtatás leírása"
git push
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wordle-szerű játék - Szórakoztató szójáték",
  description: "Próbáld ki a saját Wordle-szerű szójátékodat!",
  keywords: "Wordle, szójáték, játék, memóriafejlesztés, szórakozás",

  // Open Graph metaadatok
  openGraph: {
    title: "Wordle-szerű játék",
    description:
      "Próbáld ki a saját Wordle-szerű szójátékodat, és fejleszd a szókincsedet!",
    url: "https://www.sajatwordle.hu",
    images: [
      {
        url: "/favicon.png", // Az itt használt kép, amit a közösségi médiában előnézeti képként használunk
        width: 1200,
        height: 630,
        alt: "Wordle-szerű játék",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // Saját favicon itt
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
