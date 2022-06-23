// Write your JavaScript code here.
// Remember to pay attention to page loading!

let ready =  document.getElementById("takeoff");
ready.addEventListener("click",function()
                {
                alert("Confirm that the shuttle is ready for takeoff.")
                document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
                document.getElementById("shuttleBackground").setAttribute('style', 'background-color:blue');
                   
                ready.addEventListener("click",function()
                {
                alert("Confirm that the shuttle is ready for takeoff.")
                    document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
                    document.getElementById("shuttleBackground").setAttribute('style', 'background-color:blue');
                    document.getElementById("spaceShuttleHeight").innerHTML =+ 10000;
                });


                let land =  document.getElementById("landing");
                land.addEventListener("click",function()
                {
                alert("The shuttle is landing. Landing gear engaged.");
                    document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
                    document.getElementById("shuttleBackground").setAttribute('style', 'background-color:green');
                    document.getElementById("spaceShuttleHeight").innerHTML = 0;
                });

                let abort =  document.getElementById("missionAbort");
                abort.addEventListener("click",function()
                {
                alert("Confirm that you want to abort the mission.");
                    document.getElementById("flightStatus").innerHTML="Mission aborted.";
                    document.getElementById("shuttleBackground").setAttribute('style', 'background-color:green');
                    document.getElementById("spaceShuttleHeight").innerHTML = 0;
                });

                
                let move = document.getElementById("shuttleBackground");
                let img = 0;
                
                let rightbt = document.getElementById("right");
                right.addEventListener("click",function()
                {
                   img +=10;
                   shuttleBackground.style.position ='relative'; //img is in normal position
                   shuttleBackground.style.transform = "translateX(" + img + "px)";
                
                });
               
                let leftbt = document.getElementById("right");
                left.addEventListener("click",function()
                    {
                        img -=10;
                        shuttleBackground.style.position ='relative'; //img is in normal position
                        shuttleBackground.style.transform = "translateX(" + img + "px)";
                    
                });
                let upbt = document.getElementById("up");
                upbt.addEventListener("click",function()
                    {
                        document.getElementById("spaceShuttleHeight").innerHTML = 10000 ;
                    });
    
                let downbt = document.getElementById("down");
                downbt.addEventListener("click",function()
                {
                    document.getElementById("spaceShuttleHeight").innerHTML -= 10000 ;
                });