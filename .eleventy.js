const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const markdownIt = require('markdown-it');
const minify = require('html-minifier-terser').minify;

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/assets');

  let options = {
    html: true
  };
  let markdownLib = markdownIt(options);
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: '.project__img img',
    preferNativeLazyLoad: false,
    cacheFile: ''
  });

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

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
