babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline
# babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline
# This command might seem intimidating, but is similar to passing multiple arguments to a function. Let's break it down:

# . tells Babel to transpile all javascript files in the current working directory
# --out-dir tells Babel to put the transpiled files into the compiled/ folder
# --presets tells Babel what kind of transformations to make. es2015 transpiles ES6 syntax, and react transpiles JSX. Each preset is installed as it's own package, with the naming convention babel-preset-*.
# --ignore tells Babel to not transpile any files in the the node_modules and compiled directories
# --source-maps tells Babel to include source maps with our transpiled code, making debugging much easier. The --presets option tells Babel what kind of transformations to make. es2015 transpiles ES6 syntax, and react transpiles JSX. Each preset is installed as its own package, with the naming convention babel-preset-*.
# Inside of index.html and SpecRunner.html, the compiled files are loaded in the script tags. After making any changes to the files in the src/ directory, you must transpile them to see the changes reflected when you refresh your html files.