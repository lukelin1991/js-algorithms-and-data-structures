function stringSearch(str1, str2){
    let count = 0
    for(let i = 0; i < str1.length;i++){
        for(let j = 0; j < str2.length;j++){
            if(str2[j] !== str1[i+j]) break;
            if(j === str2.length -1) count++
        }
    }
    return count
}

stringSearch("lollipop lorie the lolling lol troll loled", "lol")