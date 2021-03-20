export default function(options) {
    const toBoolean = (prop) => {
        if (options[prop]) {
            options[prop] = !!options[prop];
        }
    };

    const toInteger = (prop) => {
        if (options[prop]) {
            options[prop] = +options[prop];
        }
    };

    const propsToBoolean = [
        'landscape',
        'preferCSSPageSize'
    ];

    const propsToInteger = [
        'scale'
    ];

    propsToBoolean.forEach(p=>toBoolean(p));
    propsToInteger.forEach(p=>toInteger(p));

    return options;

}

