# Parser

## Testing parser

syntax-cli --grammar parser/eva-grammar.bnf --mode LALR1 --parse "(begin (var x 10) (var y 20) (+ x y))"

## Generate parser

syntax-cli --grammar parser/eva-grammar.bnf --mode LALR1 --output parser/evaParser.js
