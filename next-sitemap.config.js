/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ismailchabane.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    additionalPaths: async () => {
      const extras = [
        {
          loc: '/',
          images: [
            {
              loc: 'https://ismailchabane.com/assets/ismailchabane.png',
              title: 'Ismail Chabane Profile Photo',
            },
          ],
        },
      ];
  
      const projectImages = require('./lib/seo/projects-images.json');
      for (const p of projectImages) {
        extras.push({
          loc: `/projects/${p.id}`,
          images: (p.images || []).map((img) => ({
            loc: `https://ismailchabane.com${img.src}`,
            title: img.alt,
          })),
        });
      }
  
      return extras;
    },
  };