const events = require('../models').CalendarEvents

const event = () => {


}
event.create = async (req, res) => {
    let val1 = `${req.body.date} ${req.body.startTime}`
    let val2 = `${req.body.date} ${req.body.endTime}`
    console.log("add calendar vlaues",val1,val2);
    let response = await events.create({
        Event: req.body.eventname,
        Date:req.body.date,
        StartTime: val1,
        EndTime: val2,
        Flag: 0,
    })
    return response;
}
event.eventlist = async (req, res) => {
    let response = await events.findAll({
        
    })
    return response;

}
event.addeventlist = async (req, res) => {
    let response = await events.update(
        { Flag: 1 },
        {
            where:
            {
                id: req.body.eventId
            }
        }
    )
    return response;
}
event.mycalender = async (req, res) => {
    console.log("this is calendar")
    let response = await events.findAll({
        attributes:['id',['Event','title'],['StartTime','start'],['EndTime','end']],
        where: {
            Flag: 1
        }
    })

    return response;
}

event.search = async (req, res) => {
    let response = await events.findAll({
        
        where: {
            Event: req.body.searchvalue
        }
    })

    return response;
}



module.exports = event;