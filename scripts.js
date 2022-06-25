// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    const takeOffButton = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abort = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');
    const rocket = document.getElementById('rocket');

    takeOffButton.addEventListener('click', event => {
        let ready = window.confirm('Confirm that the shuttle is ready for takeoff.');
            if (ready) {
                status.innerHTML = ('Shuttle in Flight.');
                shuttleBackground.style.backgroundColor = "blue";
                spaceShuttleHeight.innerHTML = ('10,000');
            }
    });

    
    landButton.addEventListener('click', event => {
        let landing = window.alert('The shuttle is landing. Landing gear engaged.');
            status.innerHTML = ('The shuttle has landed.');
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = ('0');       
    });


    abort.addEventListener('click', event => {
        let abortMission = window.confirm('Confirm that you want to abort the mission.');
            if (abortMission) {
            status.innerHTML = ('Mssion Aborted.');
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = ('0');
            }
    });
    
   
    let img = 0;
    
    upButton.addEventListener('click', event => {
        img -=10;
        rocket.style.position ="relative";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000 ;
        rocket.style.transform = "translateY(" + img + "px)";
    });
    
 
    downButton.addEventListener('click', event => {
        img +=10;
        rocket.style.position ="relative";
        document.getElementById("spaceShuttleHeight").innerHTML -= 10000 ;
        rocket.style.transform = "translateY(" + img + "px)";
        
    });

    rightButton.addEventListener('click', event => {
        img +=10;
        rocket.style.position ="relative";
        rocket.style.transform = "translateX("+ img + "px)";
    });

    leftButton.addEventListener('click', event => {
        img -=10;
        rocket.style.position ="relative";
        rocket.style.transform = "translateX("+ img + "px)";
    });

    
}


window.addEventListener("load", init);