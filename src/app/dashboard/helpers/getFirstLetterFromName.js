function getCapitalizedFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }

    return str.charAt(0).toUpperCase();
}

export { getCapitalizedFirstLetter };