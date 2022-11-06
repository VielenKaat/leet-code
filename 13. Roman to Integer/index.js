/**
 * @param {string} s
 * @return {number}
 */

const numerals = ["I", "V", "X", "L", "C", "D", "M"]
const value = [1, 5, 10, 50, 100, 500, 1000]
let index = numerals.indexOf("V")

console.log(index)

var romanToInt = function (s) {
	let chars = s.split("")

	const charsIndex = chars.map((x) => numerals.indexOf(x))

	console.log(chars)
	console.log(charsIndex)

	let total = 0
	for (let i = 0; i < charsIndex.length; i++) {
		let curr, next
		curr = charsIndex[i]
		next = charsIndex[i + 1]

		// debug code
		console.log(`curr: ${curr}, next: ${next}, i: ${i}`)

		if (curr < next) {
			total += value[next] - value[curr]
			i++
		} else {
			total += value[curr]
		}
	}

	console.log(total)
}

romanToInt("LVIII")
