/*
*/

function hasSingleCycle(array){
    let visited = 0
	let idx = 0
	while(visited < array.length){
		if(visited > 0 && idx === 0) return false
		visited++
		idx = getNextIdx(idx, array)
	}
	return idx === 0
}

function getNextIdx(idx, array){
	let jump = array[idx]
	let nextIdx = (idx + jump) % array.length
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}