import React, { Component } from 'react'

export default class Timer extends Component
{


    constructor()
    {
         console.log('constructor');
        super();
        var aStartDateAndTime = new Date("2019/10/20 21:00:00").getTime();
        var timeToAdd = 14 * (1000 * 60 * 60 *24);
        var aNewDate = new Date();
        aNewDate.setTime(aStartDateAndTime + timeToAdd)
        console.log('start date and time: ' + aNewDate);
        this.state = {
            startDateAndTime: aNewDate.getTime(),
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

    }


    componentDidMount() {
        this.myInterval = setInterval(() => {

            var start = this.state.startDateAndTime;
            var now = new Date().getTime();
            console.log('Now: ' + now);
            // Find the distance between now and the count down date
            var distance = (this.state.startDateAndTime -  now);

            console.log('difference: ' + distance);
            // Time calculations for days, hours, minutes and seconds
            var startDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            var startHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var startMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var startSeconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.setState({start: start, days: startDays, hours: startHours, minutes: startMinutes, seconds: startSeconds } );
            console.log('days: ' + startDays);
            console.log('hours: ' + startHours);
            console.log('minutes: ' +startMinutes );
            console.log('seconds: ' + startSeconds);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render()
    {
        // const {days, hours, minutes, seconds} = this.state;
        return (
            <div>
                {
                    <h1>{this.state.days} Days {this.state.hours} Hours {this.state.minutes} Minutes {this.state.seconds} Seconds</h1>
                }
            </div>
        )
    }
}