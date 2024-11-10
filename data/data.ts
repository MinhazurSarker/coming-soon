const currentYear = new Date().getFullYear();
const data = {
  sitename: "Cellsweb IT Solutions Ltd",
  sitetagline: "Something great is on the way! ✨ 🔥",
  siteurl: "https://github.com/baikaresandip",
  sitelogo: "htt[s://cellsweb.com/cellsweb-aminated.svg",
  title: "Coming Soon!",
  description: "We&apos;re currently working hard to bring you something great",
  newsletterheading: "Stay tuned for our live updates!",
  copyrightText: `Copyright © ${currentYear} | Cellsweb IT Solutions Ltd`,
  socialIconsHeading: "Follow Us",
  hideSubscribeForm: false, // make true to disable subscription form
  socialIcons: [
    {
      icon: "facebook",
      link: "https://www.facebook.com/cellsweb",
    },
    // {
    //   icon: "twitter",
    //   link: "https://twitter.com/BaikareSandeep",
    // },
    // {
    //   icon: "linkedIn",
    //   link: "https://www.linkedin.com/in/sandip-baikare/",
    // },
  ],
  hide: {
    subscribeForm: false, // make true to disable subscription form
    header: false,
    content: false,
    footer: false,
  },
};

export default data;
