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
        <meta name="description" content="Explora increíbles proyectos de concept art. Andrew Sánchez, artista profesional, colombia ofrece diseños únicos de concept art y más."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Concept Art | AndrewPro - Ilustrador en Colombia",
                    "description": "Portafolio de Andrew Sánchez (AndrewPro), ilustrador colombiano especializado en Concept Art y arte digital.",
                    "url": "https://andrewpr0.art",
                    "author": {
                        "@type": "Person",
                        "name": "Andrew Sánchez",
                        "url": "https://andrewpr0.art",
                        "sameAs": [
                            "https://www.artstation.com/andrewpro",
                            "https://www.instagram.com/an.drew.pro",
                            "https://twitter.com/andrewpr0"
                        ]
                    },
                    "keywords": [
                        "concept art",
                        "concept art colombia",
                        "andrewpro",
                        "andrewpr0",
                        "jaime sanchez ilustrador",
                        "ilustrador colombia"
                    ],
                    "image": "https://andrewpr0.art/images/portafolio.jpg"
                }) }} />

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