// datacheck.js

export const isValidDateFormat = (dates) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return dates.match(regex) !== null;
};

export const isValidPeriodFormat = (period) => {
    const dates = period.split(", ");
    return dates.length >= 1 && dates.every(isValidDateFormat);
};

export const isValidRunTimeFormat = (runTime) => {
    const regex = /^\d+$/;
    return runTime.match(regex) !== null;
};

export const isValidCapacityFormat = (capacity) => {
    const regex = /^\d+$/;
    return capacity.match(regex) !== null;
};
