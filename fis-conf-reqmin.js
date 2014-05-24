fis.config.set('modules.postpackager', 'reqmin');
//autoCombine设置是否将零散资源进行合并
//fis.config.set('settings.postpackager.reqmin.autoCombine', false);
fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');
fis.config.set('pack', {
    'pkg/lib.js': [
        '/modules/underscore/**.js',
        '/modules/backbone/**.js',
        '/modules/jquery/**.js',
        '/modules/vendor/**.js',
        '/modules/common/**.js'
    ]
});