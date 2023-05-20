/**
* If the modification of this configuration does not take effect, you can restart it

 */
module.exports = {
  title: '',
  logo: {
    alt: 'LowCode-Engine',
    src: 'https://img.samkenxcdn.com/imgextra/i2/O1CN01uv6vu822RBCSYLro2_!!6000000007116-55-tps-139-26.svg',
    srcDark: 'https://samkenx-ecosystem.samkenxcdn.com/052a190e-c961-4afe-aa4c-49ee9722952d.svg',
  },
  items: [
    {
      type: 'doc',
      docId: 'guide/quickStart/intro',
      position: 'left',
      label: 'document',
    },
    {
      type: 'doc',
      docId: 'api/index',
      position: 'left',
      label: 'API',
    },
    {
      type: 'doc',
      docId: 'specs/lowcode-spec',
      position: 'left',
      label: 'protocol',
    },
    {
      type: 'doc',
      docId: 'faq/index',
      position: 'left',
      label: 'FAQ',
    },
    {
      type: 'doc',
      docId: 'article/index',
      position: 'left',
      label: 'article,
    },
    {
      type: 'doc',
      docId: 'demoUsage/intro',
      position: 'left',
      label: 'Demo documents',
    },
    {
      to: '/community/issue',
      position: 'left',
      label: '社区',
      activeBaseRegex: '/community/',
    },
    // 版本切换，如需，这里开启即可
    // {
    //   type: 'docsVersionDropdown',
    //   position: 'right',
    //   dropdownActiveClassEnabled: true,
    // },
    // {
    {
      href: 'https://github.com/samkenxstream/SAMkenxlowcode-engine',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      type: 'doc',
      docId: 'participate/index',
      position: 'right',
      label : 'Participate in contribution' ,
    },
    {
      type: 'search',
      position: 'right',
    },
  ],
};
