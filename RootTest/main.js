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
        // parsing input data into an object for easier use.
        if(action[0] === 'Driver'){
            newObj[action[1]] = []
        } else if(action[0] === 'Trip'){
            // calculate time function, action[2] being the start time, action[3] being the end/stop time.
            // action[4] is the number of miles.
            newObj[action[1]].push([calculateTime(action[2], action[3]), action[4]])
        }
    })
    manipulatingObj(newObj)
}

// calculating total minutes from the inputs of the parsed content
function calculateTime(startTime, stopTime){
    const startHr = startTime.split(":")[0]
    const startMin = startTime.split(":")[1]
    const stopHr = stopTime.split(":")[0]
    const stopMin = stopTime.split(":")[1]
    const minutes = ((stopHr - startHr) * 60) + (stopMin - startMin)

    return minutes
}

// manipulating the object to pinpoint our calculations (since Dan had traveled more than once, we have to put that data
// together in order to optimize our object))
function manipulatingObj(obj){
    // split into names and logs for simplicity.
    let entries = Object.entries(obj)
    for(let [name, logs] of entries){
        // calculating total time vs total miles for avging out mph. also changing strings into int.
        // this is to make sure dan's logs are concat'd and also to manipulte all the other strings into Int or float.
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
            logs[1] = parseInt(logs[1])
        }
        // get avg mph
        // total time = log[0]
        // total distance = log[1]
        // total distance / (total time/60) for avg mph. or 0.
        let avgMph = (logs[1] / (logs[0]/60)) || 0
        logs.push(Math.round(avgMph))
        obj[name] = logs
    }
    finalOutput(obj)
}

// final output
function finalOutput(changedObj){
    let entries = Object.entries(changedObj)
    for(let [name, logs] of entries){
        let miles = logs[1] || 0
        let mph = logs[2] || 0
        if(logs.length === 1 ){ // for kumi, we input a 0 as a placeholder for the miles. so logs.length is not 0, but 1.
            console.log(`${name}: ${miles} miles`)
        } else {
            console.log(`${name}: ${miles} miles @ ${mph} mph`)
        }
    }
}


/*
Initial Input:
Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0

Expected Output:
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
*/