/*jslint node:true*/

(function () {
    'use strict';

    var gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        del         = require('del'),
        autoprefix  = require('gulp-autoprefixer'),
        notify      = require('gulp-notify'),
        uglify      = require('gulp-uglify'),
        concat      = require('gulp-concat');

    gulp.task('clean', function (cb) {
        return del([
            'dist/**/*',
            '!dist/.gitkeep'
        ], cb);
    });

    gulp.task('sass', function () {
        return gulp.src('assets/scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError('<%= error.message %>')))
            .pipe(autoprefix('last 5 version'))
            .pipe(concat('anestweb.min.css'))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('scripts', function () {
        return gulp.src([
                'app/app.module.js',
                'app/controllers/**/*.js',
                'assets/js/**/*.js'
            ])
            .pipe(concat('anestweb.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('watch', function () {
        var fnFileChanged = function (e) {
            console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
        };
        gulp.watch('assets/scss/**/*.scss', ['sass']).on('change', fnFileChanged);
        gulp.watch([
            'app/app.module.js',
            'app/controllers/**/*.js',
            'assets/js/**/*.js'
        ], ['scripts']).on('change', fnFileChanged);
    });

    gulp.task('default', ['clean', 'sass', 'scripts']);
}());
