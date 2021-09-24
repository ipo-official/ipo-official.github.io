// Ops: Add, Sub, Mul, Div, Neg, Num
const AstKind = {
	Add: '+',
	Sub: '+-',
	Mul: '*',
	Div: '/',
	Neg: '-',
	Var: 'x',
}

class Ast {
	constructor(op, left, right) {
		this.op = op
		this.left = left
		this.right = right
	}
}