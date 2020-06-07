const PROPS = {
    PROD: false,
    DB_LOCAL: {
        HOST: '127.0.0.1',
        USERNAME: 'root',
        PASSWORD: '',
        SCHEMA: 'abc',
        PORT: 3308
    },
    DB_PROD: {
        HOST: '',
        USERNAME: '',
        PASSWORD: '',
        SCHEMA: ''
    }
}

module.exports = PROPS