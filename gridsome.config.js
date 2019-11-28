// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'MarkdownContent',
        path: './src/content'
      }
    },
    `@gridsome/transformer-remark`,
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'JsonContent',
        path: './src/json'
      }
    },
    `@gridsome/transformer-json`
  ],
  templates: {
    MarkdownContent: '/people/:name'
  }
}
