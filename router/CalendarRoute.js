const router1=(app)=>{
    const event= require('../controller/Calendar');

    app.post('/add_event',async(req,res)=>{
        console.log(req.body)
        var result=await event.create(req,res);
        res.send(result);
    });
 
    app.post('/event_list',async (req,res) =>{
        var result=await event.eventlist(req,res);
        res.send(result);
    })
    app.post('/add_event_to_calender',async (req,res) =>{
        console.log(req.body)
        var result=await event.addeventlist(req,res);
        res.send(result);
    })
    app.post('/event_calender',async (req,res) =>{
        var result=await event.mycalender (req,res);
        res.send(result);
    })
    app.post('/search',async (req,res) =>{
        var result=await event.search (req,res);
        res.send(result);
    })

}


module.exports=router1;