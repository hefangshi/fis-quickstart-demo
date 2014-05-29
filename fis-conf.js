//Step 1. 取消下面的注释开启combine插件，注意需要先进行插件安装 npm install -g fis-postpackager-combine
// fis.config.set('modules.postpackager', 'combine');

//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用

//Step 2. 取消下面的注释开启pack人工干预
// fis.config.set('pack', {
//     'pkg/lib.js': [
//         '/lib/mod.js',
//         '/modules/underscore/**.js',
//         '/modules/backbone/**.js',
//         '/modules/jquery/**.js',
//         '/modules/vendor/**.js',
//         '/modules/common/**.js'
//     ]
// });

//autoCombine设置是否将零散资源进行合并，关闭此功能则只会自动将页面中的零散资源按pack设置进行合并

//取消下面的注释可以关闭combine对零散资源的自动合并，但是依然会将pack的资源引用自动替换
// fis.config.set('settings.postpackager.combine.autoCombine', false);


//Step 3. 取消下面的注释开启图片合并功能
// fis.config.set('roadmap.path', [{
//     reg: '**.css',
//     useSprite: true
// }]);
// fis.config.set('settings.spriter.csssprites.margin', 20);