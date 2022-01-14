import Background from "./background";
import Head from "next/head";

export default function Homepage() {
    return(
        <>
        <Head>
            <title>Aliif Arief's Homepage</title>
            <meta name="description" content="Website portfolio milik Aliif Arief masih dalam tahap pengembangan" />
            <link rel="icon" href="/favicon.svg" />
            <meta property="og:title" content="Aliif Arief's Homepage" />
            <meta property="og:description" content="Website portfolio milik Aliif Arief masih dalam tahap pengembangan" />
            <link rel="canonical" href="https://aliif.space/" />
            <meta property="og:url" content="https://aliif.space/" />
            <meta property="og:site_name" content="Aliif Arief's Homepage" />
            <meta property="og:image" content="https://cdn.statically.io/og/theme=dark/Aliif%20Arief's%20Portfolio.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content="https://cdn.statically.io/og/theme=dark/Aliif%20Arief's%20Portfolio.jpg" />
            <meta property="twitter:title" content="Aliif Arief's Homepage" /><meta name="twitter:site" content="@lifrief" />
            <meta name="twitter:creator" content="@lifrief" /> 

            <script async defer data-website-id="5d445dc6-dfc1-42f9-a54a-7b351edefd9d" src="https://umami.aliif.space/umami.js"></script>
        </Head>
        <Background />
        </>
    )
}