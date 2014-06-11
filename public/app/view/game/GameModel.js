/**
 * This model should belong to the game container
 **/
Ext.define('MyApp.view.game.GameModel', {
    extend: 'Ext.app.ViewModel',
    require: [
        'MyApp.model.Card'
    ],
    alias: 'viewmodel.game',

    stores: {
        allCards: {
            model: 'MyApp.model.Card',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            }
        },
        yourCards: {
            source: '{allCards}',
            filters: [
                {
                    property: 'revealedToYou',
                    value: true
                },
                {
                    property: 'whoseSide',
                    value: 0
                }
            ]
        },
        yourDeck: {
            source: '{yourCards}',
            filters: [
                {
                    property: 'where',
                    value: MyApp.model.Card.DECK
                }
            ]
        },
        yourHand: {
            source: '{yourCards}',
            filters: [
                {
                    property: 'where',
                    value: MyApp.model.Card.HAND
                }
            ]
        }
    }

});
