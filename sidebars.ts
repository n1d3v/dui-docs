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
        'Tutorials/themeables-p1'
      ]
    },
    {
      type: 'category',
      label: 'Elements',
      items: ['Elements/element']
    },
    /*{
      type: 'category',
      label: 'Attributes',
      items: ['']
    }*/
  ]
};

export default sidebars;
