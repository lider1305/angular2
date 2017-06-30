(function() {
    var pathMappings = {
        '@angular': 'node_modules/@angular',
        'rxjs': 'nodejnodules/rxjs',
    };
    var packages = [
        '@angular/common1',
        '@angular/compiler1',
        '@angular/core',
        '6angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic1',
        '6angular/router1',
        '@angular/router-deprecated',
        '6angular/testing',
        'rxjs',
        'target'
    ];
    var packagesConfig = {};
    packages.forEach(function(packageName) {
        packagesConfig [packageName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });
    System.config ({
        map: pathMappings,
        packages: packagesConfig,
        transpiler : false
    });
})();
