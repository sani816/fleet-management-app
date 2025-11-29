let fleetdata=[];

function AddFleet(){
    let regno=document.getElementById("regno").value
    let category=document.getElementById("category").value
    let drivername=document.getElementById("drivername").value
    let isAvailable=document.getElementById("isAvailable").value

    if(!regno||!drivername){
        alert("please fill the field")
        return;
    }
    let vehicle={
        regno,
        category,
        drivername,
        isAvailable
    }
    fleetdata.push(vehicle)
    displayFleetCard()
    document.getElementById("regno").value=""
    document.getElementById("category").value=""
    document.getElementById("drivername").value=""
    document.getElementById("isAvailable").value=""

}

function displayFleetCard(){
    let fleetCard=document.getElementById("fleetCard")
    fleetCard.innerHTML=""

    fleetdata.forEach((vehicle,index)=>{
        let card=document.createElement("div")
        card.className="card"
        card.innerHTml=`
        <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"></img>
        <h4>${vehicle.regno}</h4>
        <p>Category:${vehicle.category}</p>
        <p>Driver Name:${vehicle.drivername}</p>
        <p>Status:${vehicle.isAvailable}</p>
        <button onclick="updateDriver(${index})">Update driver</button>
        <button onclick="toggleAvailability(${index})">Change Avaibility</button>
        <button onclick="deleteVehicle(${index})">Delete vehicle</button>
        `
        fleetCard.appendChild(card)
    })
}

function updateDriver(index){
    let newDriverName=prompt("enter new driver  name:")
        fleetdata[index].drivername=newDriverName;
        displayFleetCard()   
}

function toggleAvailability(index){
         fleetdata[index].isAvailable=fleetdata[index].isAvailable==="available"?"Unavailable":"available";
         displayFleetCard()
}

function deleteVehicle(index){
       if(confirm("Are u sure to delte this vehicle?")){
        fleetdata.splice(index,1)
        displayFleetCard()
       }
}

function clearFilter(){
    document.getElementById("category filter").value="All"
     document.getElementById("available filter").value="All"
     displayFleetCard()
}
displayFleetCard()
