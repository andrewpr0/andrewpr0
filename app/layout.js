import "./globals.css";
import "./css.css";
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
  title: "Your Portfolio Title",
  description: "A showcase of your projects and skills",
};

export default function Layout({ children, onCategoryChange }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Andrew Portfolio - Concept Art | Concept Art Colombia</title>
        <meta name="description" content="Explore the portfolio of Andrew Pro, a Colombian illustrator and concept artist specializing in Concept Art and 3D Work." />
        <meta name="keywords" content="Concept Art, Concept Art Colombia, Illustrator, Andrew Pro, Andrewpr0, 3D Work, Jaime Sanchez Ilustrador, Ilustrador Colombia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

        <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Andrew Pro",
                            description: "Illustrator and Concept Artist based in Colombia. Specializes in Concept Art and 3D Work.",
                            url: "https://andrewpr0.art",
                            sameAs: [
                                "https://www.instagram.com/an.drew.pro",
                                "https://www.artstation.com/andrewpro",
                                "https://www.twitch.tv/andrewpr0",
                            ],
                            knowsAbout: ["Concept Art", "3D Work", "Illustration"],
                        }),
                    }}
                />

      </head>
      <body>
        <div className="site-content">
        <Header onCategoryChange={onCategoryChange} />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}