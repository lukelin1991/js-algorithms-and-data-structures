function collectOddValues(arr){
    let result = []
    // reason for helper method is.. if we tried to loop a recursive function... the result will be reset each time
    // but with a helper method recursion. it'll update and adjust instead.
    function helper(helperInput){
        if(helperInput.length === 0){ // base case.
            return
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) // shrink and make sub-array
    }

    helper(arr)

    return result
}