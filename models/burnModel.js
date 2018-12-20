var burnScheme = new Schema({
    pname: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
})

module.exports = burnScheme;