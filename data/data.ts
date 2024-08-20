const currentYear = new Date().getFullYear();
const data = {
  sitename: "Sandip Baikare Blog",
  sitetagline: "Something great is on the way! ✨ 🔥",
  siteurl: "https://github.com/baikaresandip",
  sitelogo: "",
  title: "Coming Soon!",
  description: "We&apos;re currently working hard to bring you something great",
  newsletterheading: "Stay tuned for our live updates!",
  copyrightText: `Copyright © ${currentYear} | MAT WORLD`,
  socialIconsHeading: "Follow Us",
  hideSubscribeForm: false, // make true to disable subscription form
  socialIcons: [
    {
      icon: "facebook",
      link: "https://www.facebook.com/matworld360",
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
