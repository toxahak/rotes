var dest = "./build";
var src = './src';

var bowerDir = './bower_components'

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + "/**/*.{sass,scss}",
    dest: dest,
    settings: { 
      loadPath: [bowerDir + '/bootstrap-sass/assets/stylesheets']
    }
  }, 
  scripts: {
    src: [src + '/module.js', src + "/**/*.js"],
    dest: dest
  }, 
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/**/*.jade",
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
