Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    stores: [
        // TODO: add global/shared stores here
        'HandStore'
    ],

    launch: function () {
        return;
        // TODO - Launch the application
        this.bindCtrlKeyEvents();
    },

    /**
     * Returns the base element for which game related global
     * events should be bound
     **/
    getGameEvtBase: function () {
        if (!this.gameEvtBase) {
            this.gameEvtBase = Ext.get('html');
        }
        return gameEvtBase;
    },

    bindCtrlKeyEvents: function () {
        var gameEvtBase = this.getGameEvtBase();
        var keyConfig = {
            key: 'dry',
            ctrl: true
        };
        gameEvtBase.addKeyListener(keyConfig, function (charCode, keyEvt) {
            keyEvt.preventDefault();
            // draw
            if (Ext.event.Event.D === charCode) {
                // todo
            }
            //view.fireEvent('keypress', view, charCode, keyEvt);
        });

    }
});
