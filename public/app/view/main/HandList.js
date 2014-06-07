Ext.define('MyApp.view.main.HandList', {
    extend: 'Ext.grid.Panel',
    xtype: 'handList',
    columns: [
        {
            flex: 1,
            dataIndex: 'name'
        }
    ]
});
