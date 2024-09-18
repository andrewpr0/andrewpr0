import "./globals.css";
import "./css.css";
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
  title: "Your Portfolio Title",
  description: "A showcase of your projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="site-content">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}