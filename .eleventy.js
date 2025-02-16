ScrollReveal().reveal('.module');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Card", function(name, avatar, AU) {
    return `
		    <span class="${avatar}"></span>
		    <h2 class="planet__name">${name}</h2>
        <h3 class="AU">${AU}</h3>
    `;
  });

};