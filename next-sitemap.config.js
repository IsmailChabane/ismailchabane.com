/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ismailchabane.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  // Return plain field objects; next-sitemap will handle XML generation
  additionalPaths: async () => {
    const extras = [
      {
        loc: '/',
        images: [
          {
            url: 'https://ismailchabane.com/assets/ismailchabane.png',
            caption: 'Ismail Chabane Profile Photo',
          },
        ],
      },
    ];

    const projectImages = require('./lib/seo/projects-images.json');
    for (const p of projectImages) {
      extras.push({
        loc: `/projects/${p.id}`,
        images: p.images.map((img) => ({
          url: `https://ismailchabane.com${img.src}`,
          caption: img.alt,
        })),
      });
    }

    return extras;
  },
};


