// Capitalize the first letter of a string
export const capitalizeFirstLetter = (inputString: string): string => {
    if (inputString.length === 0) return inputString;
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

// Format a number with commas for improved readability
export const formatNumberWithCommas = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Generate a random string of the specified length
export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

// Check if a string is a palindrome (reads the same forwards and backwards)
export const isPalindrome = (inputString: string): boolean => {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
};

// Deep clone an object to prevent reference sharing
export const deepCloneObject = <T>(obj: T): T => {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepCloneObject(item)) as any;
    }

    const clonedObj = {} as T;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepCloneObject(obj[key]);
        }
    }

    return clonedObj;
};

// Validate if a given string is a valid email address
export const validateEmailAddress = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
};

// Remove duplicates from an array and return the unique values
export const removeDuplicatesFromArray = <T>(arr: T[]): T[] => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Convert a string to title case, capitalizing the first letter of each word
export const toTitleCase = (inputString: string): string => {
    return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Reverse the characters in a given string
export const reverseString = (inputString: string): string => {
    return inputString.split("").reverse().join("");
};

// Truncate a string to a specified length and append an ellipsis if needed
export const truncateString = (inputString: string, maxLength: number): string => {
    if (inputString.length <= maxLength) {
        return inputString;
    }

    return inputString.slice(0, maxLength) + "...";
};

// Format a wallet address for display by showing only the first and last three characters
export const formatWalletAddress = (walletAddress: string): string => {
    const firstThreeChars = walletAddress.slice(0, 3);
    const lastThreeChars = walletAddress.slice(-3);
    return `${firstThreeChars}...${lastThreeChars}`;
};

// Convert a string to camelCase (e.g., "hello_world" to "helloWorld")
export const toCamelCase = (inputString: string): string => {
    return inputString
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase()))
        .replace(/\s+/g, '');
};

// Calculate the sum of all elements in an array of numbers
export const sumArrayElements = (arr: number[]): number => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// Replace all occurrences of a substring with another substring in a given string
export const replaceAllOccurrences = (inputString: string, searchValue: string, replaceValue: string): string => {
    const regex = new RegExp(searchValue, 'g');
    return inputString.replace(regex, replaceValue);
};

// Calculate the average of all elements in an array of numbers
export const calculateAverage = (arr: number[]): number => {
    if (arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
};

// Generate an array of random numbers within a specified range and length
export const generateRandomNumberArray = (length: number, minValue: number, maxValue: number): number[] => {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        randomArray.push(randomNumber);
    }
    return randomArray;
};

// Merge multiple arrays into a single array
export const mergeArrays = <T>(...arrays: T[][]): T[] => {
    return [].concat(...arrays);
};
