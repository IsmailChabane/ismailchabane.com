/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ismailchabane.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  transform: async (config, url) => {
    return { ...config, loc: url };
  },
  additionalPaths: async (config) => {
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

    // Load project image mapping for image sitemap entries
    const projectImages = require('./lib/seo/projects-images.json');
    for (const p of projectImages) {
      extras.push({
        loc: `/projects/${p.id}`,
        images: p.images.map((img) => ({
          loc: `https://ismailchabane.com${img.src}`,
          title: img.alt,
        })),
      });
    }

    return extras.map((e) =>
      config.transform(config, e.loc).then((base) => ({ ...base, images: e.images }))
    );
  },
};


