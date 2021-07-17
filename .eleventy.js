const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: '.project__img img',
    preferNativeLazyLoad: false,
    cacheFile: ''
  });

  let markdownIt = require('markdown-it');
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options);
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addFilter('randomPost', arr => {
    arr.sort(() => 0.5 - Math.random());
    return arr.slice(0, 1);
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
