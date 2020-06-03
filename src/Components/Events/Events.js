import React, { Component } from 'react'
import './event.css'
import moment from 'moment'
import Container from '../Container/Container'

class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             eventname:'',
             date:'',
             dates:'',
             startTime:'',
             endTime:'',
             events:[],
             eventlist:[],
             searchvalue:'',
             searchlist:[],
             searchstatus:false,
        }
    }
    show=()=>{
        fetch('http://localhost:3050/event_list',{
            method:'post',
            body:JSON.stringify({
                // signup_name:this.state.authdata.user.name,
            }),
            headers:{'Content-Type':'application/json'},
          })
          
          .then(res=> res.json())
          .then(data=>this.setState({
              eventlist:data
          }))
    }
    componentDidMount = async()=>{
        await this.show()
    }
    handleName=(e)=> {
        this.setState({ eventname: e.target.value});
      }
    handleDate=(e)=> {
        this.setState({ date: moment(e.target.value).format("MMM DD YYYY")});
        this.setState({dates:e.target.value})
      }
    handleStartTime=(e)=> {
        this.setState({ startTime: e.target.value});
      }
    handleEndTime=(e)=> {
        this.setState({ endTime: e.target.value});
      }
    handleSave=(e)=> {
        if(this.state.eventname === '' && this.state.dates==='' &&this.state.startTime ===''&&this.state.endTime===''){
            alert("please fill the details")
        }
        else{
      fetch('http://localhost:3050/add_event',{
        method:'post',
        body:JSON.stringify({
          eventname:this.state.eventname,
          date:this.state.dates,
          startTime:this.state.startTime,
          endTime:this.state.endTime,
        }),
        headers:{'Content-Type':'application/json'},
      })
      
      .then(res=> res.json())
      .then(data=>this.setState({
          events:data
      })).then(()=>{
          this.show();
      });
    }
      }
    handleSearch = (e) => {
        this.setState({ searchvalue: e.target.value})
    }
    Search=async() =>{
        this.setState({
            searchstatus:!this.state.searchstatus
        })
           await fetch('http://localhost:3050/search',{
              method:'post',
              body:JSON.stringify({
                searchvalue:this.state.searchvalue
              }),
              headers:{'Content-Type':'application/json'},
            })
            
            .then(res=> res.json())
            .then(data=>this.setState({
                searchlist:data
            }))
    }
    Keypress = (e) => {
        if (e.which === 13) {
            this.Search();
          
        }
    }
render() {
  
        return (
            <div>
                <div className="header">
                    <div className="icon-bar">
                        <a href="/"><i className="fa fa-id-card-o"></i></a>
                        <a className="table" href="/"><i className="fa fa-th"></i></a> 
                        <input type="search" className="search" onChange={e => this.handleSearch(e)}  onKeyPress={e => this.Keypress(e)}/>
                        <i id="se" className="fa fa-search" onClick={e => this.Search(e) }></i></div>
                    <div className="navbar-logo">
                        <div className="logo"> <h1><i  className="fa fa-magic"></i>Spark</h1></div>
                    </div>
                    <div  className="icon-bar1">
                        <i className="fa fa-plus" title="ADD EVENTS HERE" data-toggle="modal" data-target="#myModal"></i>
                        <a href="/calender" title="CALENDAR"><i className="fa fa-calendar-check-o"></i></a> 
                        <a  className="bell" href="/"><i  className="fa  fa-bell"></i></a> 
                        <a  className="user" href="/"><i className="fa  fa-user" ></i></a> 
                    </div>
                </div>
                <div>
                </div>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add Events Here</h4>
                                </div>
                                <div className="modal-body">
                                   <form>
                                        <label> Event Name</label> <br/>
                                       <input  type="text" placeholder=" Enter Event Name"  onChange={e => this.handleName(e) } required/> <br/> <br/>
                                       <label>Event Date</label> <br/>
                                       <input  type="date"  onChange={e => this.handleDate(e) }  required/><br/> <br/>
                                       <label>Event Starting Time</label> <br/>
                                       <input type="time"    onChange={e => this.handleStartTime(e) }  required/> <br/> <br/>
                                       <label>Event Ending Time</label> <br/>
                                       <input  type="time"  onChange={e => this.handleEndTime(e) } required/> <br/> <br/>
                                        <button id="save_btn" data-dismiss="modal"  onClick={e => this.handleSave(e) }>Save</button>
                                   </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="close_button" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div>{ this.state.searchstatus ?
                        <div>
                         {
                            this.state.searchlist.length>0?<h3>List of Events</h3>: <></>
                        }
        
                        <div className="events">
                        {
                             this.state.searchlist.length>0?
                                this.state.searchlist.map(element=>(
                            <Container  key= {element.id} eventname={element.Event} date={ moment(element.Date).format("MMM DD YYYY")}  startTime={ moment(element.StartTime).format('LT') } endTime= {moment(element.EndTime).format('LT')} eventId ={element.id} /> 
                                ))  : 
                            
                                <div className="notification"><h3> Yor event search list is empty </h3></div>
                                
                            
                        }</div>
                        </div>
                        :
                        <div>
                            {
                                this.state.eventlist.length>0?<h3>List of Events</h3>: <></>
                            }
            
                        <div className="events">
                        {
                            
                             this.state.eventlist.length>0?
                                this.state.eventlist.map(element=>(
                            <Container  key= {element.id} eventname={element.Event} date={ moment(element.Date).format("MMM DD YYYY")}  startTime={ moment(element.StartTime).format('LT') } endTime= {moment(element.EndTime).format('LT')} eventId ={element.id} /> 
                                ))  : 
                            
                                <div className="notification"><h3> Yor event list is empty </h3></div>
                                
                            
                        }</div>
                        </div>
                    }
                        </div>
                    </div>
            </div>
        )
    }
}

export default Events
