let fs = require('fs');
fs.readFile('index.txt', 'utf8', function(err, data){
    if(err) throw err;
    const contentArray = data.split(/(\r\n|\n|\r)/gm)
    parseArray(contentArray)
})

function parseArray(arr){
    let newObj = {}
    arr.forEach(content => {
        const action = content.split(" ")
        if(action[0] === 'Driver'){
            newObj[action[1]] = []
        } else if(action[0] === 'Trip'){
            // calculate time
            const startTime = action[2]
            const stopTime = action[3]
            const startHr = startTime.split(":")[0]
            const startMin = startTime.split(":")[1]
            const stopHr = stopTime.split(":")[0]
            const stopMin = stopTime.split(":")[1]
            const minutes = ((stopHr - startHr) * 60) + (stopMin - startMin)

            newObj[action[1]].push([minutes, action[4]])
        }
    })

    let entries = Object.entries(newObj)
    for(let [name, logs] of entries){
        if(logs.length > 1){
            let totalMiles = 0
            let totalTime = 0
            logs.forEach(timeDist => {
                totalTime += timeDist[0]
                totalMiles += parseFloat(timeDist[1])
            })
            logs = [totalTime, Math.round(totalMiles)]
        } else if(logs.length === 0) {
            logs = []
        } else {
            logs = logs[0]
        }
        console.log(name, logs)
    }
}

/*
Expected Output
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
*/