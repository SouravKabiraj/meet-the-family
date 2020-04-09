const mocha = require('gulp-mocha');
const gulp = require('gulp');
const run = require('gulp-run');
const zip = require('gulp-zip');
const tslint = require('gulp-tslint');

const clean = function () {
    const del = require('del');
    return del(['build']);

};
const install = function (done) {
    run('npm prune --silent').exec(err => {
        if (err) {
            console.log(err);
        }
        run('npm install --silent').exec(err => {
            if (err) {
                console.log(err);
            }
            done();
        });
    });

};
const test = function () {
    return gulp.src('*/**/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register'],
            exit: true
        }));
};
const assemble = function () {
    return gulp.src(['**/*', '!node_module/**', 'package-lock.json', '!.git/**', '!.idea/**'])
        .pipe(zip('family.zip'))
        .pipe(gulp.dest('compressed/dist/'));
};
const lint = function () {

    return gulp.src(['**/*.ts', '!node_modules/**'])
        .pipe(tslint({
            formatter: 'stylish'
        }))
        .pipe(tslint.report({
            emitError: false
        }))
};
const compile = function (done) {
    run('tsc -p tsconfig.json').exec(err => {
        if (err) {
            console.log(err);
        }
        done();
    });
};

gulp.task('build', gulp.series(clean, lint, install, test, assemble, compile));
gulp.task('clean', clean);
gulp.task('install', install);
gulp.task('assemble', assemble);
gulp.task('test', test);
gulp.task('compile', compile);
