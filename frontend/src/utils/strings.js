export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const splitNameFromStr = (str, names) => {
    const name = names.find((name) => str.includes(name));

    if (!name) {
        return {
            before: str,
            name: '',
            after: '',
        };
    }

    const index = str.indexOf(name);

    return {
        before: str.slice(0, index),
        name: str.slice(index, index + name.length),
        after: str.slice(index + name.length),
    };
};
