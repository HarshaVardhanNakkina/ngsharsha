const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const markdownIt = require('markdown-it');
const minify = require('html-minifier-terser').minify;
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPlugin(syntaxHighlight);

  let options = {
    html: true
  };
  let markdownLib = markdownIt(options);
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addFilter('humanDate', function (dateStr) {
    let date = new Date(dateStr);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  });

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: 'img',
    preferNativeLazyLoad: false,
    cacheFile: ''
  });

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        let minified = minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: {
            compress: true,
            mangle: true
          }
        });
        return minified;
      }
      return content;
    });
  }

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
