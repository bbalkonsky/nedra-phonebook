module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/tel/' : '/',
    pwa: {
        name: 'phonebook',
        themeColor: '#007bc1',
        msTileColor: '#006198',
        manifestOptions: {
            name: 'Телефонный справочник «Газпром недра»',
            short_name: 'Справочник',
            background_color: '#007bc1',
            display: 'standalone'
        },
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: new RegExp('^https://newspaper-dev.gp-ggr.ru/phonebook/'),
                handler: 'staleWhileRevalidate',
                options: {
                    // networkTimeoutSeconds: 10,
                    cacheName: 'api-cache',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }]
        }
    }
};
