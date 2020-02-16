export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e48a19134f94f9ee173d0df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7xqo6b5v',
                  apiId: '031b3751-cd0a-44bb-bb9d-ad307a15ea9f'
                },
                {
                  buildHookId: '5e48a1916861a73209dcff4d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f34svgs1',
                  apiId: 'fda93a7a-c61b-46a8-a6c4-767eca2c54e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjamcox/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f34svgs1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
