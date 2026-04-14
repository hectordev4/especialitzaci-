"use strict"

function dateAndHour(){
    const dateHour = new Date();
    console.log(dateHour.toLocaleString());
    return dateHour.toLocaleString();
}

module.exports = {dateAndHour};