import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/beginning-with-dui',
        'Tutorials/stylesheets',
        'Tutorials/buttons',
        'Tutorials/themeables-p1',
        'Tutorials/margin-and-padding'
      ]
    },
    {
      type: 'category',
      label: 'Elements',
      items: [
        'Elements/duixml',
        'Elements/element'
      ]
    },
    {
      type: 'category',
      label: 'Attributes',
      items: ['Attributes/content']
    }
  ]
};

export default sidebars;
