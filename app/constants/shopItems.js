const rootPath = '/shop'

export default [
  {
      text: 'Category #1',
      items: [
        { text: 'Subcategory #1', to: rootPath + '/1/1' },
        { text: 'Subcategory #2', to: rootPath + '/1/2' },
        { text: 'Subcategory #3', to: rootPath + '/1/3' },
        { text: 'Subcategory #4', to: rootPath + '/1/4' },
        { text: 'Subcategory #5', to: rootPath + '/1/5' }
      ]
  },
  {
    text: 'Category #2',
    items: [
      { text: 'Subcategory #1', to: rootPath + '/2/1' },
      { text: 'Subcategory #2', to: rootPath + '/2/2' },
      { text: 'Subcategory #3', to: rootPath + '/2/3' },
      { text: 'Subcategory #4', to: rootPath + '/2/4' },
      { text: 'Subcategory #5', to: rootPath + '/2/5' }
    ]
  },
  {
    text: 'Category #3',
    items: [
      { text: 'Subcategory #1', to: rootPath + '/3/1' },
      { text: 'Subcategory #2', to: rootPath + '/3/2' },
      { text: 'Subcategory #3', to: rootPath + '/3/4' },
      { text: 'Subcategory #4', to: rootPath + '/3/5' },
      { text: 'Subcategory #5', to: rootPath + '/3/6' }
    ]
  }
]
