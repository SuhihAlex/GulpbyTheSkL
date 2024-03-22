const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,
    
    html: {
        collapseWhitespace: isProd
    },

    include: {
        prefix: '@',
        basepath: '@file'
    },
    
    css: {
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    },

    imagemin: {
        verbose: true
    },

    svgmin: {
      js2svg: {
          pretty: true
        }
    },

    svgFunc: {
      run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
    },

    svgSprite: {
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    },

    fonter: {
        formats: ["ttf", "woff", "woff2", "eot", "svg"]
    },

    typograf: {
      locale : [
        "ru", "en-US"
      ]
    },

    clean: {
      level: 2
    }
}