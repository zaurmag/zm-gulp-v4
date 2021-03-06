var cmsPath = 'template_path';
module.exports = {
    path: {
        build: { // Build files
            html: 'build/',
            style: 'build/css',
            img: 'build/images',
            js: 'build/js',
            fonts: 'build/fonts',
            // Replace in cms template
            // style: cmsPath + '/css',
            // img: cmsPath + '/images',
            // js: cmsPath + '/js',
            // fonts: cmsPath + '/fonts'
        },
        src: { // Source files
            pug: 'src/pug/*.pug',
            style: 'src/sass/main.sass',
            img: 'src/images/**/*.+(png|jpg|jpeg|gif)',
            pngIcons: 'src/images/icons/png/*.png',
            svgIcons: 'src/images/icons/svg/*.svg',
            js: 'src/js/**/*.js',
            fonts: 'src/fonts/*'
        },
        watch: { // Watch files
            pug: 'src/pug/**/*.pug',
            style: 'src/sass/**/*'
        },
        clean: {
            all: './build'
        }
    }
};