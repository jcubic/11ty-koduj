module.exports = function(eleventyConfig) {
  // Copy the css directory to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};