
let fs = require('fs');
fs.readFile('index.txt', 'utf8', function(err, data){
    if(err) throw err;
    const contentArray = data.split(/(\r\n|\n|\r)/gm)
    parseArray(contentArray)
})

function parseArray(arr){
    arr.forEach(content => {
        const action = content.split(" ")
        console.log(action)
    })
}
// parseArray(contentArr)

// class Driver {
//     constructor(name){
//         this._name = name
//         this._trips = Trips
//     }
// }

// class Trips {
//     constructor(startTime, stopTime, distance){
//         this._start = startTime
//         this._stop = stopTime
//         this._distance = distance
//     }
//     get convertTime(){
//         const startHr = self.startTime.split(":")[0]
//         const startMin = self.startTime.split(":")[1]
//         const stopHr = self.stopTime.split(":")[0]
//         const stopMin = self.stopTime.split(":")[1]
//         const totalTime = ((stopHr - startHr) * 60) + (stopMin - startMin)
//         return totalTime
//     }
// }

/*
Expected Output
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
*/