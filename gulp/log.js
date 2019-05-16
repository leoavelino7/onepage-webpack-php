const { task } = require("gulp"),
    fs = require("fs");

task("createLog", async () => {
    let date = new Date();

    let day = date.getDate(),
        day_week    = date.getDay(),
        month       = `00${date.getMonth()+1}`.slice(-2),
        year        = date.getFullYear(),
        hour        = `00${date.getHours()}`.slice(-2),
        minutes     = `00${date.getMinutes()}`.slice(2),
        seconds     = `00${date.getSeconds()}`.slice(2);

    let days_week = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");

    let newDate = `${days_week[day_week]} - ${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
    let message = `\nBuild in ${newDate}`;
    fs.appendFileSync("my-site.log", message, error => {
        if(error){
            console.error(err);
        }
    })
    return true;
})