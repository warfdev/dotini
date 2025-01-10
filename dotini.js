const fs = require('fs');
const path = require('path');

/**
 * Parse a .ini file and convert it into an object
 * @param {string} content - The .ini file content
 * @returns {object} Parsed object
 */
function parse(content) {
    const result = {};
    const lines = content.split(/\r?\n/);

    lines.forEach((line) => {
        line = line.trim();
        if (!line || line.startsWith(';') || line.startsWith('#')) {
            // Ignore comments and empty lines
            return;
        }

        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            result[key] = value;
        }
    });

    return result;
}

/**
 * Load .ini file and store values in process.ini
 * @param {object} options - Options for loading .ini file
 * @returns {object} Loaded configuration
 */
function config(options = {}) {
    const filePath = options.path || path.resolve(process.cwd(), '.ini'); // Default to `.ini`
    const encoding = options.encoding || 'utf8';

    try {
        const content = fs.readFileSync(filePath, { encoding });
        const parsed = parse(content);

        // Assign parsed values to process.ini
        process.ini = process.ini || {};
        Object.assign(process.ini, parsed);

        return { parsed };
    } catch (err) {
        return { error: err };
    }
}

module.exports = { config, parse };