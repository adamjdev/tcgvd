Ext.define('MyApp.model.Card', {
    extend: 'Ext.data.Model',

    statics: {
        DECK: -1,
        FIELD: 0,
        HAND: 1
    },

    fields: [
        /**
         * Id given to you by the server for identifying this card.
         * If you lose visibility of a card then later get it back,
         * you are going to see that card with a different id.
         **/
        'id',
        /**
         * Id of the card unique to the card as far is legal gameplay is
         * concerned. This id should always be the same even if the database
         * of cards is rebuilt. E.g. the 8 digit numbers on yugioh cards
         **/
        'cardId',
        {name: 'revealedToYou', type: 'boolean', defaultValue: false},
        'name',
        'description',

        {name: 'controller', type: 'number', defaultValue: 0},
        {name: 'owner', type: 'number', defaultValue: 0},
        {name: 'whoseSide', type: 'number', defaultValue: 0},
        {name: 'where', type: 'number', defaultValue: -1},
        {name: 'x', type: 'number', defaultValue: 0},
        {name: 'y', type: 'number', defaultValue: 0},
        // order
        {name: 'weight', type: 'number', defaultValue: 0}
    ]
});
