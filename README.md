README.md

# Dotini

Dotini is a lightweight Node.js module for loading `.ini` configuration files into `process.ini`. It simplifies the process of managing environment configurations using `.ini` files.

## Features

- Automatically loads `.ini` files into `process.ini`.
- Default file name is `.ini`.
- Supports comments (`;` and `#`).
- Easy to use and configure.

## Installation

You can install Dotini via npm (if published) or clone it into your project:

```bash
npm install dotini
```

Alternatively, download the dotini.js file and include it directly in your project.

Usage

Step 1: Create an `.ini` File

Create an .ini file in your project root and add the following content:

```ini
; This is a comment
NODE_ENV=production
PORT=8080
DB_HOST=127.0.0.1
DB_USER=admin
DB_PASS=securepassword
```

Step 2: Load the .ini File

```js
require("dotini").config(); // Load the .ini file

// Access values via process.ini
console.log(process.ini);

// Example access
console.log("NODE_ENV:", process.ini.NODE_ENV);
console.log("PORT:", process.ini.PORT);
console.log("DB_USER:", process.ini.DB_USER);
```

Step 3: Run Your Script

Ensure the .ini file and dotini module are in the same directory, then run your script:
```bash
node your-script.js
```

**API**

`config(options)`

Loads an .ini file and populates process.ini with its content.

- Parameters

    - options (Optional): An object with the following fields:

    - path: Path to the .ini file. Default: `./.ini`

    - encoding: File encoding. Default: `utf8`



**Returns**

On success: `{ parsed: object }`

On error: `{ error: Error }`


**Example**:
```js
const result = require("dotini").config({ path: "./config/settings.ini" });

if (result.error) {
    console.error("Error:", result.error);
} else {
    console.log("Loaded values:", result.parsed);
}
```

Testing

You can create a test.js file to test the module:

```js
require("./dotini").config();

console.log("Test:", process.ini);
```

Then run:

```bash
npm test
```

License

This project is licensed under the MIT License.


---

Author

****Warfdev****

[GitHub]() • [Email](kipcakverdl2@gmail.com)

---
