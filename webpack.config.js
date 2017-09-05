var path = require("path");
module.exports = {
    entry: {
        app: ["./src/index.tsx"]
    },
    output: {
        path: path.resolve(__dirname, "app"),
        publicPath: "/app/",
        filename: "app.js"
    },
    // Resolve the file extensions
    resolve: { extensions: [".js", ".jsx", ".scss", ".ts", ".tsx"] },
    // Module to define what libraries with the compiler
    module: {
        // Rules
        rules: [
            {
                // Target the sass files
                test: /\.scss$/,
                // Define the compilers to use
                // Order: sass-loader -> css-loader -> style-loader
                use: [
                    // Create style nodes from the CommonJS code
                    { loader: "style-loader" },
                    // Translate css to CommonJS
                    { loader: "css-loader" },
                    // Compile sass to css
                    { loader: "sass-loader" }
                ]
            },
            {
                // Target the typescript files
                test: /\.tsx?$/,
                // Exclude the node modules folder
                exclude: /node_modules/,
                // Define the compiler to use
                use: {
                    // Use the 'ts-loader' library
                    loader: "ts-loader",
                    // Options
                    options: {
                        // Use the 'babel-preset-es2015' library
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }
};