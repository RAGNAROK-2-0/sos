import Document, { Head, Html,Main ,NextScript} from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,100&family=Signika+Negative:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    );
  }
}
