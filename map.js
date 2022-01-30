var coordinates ={ lat: 12.987606639702959,lng: 79.97192584601231};
var options = {
    center:coordinates,
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map"),options);

// mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWphY2tpZWNoYW4iLCJhIjoiY2t5eWNxYjQ3MHI2ZzJubXg0N2I5eGRodSJ9.XDcyBDKCqRgsepX1U_RghA';
// setUpMap([79.97192584601231,12.987606639702959])
// function setUpMap(center){
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center : center,
//         zoom:15
//     });
//     var nav = new mapboxgl.NavigationControl()
// map.addControl(nav,'bottom-right')
// var directions = new MapboxDirections({
//     accessToken: 'YOUR-MAPBOX-ACCESS-TOKEN',
//     unit: 'metric',
//     profile: 'mapbox/walking'
//   });
//   map.addControl(directions, 'top-left');
// }

var dirService = new google.maps.DirectionsService();

var dirDisplay = new google.maps.DirectionsRenderer();

dirDisplay.setMap(map);

// function showPosition(position)
// {
//     val.innerHTML=position.coords.latitude+","+ position.coords.longitude;
// }
// function getlocation(val1)
// {
    
// }
var locValue=document.getElementById("from").value;

function lib()
{   checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Library";
    x.options[i].value="SVCE Central Library";
}

function mph()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Multi Purpose Hall";
    x.options[i].value="12.989436654977544, 79.97150839088106";
}

function oat()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="OAT";
    x.options[i].value="12.987306587576604, 79.97106316953825";
}

function medic()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Medical Centre";
    x.options[i].value="12.988717920726266, 79.97022897718522";
}

function canteen()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Canteen";
    x.options[i].value="12.986443445416796, 79.97218366235796";
}

function temple()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="SVCE Temple";
    x.options[i].value="12.987371927511186, 79.97191879421669";
}

function busbay()
{
    checkLocation();
    
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Bus Bay";
    x.options[i].value="SVCE College Bus Parking Area";
}

function adminBlock()
{
    checkLocation();
    var x = document.getElementById("to");
    var i = x.selectedIndex;
    x.options[i].text="Admin Block";
    x.options[i].value="12.987006023649586, 79.97196170956357";
}

function checkLocation()
{
    // if(locValue=="Marina Beach")
    // {
        
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
        }    
    // }
}
function showPosition(position)
{
    // document.getElementById("from").value.innerHTML=position.coords.latitude+","+ position.coords.longitude;
    // document.getElementById("from").options[1].value=position.coords.latitude+","+ position.coords.longitude;

        var z = document.getElementById("from");
        var j = z.selectedIndex;
        z.options[j].text="Your Location";
        z.options[j].value=position.coords.latitude+","+ position.coords.longitude;

    console.log(document.getElementById("from").options[1].value);
}
function CalculateRoute()
{
    var disLoc=document.getElementById("from");
    var locIndex=disLoc.selectedIndex;

    var disDes=document.getElementById("to");
    var desIndex=disDes.selectedIndex;
    var req = {
        origin:document.getElementById("from").value,
        destination:document.getElementById("to").value,
        travelMode:google.maps.TravelMode.WALKING,
        unitSystem:google.maps.UnitSystem.IMPERIAL
    }

    dirService.route(req,(result,status)=>{
        if(status==google.maps.DirectionsStatus.OK)
        {
            const op=document.querySelector("#op");
            op.innerHTML="<div class='info'> From : &nbsp&nbsp&nbsp&nbsp&nbsp"+ document.getElementById("from").options[locIndex].text+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<div class='right' id='toooo'> To : &nbsp&nbsp&nbsp&nbsp&nbsp"+document.getElementById("to").options[desIndex].text+"</div> <br/> Walking Distance : &nbsp&nbsp&nbsp&nbsp&nbsp"+ result.routes[0].legs[0].distance.text + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span class='right'>Duration : &nbsp&nbsp&nbsp&nbsp&nbsp"+ result.routes[0].legs[0].duration.text+"</span></div>";

            dirDisplay.setDirections(result);

        }
        else
        {
            dirDisplay.setDirections({routes:[]});
            map.setCenter(coordinates);
            op.innerHTML="<br/> <div class='error'> Invalid Location </div>";

        }
    });
}

function GetDir()
{
    var nav="https://www.google.com/maps/dir/"+ document.getElementById("from").value+"/"+document.getElementById("to").value;
    window.open(nav);
}