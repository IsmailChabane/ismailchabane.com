/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ismailchabane.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    /*
        Additional paths
        NOTE : TO BE CHANGED LATER TO BE AUTO GENERATED FROM THE PROJECTS DATA
    */
    additionalPaths: async () => ([
      {
        loc: '/',
        images: [
          'https://ismailchabane.com/assets/ismailchabane.png',
        ],
      },
      {
        loc: '/projects/africkana',
        images: [
          'https://ismailchabane.com/work/africkana/website.png',
          'https://ismailchabane.com/work/africkana/website2.png',
        ],
      },
      {
        loc: '/projects/kora-awards',
        images: [
          'https://ismailchabane.com/work/koraawards/website.png',
        ],
      },
      {
        loc: '/projects/sofimed-maroc',
        images: [
          'https://ismailchabane.com/work/sofimedmaroc/website.png',
        ],
      },
      {
        loc: '/projects/softskills-club',
        images: [
          'https://ismailchabane.com/work/softskillsclub/website.png',
        ],
      },
      {
        loc: '/projects/vote-moi',
        images: [
          'https://ismailchabane.com/work/votemoi/website.png',
          'https://ismailchabane.com/work/votemoi/website2.png',
        ],
      },
      {
        loc: '/projects/pdf-orca',
        images: [
          'https://ismailchabane.com/work/pdforca/website.png',
        ],
      },
    ]),
  };