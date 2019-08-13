const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\templates\\blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\tyler\\repo\\gatsbypractice\\src\\pages\\index.js")))
}

