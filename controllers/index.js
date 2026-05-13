const firstFunction = (req, res) => {
    res.json('Hello, Zay');
}
const secondFunction = (req, res) => {
    res.json('Hello, World! This is the second function');
}


module.exports = {
    firstFunction,
    secondFunction
}