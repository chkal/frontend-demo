const path = require( "path" );

module.exports = {

  // Entry into the code
  entry: "./src/main/javascript/entry.tsx",

  // Output configuration
  output: {
    filename: "app.js",
    path: path.resolve( __dirname, "target/generated-web-resources/assets/" ),
  },

  // How to handle imports
  resolve: {
    extensions: [
      ".js", ".ts", ".tsx"
    ]
  },

  // rules for imports
  module: {
    rules: [

      // TypeScript compiler
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },

      // CSS files
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          }
        ]
      },

      // Assets
      {
        test: /\.(png|jpg|gif).*$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        }

      }
    ]
  },

  // Development
  devServer: {
    publicPath: "/assets/",
    proxy: {
      "*": {
        target: "http://localhost:8080"
      }
    }
  }

};