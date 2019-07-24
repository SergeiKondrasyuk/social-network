export const requiredFieldValidator = (value) => {
    return value ? undefined : 'Field is required';
};

export const maxLengthValidator = (maxValue) => (value) => {
    if (value && value.length > maxValue) return `Maximum lenght is ${maxValue} symbols`;
    return undefined
};

export const minLengthValidator = (minValue) => (value) => {
    if (value && value.length < minValue) return `Minimum lenght is ${minValue} symbols`;
    return undefined
};

let shortPasswordWarning = (value) => {
    if (value && value.length <= 3) return 'Too short password';
    return undefined
};