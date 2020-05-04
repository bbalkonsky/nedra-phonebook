module.exports = {
    pwa: {
        name: 'phonebook',
        themeColor: '#007bc1',
        msTileColor: '#006198',
        manifestOptions: {
            name: 'Телефонный справочник «Газпром недра»',
            short_name: 'Справочник 2.0',
            background_color: '#007bc1',
            display: 'standalone'
        },
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true
        }
    }
};
