/**
 * This store is for mocking a deck. In reality this won't be used,
 * but instead you'll be receiving the cards to use from the server.
 **/
Ext.define('MyApp.store.DeckStore', {
    extend: 'MyApp.store.Card',
    alias: 'store.deckStore'
});
