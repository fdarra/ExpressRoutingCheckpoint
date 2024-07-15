const checkdate = (req, res, next) => {
    const today= new Date()
    const day= today.getDay() /// day from 0 to 6
    const hours = today.getHours()
    if(day >=1 && day <= 5 && hours>=9 && hours<=11)
        //app will continue to the server
    next()
    else
    // the app will send a message to the client
res.send("Actualy the server not available")

}

module.exports = checkdate;