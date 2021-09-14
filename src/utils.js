export function rightPad(array, expectedLength, placeholder) {
    const result = [ ...array ];

    for (let i = array.length; i < expectedLength; i++) {
        result.push(placeholder);
    }

    return result;
}