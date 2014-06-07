Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'MyApp.view.main.HandList'
    ],

    alias: 'viewmodel.main',

    data: {
        name: 'MyApp'
    },

    id: 'MyApp',

    items: [{

        extend: 'Ext.panel.Panel',

        requires: [
            'Ext.layout.container.HBox',
            'Ext.layout.container.VBox'
        ],

        width: 1000,
        height: 600,

        frame: true,

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        title: 'Info',
                        xtype: 'panel',
                        flex: 1,
                        ref: 'cardInfoAndHand',
                        html: 'cardInfoAndHand'
                    },
                    {
                        id: 'mainField',
                        width: 800,
                        title: 'Card field',
                        ref: 'mainField',
                        layout: 'fit',
                        xtype: 'panel',
                        style: {
                            backgroundColor: 'blue'
                        },
                        html: 'mainField'
                    }
                ]
            },
            {
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        flex: 1,
                        html: 'stats'
                    },
                    {
                        flex: 1,
                        xtype: 'handList',
                        layout: 'fit',
                    },
                    {
                        flex: 3,
                        id: 'chatArea',
                        ref: 'chatArea',
                        xtype: 'panel',
                        layout: 'fit',
                        html: 'chat'
                    }
                ]

            }
        ]
    }]
});