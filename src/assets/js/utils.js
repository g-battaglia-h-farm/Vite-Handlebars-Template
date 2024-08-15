function getQueryParameterWithDefault(name, default_value) {
    return (
        decodeURIComponent(
            (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ''])[1].replace(
                /\+/g,
                '%20',
            ),
        ) || default_value
    );
}

export { getQueryParameterWithDefault };
