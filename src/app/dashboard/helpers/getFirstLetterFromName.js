function getCapitalizedFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return ''; // Handle empty strings or non-string inputs
    }

    return str.charAt(0).toUpperCase();
}

export { getCapitalizedFirstLetter };