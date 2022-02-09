import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content="#000000"/>
                    <link rel="shortcut icon" href="/img/brand/favicon.ico"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/img/brand/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/img/brand/favicon-16x16.png"/>
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/img/brand/apple-touch-icon.png"
                    />
                    <link rel="manifest" href="/img/brand/site.webmanifest"/>
                </Head>
                <body className="text-blueGray-700 antialiased">
                <div id="page-transition"/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
