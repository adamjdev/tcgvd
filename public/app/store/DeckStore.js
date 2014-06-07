/**
 * This store is for mocking a deck. In reality this won't be used,
 * but instead you'll be receiving the cards to use from the server.
 **/
Ext.define('MyApp.store.DeckStore', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.deckStore',
    model: 'MyApp.model.Card',
    data: [
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
    ]
});
