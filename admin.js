let fleetdata=[];

function AddFleet(){
    let regno=document.getElementById("reg.no").value
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

}

function displayFleetCard(){
    let fleetCard=document.getElementById("fleetCard")
    fleetCard.innerHTML=""

    fleetdata.forEach((vehicle,index)=>{
        let card=document.createElement("div")
        card.className="card"
        card.innerHTml=`<h4>${vehicle.regno}</h4>
        <p>Category:${vehicle.category}</p>
        <p>Driver Name:${vehicle.drivername}</p>
        <p>Status:${vehicle.isAvailable}</p>
        <button onclick="updateDriver(${index})">Update driver</button>
        `

    })
}