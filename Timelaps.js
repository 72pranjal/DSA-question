// question 07:05:45PM to convert in 19:05:45
function convert24HoursFormate(time) {
    let hour = parseInt(time.slice(0,2))
    const constantTime = time.slice(2,8)
    const isAMOrPM = time.slice(8,10)
    if(isAMOrPM === 'AM') {
        if(hour === 12) {
            hour = '00'
        } else if(hour < 10) {
            hour = '0'+hour
        }
    } else {
        if(hour !== 12) {
            hour += 12
        }
    }
    return hour+constantTime
}

const convertedtime = convert24HoursFormate('07:05:45PM')
console.log(convertedtime)
