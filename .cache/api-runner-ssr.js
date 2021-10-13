var plugins = [{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-theme-material-ui-top-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-webfonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":{"google":[{"family":"Roboto","variants":["300","400","500"]}]}},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"0","head":true,"anonymize":true,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"zoomkoding.com","short_name":"zoomkoding.com","description":"줌코딩의 개발일기","lang":"en","display":"standalone","start_url":"/","icon":"static/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"ad9e124e5060ab5ddbaf24744e1cfc72"},
    },{
      plugin: require('/Users/mgang731/Documents/GitHub/my-gatsby-blog/31chillin.github.io/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
