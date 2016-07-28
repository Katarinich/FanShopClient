var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mainSass: "./static/styles/style.scss", // path to your main SASS file (optional)
  verbose: false, // print out your custom files used
  debug: false, // print out the full generated scss file
  styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass"),
  scripts: {
    // add every bootstrap script you need
    'transition': true,
    'dropdown': true
  },
  styles: {
    // add every bootstrap style you need
    "mixins": true,

    "normalize": true,
    "print": true,
    "glyphicons": true,

    "scaffolding": true,
    "type": true,
    "code": true,
    "grid": true,
    "tables": true,
    "forms": true,
    "buttons": true,

    "component-animations": true,
    "dropdowns": true,
    "button-groups": true,
    "input-groups": true,
    "navs": true,
    "navbar": true,
    "breadcrumbs": true,
    "pagination": true,
    "pager": true,
    "labels": true,
    "badges": true,
    "jumbotron": true,
    "thumbnails": true,
    "alerts": true,
    "progress-bars": true,
    "media": true,
    "list-group": true,
    "panels": true,
    "wells": true,
    "responsive-embed": true,
    "close": true,

    "modals": true,
    "tooltip": true,
    "popovers": true,
    "carousel": true,

    "utilities": true,
    "responsive-utilities": true
  }
};
