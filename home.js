var breakFlag = false;
var activeMin = 0;
var activeSec = 10;
var totalActiveTime = activeMin*60 + activeSec*1;
activeMin = activeMin < 10 ? "0" + activeMin : activeMin;
activeSec = activeSec < 10 ? "0" + activeSec : activeSec;
var activeTime = activeMin + ":" + activeSec;
var clock;
var interval;
var breakMin = 0;
var breakSec = 15;
var totalBreakTime = breakMin*60 + breakSec;
breakMin = breakMin < 10 ? "0" + breakMin : breakMin;
breakSec = breakSec < 10 ? "0" + breakSec : breakSec;
var breakTime = breakMin + ":" + breakSec;
var mainTime = activeTime;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var flag = 1;
    $('body').css("background-color", "green");

    clock = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
            flag++;
            if (flag % 2 == 1){
            $('body').css("background-color", "green");
            timer = totalActiveTime;
            }else{
            $('body').css("background-color", "red");
            timer = totalBreakTime;
            }
            }
            }, 1000);//end of set interval
    if (breakFlag) {
        return;
    }
}//end of startTimer


$(document).ready(function(){

        $("#mainTime").html(mainTime);

        $("#aDown").mousedown(function(){
                clearInterval(clock);
                $('body').css("background-color", "rgb(40,110,160)");
                interval = setInterval(function(){
                        if (totalActiveTime <= 0){
                        totalActiveTime += 1;
                        }
                        totalActiveTime = totalActiveTime*1 - 1;
                        activeMin = Math.floor(totalActiveTime/60);
                        activeSec = totalActiveTime % 60;
                        activeMin = activeMin < 10 ? "0" + activeMin : activeMin;
                        activeSec = activeSec < 10 ? "0" + activeSec : activeSec;
                        activeTime = activeMin + ":" + activeSec;
                        $("#active1").html(activeTime);
                        mainTime = activeTime;
                        $("#mainTime").html(mainTime);
                        },30);
                });
        $('#aDown').mouseup(function(){
                clearInterval(interval);
                });
        $('#aDown').mouseleave(function(){
                clearInterval(interval);
                });

        $("#aUp").mousedown(function(){
                clearInterval(clock);
                $('body').css("background-color", "rgb(40,110,160)");
                interval = setInterval(function(){
                        totalActiveTime = totalActiveTime*1 + 1;
                        activeMin = Math.floor(totalActiveTime/60);
                        activeSec = totalActiveTime % 60;
                        activeMin = activeMin < 10 ? "0" + activeMin : activeMin;
                        activeSec = activeSec < 10 ? "0" + activeSec : activeSec;
                        activeTime = activeMin + ":" + activeSec;
                        $("#active1").html(activeTime);
                        mainTime = activeTime;
                        $("#mainTime").html(mainTime);
                        },30);
                });
        $('#aUp').mouseup(function(){
                clearInterval(interval);
                });
        $('#aUp').mouseleave(function(){
                clearInterval(interval);
                });

        $("#active1").html(activeTime);

        $("#bDown").mousedown(function(){
                clearInterval(clock);
                $('body').css("background-color", "rgb(40,110,160)");
                interval = setInterval(function(){
                        if (totalBreakTime <= 0){
                        totalBreakTime += 1;
                        }
                        totalBreakTime = totalBreakTime - 1;
                        breakMin = Math.floor(totalBreakTime/60);
                        breakSec = totalBreakTime % 60;
                        breakMin = breakMin < 10 ? "0" + breakMin : breakMin;
                        breakSec = breakSec < 10 ? "0" + breakSec : breakSec;
                        breakTime = breakMin + ":" + breakSec;
                        $("#break1").html(breakTime);
                        },30);
                });
        $('#bDown').mouseup(function(){
                clearInterval(interval);
                });
        $('#bDown').mouseleave(function(){
                clearInterval(interval);
                });

        $("#bUp").mousedown(function(){
                clearInterval(clock);
                $('body').css("background-color", "rgb(40,110,160)");
                interval = setInterval(function(){
                        totalBreakTime = totalBreakTime + 1;
                        breakMin = Math.floor(totalBreakTime/60);
                        breakSec = totalBreakTime % 60;
                        breakMin = breakMin < 10 ? "0" + breakMin : breakMin;
                        breakSec = breakSec < 10 ? "0" + breakSec : breakSec;
                        breakTime = breakMin + ":" + breakSec;
                        $("#break1").html(breakTime);
                        },30);
                });
        $('#bUp').mouseup(function(){
                clearInterval(interval);
                });
        $('#bUp').mouseleave(function(){
                clearInterval(interval);
                });

        $("#break1").html(breakTime);

        display = $("#mainTime");
        $('#start').click(function(){
                breakFlag = false;
                startTimer(totalActiveTime,display);
                })


});
