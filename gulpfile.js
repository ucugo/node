var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('serve', [], function () {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function () {
            console.log('Restarting....');
        })
        .on('craash', function () {
            console.error('Application crashed....')
            console.log('Restarting....');
        });
});