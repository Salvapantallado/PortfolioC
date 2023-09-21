// import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import ogimage from "../../public/ogimage.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LEM DEV's Portfolio", 
  description: "Check out my projects!",
  ogimage: "https://media.discordapp.net/attachments/1154548213135704159/1154548422712496198/ogimage.png?width=1342&height=701"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Check out my projects!"
          key="desc"
        />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1154548213135704159/1154548422712496198/ogimage.png?width=1342&height=701" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
        <link
          href="https://db.onlinewebfonts.com/c/6a28a1fb5b77054a12626d0c23c92aa2?family=Cera+CY+Bold"
          rel="stylesheet"
        />
        <link href="https://db.onlinewebfonts.com/c/a1ab9bebae84d82fbcfe930c4643de7a?family=Cera+CY+Regular" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <script src="https://web3forms.com/client/script.js" async defer></script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
