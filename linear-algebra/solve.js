function solve() {
	src = eqInput.value
	pos = 0

	let left = parseExpr()
	next()
	goodbyeWhitespace()
	let right = parseExpr()

	console.log(evalAst(left))
	console.log(evalAst(right))
}

function evalAst(ast) {
	if (ast.op == AstKind.Var)
		return NaN

	let left = ast.left instanceof Ast ? evalAst(ast.left) : ast.left
	let right = ast.right instanceof Ast ? evalAst(ast.right) : ast.right

	if ((left == NaN || right == NaN) && left != right)
		return NaN

	switch (ast.op) {
	case AstKind.Add:
		return left + right;
	case AstKind.Sub:
		return left - right;
	case AstKind.Mul:
		return left * right;
	case AstKind.Div:
		return left / right;
	case AstKind.Neg:
		return -left;
	}
}