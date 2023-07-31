# fomautils

**`fomautils`** is a collection of essential utility functions for strings, numbers, arrays, and more. These functions are designed to streamline development tasks, enhance code readability, and boost your productivity.

## Installation

Using npm:
```
npm install fomautils
```

## Usage

```javascript
import {
  capitalizeFirstLetter,
  mergeArrays,
  removeDuplicatesFromArray,
  generateRandomString,
  // Add more functions here...
} from 'fomautils';
```

## Available Functions

| Function                  | Input                           | Type             | Return Type    | Description                                                                                                                                                                                                                                     |
|---------------------------|---------------------------------|------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| capitalizeFirstLetter     | inputString: string             | string           | string         | Capitalizes the first letter of a string.                                                                                                                                                                                                      |
| formatNumberWithCommas    | number: number                  | number           | string         | Formats a number with commas for improved readability.                                                                                                                                                                                         |
| generateRandomString      | length: number                  | number           | string         | Generates a random string of the specified length.                                                                                                                                                                                            |
| isPalindrome              | inputString: string             | string           | boolean        | Checks if a string is a palindrome (reads the same forwards and backwards).                                                                                                                                                                    |
| deepCloneObject           | obj: T                          | T                | T              | Deep clones an object to prevent reference sharing.                                                                                                                                                                                           |
| validateEmailAddress      | email: string                   | string           | boolean        | Validates if a given string is a valid email address.                                                                                                                                                                                          |
| removeDuplicatesFromArray | arr: T[]                        | T[]              | T[]            | Removes duplicates from an array and returns the unique values.                                                                                                                                                                               |
| toTitleCase               | inputString: string             | string           | string         | Converts a string to title case, capitalizing the first letter of each word.                                                                                                                                                                  |
| reverseString             | inputString: string             | string           | string         | Reverses the characters in a given string.                                                                                                                                                                                                    |
| truncateString            | inputString: string, maxLength: number | string, number   | string         | Truncates a string to a specified length and appends an ellipsis if needed.                                                                                                                                                                   |
| formatWalletAddress       | walletAddress: string           | string           | string         | Formats a wallet address for display by showing only the first and last three characters.                                                                                                                                                     |
| toCamelCase               | inputString: string             | string           | string         | Converts a string to camelCase (e.g., "hello_world" to "helloWorld").                                                                                                                                                                          |
| sumArrayElements          | arr: number[]                   | number[]         | number         | Calculates the sum of all elements in an array of numbers.                                                                                                                                                                                    |
| replaceAllOccurrences     | inputString: string, searchValue: string, replaceValue: string | string, string, string | string         | Replaces all occurrences of a substring with another substring in a given string.                                                                                                                                                           |
| calculateAverage          | arr: number[]                   | number[]         | number         | Calculates the average of all elements in an array of numbers.                                                                                                                                                                                |
| generateRandomNumberArray | length: number, minValue: number, maxValue: number | number, number, number | number[] | Generates an array of random numbers within a specified range and length.                                                                                                                                                                   |
| mergeArrays               | ...arrays: T[][]                | T[]              | T[]            | Merges multiple arrays into a single array.                                                                                                                                                                                                   

## Contributing
Contributions to **`fomautils`** are welcome! If you find any issues or have additional functions to suggest, please feel free to submit a pull request.

## License
**`fomautils`** is released under the [ISC License](https://opensource.org/license/isc-license-txt/).


