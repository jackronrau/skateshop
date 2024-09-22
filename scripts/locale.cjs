const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'locales');

// Read all subdirectories in the locales directory
const languages = fs.readdirSync(localesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

languages.forEach(lang => {
    const langDir = path.join(localesDir, lang);
    const files = fs.readdirSync(langDir).filter(file => file.endsWith('.json'));

    let mergedContent = {};

    files.forEach(file => {
        const filePath = path.join(langDir, file);
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const key = file.split('.')[0] + "";
        if (key in mergedContent) {
            throw new Error(`Duplicate key: ${key}`);
        }
        mergedContent = { ...mergedContent, [key]: content };
    });

    const outputPath = path.join(localesDir, `${lang}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(mergedContent, null, 2));

    console.log(`Merged ${files.length} files into ${outputPath}`);
});

console.log('Locale files merged successfully.');
