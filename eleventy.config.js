import webc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPlugin(webc);
};