module.exports = {
  presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime : "automatic" }]
    ],
    // babel preset is helping that react code to converted into normal html
};
