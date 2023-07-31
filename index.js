"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArrays = exports.generateRandomNumberArray = exports.calculateAverage = exports.replaceAllOccurrences = exports.sumArrayElements = exports.toCamelCase = exports.formatWalletAddress = exports.truncateString = exports.reverseString = exports.toTitleCase = exports.removeDuplicatesFromArray = exports.validateEmailAddress = exports.deepCloneObject = exports.isPalindrome = exports.generateRandomString = exports.formatNumberWithCommas = exports.capitalizeFirstLetter = void 0;
// Capitalize the first letter of a string
const capitalizeFirstLetter = (inputString) => {
    if (inputString.length === 0)
        return inputString;
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
// Format a number with commas for improved readability
const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.formatNumberWithCommas = formatNumberWithCommas;
// Generate a random string of the specified length
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};
exports.generateRandomString = generateRandomString;
// Check if a string is a palindrome (reads the same forwards and backwards)
const isPalindrome = (inputString) => {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
};
exports.isPalindrome = isPalindrome;
// Deep clone an object to prevent reference sharing
const deepCloneObject = (obj) => {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => (0, exports.deepCloneObject)(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = (0, exports.deepCloneObject)(obj[key]);
        }
    }
    return clonedObj;
};
exports.deepCloneObject = deepCloneObject;
// Validate if a given string is a valid email address
const validateEmailAddress = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
};
exports.validateEmailAddress = validateEmailAddress;
// Remove duplicates from an array and return the unique values
const removeDuplicatesFromArray = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
// Convert a string to title case, capitalizing the first letter of each word
const toTitleCase = (inputString) => {
    return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
};
exports.toTitleCase = toTitleCase;
// Reverse the characters in a given string
const reverseString = (inputString) => {
    return inputString.split("").reverse().join("");
};
exports.reverseString = reverseString;
// Truncate a string to a specified length and append an ellipsis if needed
const truncateString = (inputString, maxLength) => {
    if (inputString.length <= maxLength) {
        return inputString;
    }
    return inputString.slice(0, maxLength) + "...";
};
exports.truncateString = truncateString;
// Format a wallet address for display by showing only the first and last three characters
const formatWalletAddress = (walletAddress) => {
    const firstThreeChars = walletAddress.slice(0, 3);
    const lastThreeChars = walletAddress.slice(-3);
    return `${firstThreeChars}...${lastThreeChars}`;
};
exports.formatWalletAddress = formatWalletAddress;
// Convert a string to camelCase (e.g., "hello_world" to "helloWorld")
const toCamelCase = (inputString) => {
    return inputString
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase()))
        .replace(/\s+/g, '');
};
exports.toCamelCase = toCamelCase;
// Calculate the sum of all elements in an array of numbers
const sumArrayElements = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
exports.sumArrayElements = sumArrayElements;
// Replace all occurrences of a substring with another substring in a given string
const replaceAllOccurrences = (inputString, searchValue, replaceValue) => {
    const regex = new RegExp(searchValue, 'g');
    return inputString.replace(regex, replaceValue);
};
exports.replaceAllOccurrences = replaceAllOccurrences;
// Calculate the average of all elements in an array of numbers
const calculateAverage = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
};
exports.calculateAverage = calculateAverage;
// Generate an array of random numbers within a specified range and length
const generateRandomNumberArray = (length, minValue, maxValue) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        randomArray.push(randomNumber);
    }
    return randomArray;
};
exports.generateRandomNumberArray = generateRandomNumberArray;
// Merge multiple arrays into a single array
const mergeArrays = (...arrays) => {
    return [].concat(...arrays);
};
exports.mergeArrays = mergeArrays;
