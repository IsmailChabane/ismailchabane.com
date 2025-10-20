/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ismailchabane.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    additionalPaths: async () => {
      const extras = [
        { loc: '/', images: ['https://ismailchabane.com/assets/ismailchabane.png'] },
      ];
      const projectImages = require('./lib/seo/projects-images.json');
      for (const p of projectImages) {
        extras.push({
          loc: `/projects/${p.id}`,
          images: (p.images || []).map(img => `https://ismailchabane.com${img.src}`),
        });
      }
      return extras;
    },
  };