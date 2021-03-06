var gulp = require("gulp");
var del = require("del");
var fs = require("fs");
var shell = require("gulp-shell");
var tslint = require("gulp-tslint");
var jasmine = require("gulp-jasmine");
var istanbul = require("gulp-istanbul");
var reporters = require("jasmine-reporters");
var Reporter = require("jasmine-terminal-reporter");

gulp.task("clean", function(cb) {
	del(["game/script"], cb);
});

gulp.task("install:typings", shell.task("typings install"));

gulp.task("compile", shell.task("tsc -p ./"));

gulp.task("deploy", shell.task("npm install", {cwd: "game"}));

gulp.task("build", ["compile"]);

gulp.task("lint", function(){
	return gulp.src("src/**/*.ts")
		.pipe(tslint())
		.pipe(tslint.report());
});

gulp.task("test", ["compile"], function(cb) {
	var jasmineReporters = [ new Reporter({
			isVerbose: false,
			showColors: true,
			includeStackTrace: true
		}),
		new reporters.JUnitXmlReporter()
	];
	gulp.src(["game/script/**/*.js"])
		.pipe(istanbul())
		.pipe(istanbul.hookRequire())
		.on("finish", function() {
			gulp.src("spec/**/*[sS]pec.js")
				.pipe(jasmine({ reporter: jasmineReporters}))
				.pipe(istanbul.writeReports({ reporters: ["text", "cobertura"] }))
				.on("end", cb);
		});
});

gulp.task("default", ["compile"]);
