/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ismailchabane.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    additionalPaths: async () => ([
      { loc: 'https://ismailchabane.com/', images: ['https://ismailchabane.com/assets/ismailchabane.png'] },
      { loc: 'https://ismailchabane.com/projects/africkana', images: [
          'https://ismailchabane.com/work/africkana/website.png',
          'https://ismailchabane.com/work/africkana/website2.png',
      ]},
      { loc: 'https://ismailchabane.com/projects/kora-awards', images: [
          'https://ismailchabane.com/work/koraawards/website.png',
      ]},
      { loc: 'https://ismailchabane.com/projects/sofimed-maroc', images: [
          'https://ismailchabane.com/work/sofimedmaroc/website.png',
      ]},
      { loc: 'https://ismailchabane.com/projects/softskills-club', images: [
          'https://ismailchabane.com/work/softskillsclub/website.png',
      ]},
      { loc: 'https://ismailchabane.com/projects/vote-moi', images: [
          'https://ismailchabane.com/work/votemoi/website.png',
          'https://ismailchabane.com/work/votemoi/website2.png',
      ]},
      { loc: 'https://ismailchabane.com/projects/pdf-orca', images: [
          'https://ismailchabane.com/work/pdforca/website.png',
      ]},
    ]),
  };