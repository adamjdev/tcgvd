Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    dummyDeck: null,
    cardStores: {
        you: {},
        opp: {}
    },

    onRender: function (comp, evt) {
        var view = this.getView();
        var el = view.getEl();
        var keyConfig = {
            key: 'dry',
            ctrl: true
        };
        el.addKeyListener(keyConfig, function (charCode, keyEvt) {
            keyEvt.preventDefault();
            view.fireEvent('ctrlkeypress', view, charCode);
        });

        this.newGame();
    },

    onCtrlKeyPress: function (view, charCode) {
        if (Ext.event.Event.D === charCode) {
            this.draw();
        }
    },

    clickTest: function () {
        console.info(arguments);
    },

    newGame: function () {
        var allCardsStore = this.getAllCardsStore();
        var dummyDeckArrayData = this.getDummyDeck();

        allCardsStore.loadRawData(dummyDeckArrayData);
    },

    draw: function () {
        var handStore = this.getYourHandStore();
        var deck = this.getYourDeckStore();
        // take the first card of the deck and move it to the hand.
        var card = deck.getAt(0);
        card.set('where', MyApp.model.Card.HAND);
    },

    getGameContainer: function () {
        return Ext.getCmp('gameContainer');
    },
    getGameViewModel: function () {
        return this.getGameContainer().getViewModel();
    },

    getAllCardsStore: function () {
        return this.getGameViewModel().getStore('allCards');
    },

    getYourHandStore: function () {
        return this.getGameViewModel().getStore('yourHand');
    },

    getYourDeckStore: function () {
        return this.getGameViewModel().getStore('yourDeck');
    },

    getDummyDeck: function () {

        return [
            [0, 1234, true, 'lol', 'does this'],
            [1, 1234, true, 'lodsfsal', 'does this'],
            [2, 1234, true, 'lodsafl', 'does this'],
            [3, 1234, true, 'l323ol', 'does this'],
            [4, 1234, true, 'lo[<0;168;13m4]l', 'does this'],
            [5, 1234, true, 'lsdfol', 'does this'],
            [6, 1234, true, 'lsdafaol', 'does this'],
            [7, 1234, true, 'lsdffol', 'does this'],
            [8, 1234, true, 'l4f3ol', 'does this'],
            [8, 1234, true, 'lo3c3l', 'does this'],
            [9, 1234, true, 'lo3f3l', 'does this'],
            [10, 1234, true, 'lof3l', 'does this'],
            [11, 1234, true, 'l[<0;168;21m33e]ol', 'does this'],
            [12, 1234, true, 'l4f43ol', 'does this'],
            [13, 1234, true, 'lo43f3l', 'does this'],
            [14, 1234, true, 'lrg2g2rol', 'does this'],
            [15, 1234, true, 'li4rgol', 'does this'],
            [16, 1234, true, 'l4rg4gol', 'does this']
        ];
    }
});
