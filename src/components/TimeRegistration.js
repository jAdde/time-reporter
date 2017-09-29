import React, {Component} from 'react';
import DropdownInput from './DropdownInput';
import TimeTable from './TimeTable';
import * as _ from 'underscore';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TimeRegistration extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            input: null,
            startTimes: null,
            endTimes: null,
            weekNum: moment().week(),
            startTime: null,
            endTime: null
        };
        //this.fetchData = this.fetchData.bind(this);
        this.sortTimes = this.sortTimes.bind(this);
        this.getWeekNum = this.getWeekNum.bind(this);
        this.setStartTime = this.setStartTime.bind(this);
        this.setEndTime = this.setEndTime.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.temptest = this.temptest.bind(this);
    }

    componentDidMount() {
        //let data = this.fetchData();
        setTimeout(() => {
            //this.setState({input: data});
            this.sortTimes();
        }, 500);
    }

    handleChange(date) {
        date = date === null ? this.state.startDate : date;
        this.setState({
            startDate: date,
            weekNum: date.week()
        });
    }

    setStartTime(time) {
        this.setState({startTime: time});
    }

    setEndTime(time) {
        this.setState({endTime: time});
    }

    static isWeekday(date) {
        const day = date.day();
        return day !== 0 && day !== 6
    }

    fetchData() {
        let list = [];
        fetch("http://localhost:8000/getTimes", {
            headers: {'Content-type': 'application/json'},
        })
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson.items.forEach((item) => {
                    list.push(item);
                });
            });
        return list
    };

    temptest(){
        let l = this.fetchData();
        console.log(l);
    }

    getWeekNum() {
        let dateWeek = this.state.startDate;
        dateWeek.locale('en');
        return dateWeek.week();
    }

    sortTimes() {
        let startTimes;
        let endTimes;
        let list = _.clone([{
            "startTimes": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00"]
        }, {
            "endTimes": ["15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30"]
        }]);
        startTimes = list[0].startTimes;
        endTimes = list[1].endTimes;
        this.setState({startTimes: startTimes, endTimes: endTimes});
    }

    render() {
        return (
            <div className="container col-sm-9">
                <div className="row">
                    <div className="col-sm-4 col-xs-4 col-lg-4">
                        <DatePicker
                            dateFormat="YYYY-MM-DD"
                            selected={this.state.startDate}
                            onChange={this.handleChange.bind(this)}
                            filterDate={TimeRegistration.isWeekday}
                            locale="en-gb"
                            showWeekNumbers
                        />
                    </div>
                    <div className="row col-xs-10" style={{"marginTop": "10px"}}/>
                    <DropdownInput input={this.state.startTimes} onChange={this.setStartTime}/>
                    <DropdownInput input={this.state.endTimes} onChange={this.setEndTime}/>
                </div>
                <div className="row" style={{"marginTop": "15px"}}/>
                <div className="clearfix">
                    <TimeTable weekNum={this.state.weekNum}
                               onChange={this.getWeekNum}
                    />
                </div>

                <input type="button" onClick={this.temptest} />
            </div>
        );
    }
}
export default TimeRegistration;
