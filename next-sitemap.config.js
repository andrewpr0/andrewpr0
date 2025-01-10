/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://andrewpr0.art',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/#concept-art', changefreq: 'weekly', priority: 0.8 },
      { loc: '/#3d-work', changefreq: 'weekly', priority: 0.8 },
      { loc: '/#about', changefreq: 'monthly', priority: 0.6 },
  ],
};