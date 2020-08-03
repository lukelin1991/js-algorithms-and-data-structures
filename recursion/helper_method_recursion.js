function outer(input){
    let outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)

    return outerScopedVariable
}