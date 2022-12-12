const { lexer } = require('./lexer');
const { parser } = require('./parser');
const { evaluate } = require('./evaluate');



exports.calculate = function (input) {
    try {
        let out
        out = lexer(input);
        out = parser(out);
        out = evaluate(out);
        return out;
    } catch (e) {
        return e;
    }
};

