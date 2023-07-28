export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Samsung Store Pakistan';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Leading Samsung Mobile Phones Store in Pakistan';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Address: Fazl-e-Haq Plaza, Blue Area, Islamabad - Contact: 051-5289754';

  return {
    name,
    blogTitle,
    footerText,
  };
};
