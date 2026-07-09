export type ProfileLink = {
  label: string;
  href: string;
  description: string;
  primary?: boolean;
};

export type Highlight = {
  label: string;
  value: string;
};

export const profile = {
  name: 'fkggplay',
  handle: '1891189',
  location: 'China',
  title: '个人主页',
  tagline: '把自己的域名作为入口，把内容发布到更适合传播的平台。',
  bio: [
    '这里是一个轻量的个人主页，用来说明我是谁、我关注什么，以及可以在哪里找到我。',
    '博客保留为归档和长文沉淀；日常内容、视频和动态会优先放到外部平台。',
  ],
  avatar: 'https://github.com/RUNAWAYRUN.png?size=320',
  ogImage: 'https://github.com/RUNAWAYRUN.png?size=1200',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/RUNAWAYRUN',
      description: '代码、项目和公开仓库',
      primary: true,
    },
    {
      label: 'Blog Archive',
      href: 'https://blog.1891189.xyz/',
      description: '旧博客归档和长文',
    },
    {
      label: 'X',
      href: '',
      description: '短内容和即时动态',
      primary: true,
    },
    {
      label: 'YouTube',
      href: '',
      description: '视频内容和演示',
      primary: true,
    },
  ] satisfies ProfileLink[],
  highlights: [
    {
      label: 'Home',
      value: '1891189.xyz',
    },
    {
      label: 'Code',
      value: 'RUNAWAYRUN',
    },
    {
      label: 'Archive',
      value: 'blog.1891189.xyz',
    },
  ] satisfies Highlight[],
};

export const visibleLinks = profile.links.filter((link) => link.href);
