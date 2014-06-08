Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onKeyPress: function () {
        console.info('yes!', arguments);
    },

    clickTest: function () {
        console.info(arguments);
    }
});
