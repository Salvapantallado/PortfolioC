import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LEM DEV's Portfolio", 
  description: "Check out my projects!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          LEM DEV's Portfolio
        </title>
        <meta
          name="description"
          content="Check out my projects!"
          key="desc"
        />
        <link
          href="https://db.onlinewebfonts.com/c/6a28a1fb5b77054a12626d0c23c92aa2?family=Cera+CY+Bold"
          rel="stylesheet"
        />
        <link href="https://db.onlinewebfonts.com/c/a1ab9bebae84d82fbcfe930c4643de7a?family=Cera+CY+Regular" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <script src="https://web3forms.com/client/script.js" async defer></script>
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
