const path = require("path"); // < 올드   == 뉴 > inport path from "path"
const autoprefixer = require("autoprefixer");
const extractCSS = require("extract-text-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();

const MODE = process.env.WEBPACK_ENV
const ENTRY_FILE = path.resolve(__dirname, "assets","js","main.js");
const OUTPUT_DIR = path.join(__dirname, "static");


const config = {
  entry: ["@babel/polyfill",ENTRY_FILE],
  mode: MODE,
  module:{
    rules:[
      {
        test:/\.(js)$/gi,
        use:[
          {
            loader:"babel-loader"
          }
        ]
      },
      {
        test:/(.scss)$/gi,
        use:extractCSS.extract([
          {
            loader:"css-loader"
          },
          {
            loader:"postcss-loader",
            options:{
              plugins(){
                return [autoprefixer({ browsers: "cover 99.5%"})];
              }
            }
          },
          {
            loader:"sass-loader"
          }
        ])
      }
    ]
  },
  output : {
    path:OUTPUT_DIR,
    filename:"[name].js"
  },
  plugins:[new extractCSS("styles.css")]
};

module.exports = config;
