const targetTimeZoneFlorence = 'Europe/Rome'; 
const targetTimeZoneYellow = 'America/Denver';
const targetTimeZoneHa = 'Asia/Ho_Chi_Minh';
const targetTimeZonePrague = 'Europe/Prague';


//update time in florence
function updateTimeFlorence() {

  const currentDate = new Date();

  
  const options = {
    timeZone: targetTimeZoneFlorence,
    hour12: true, 
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedTime = formatter.format(currentDate);

  
  document.getElementById('florence-time').innerHTML = `The time in Florence is: ${formattedTime}`;
}

//update time in yellow stone
function updateTimeYellow() {

    const currentDate = new Date();
  
    
    const options = {
      timeZone: targetTimeZoneYellow,
      hour12: true, 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(currentDate);
  
    
    document.getElementById('yellow-time').innerHTML = `The time in Yellowstone is: ${formattedTime}`;
}

//update time in ha long bay
function updateTimeHa() {

    const currentDate = new Date();
  
    
    const options = {
      timeZone: targetTimeZoneHa,
      hour12: true, 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(currentDate);
  
    
    document.getElementById('ha-time').innerHTML = `The time in Ha Long Bay is: ${formattedTime}`;
}

//update the time in prague
function updateTimePrague() {

    const currentDate = new Date();
  
    
    const options = {
      timeZone: targetTimeZonePrague,
      hour12: true, 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(currentDate);
  
    
    document.getElementById('prague-time').innerHTML = `The time in Prague is: ${formattedTime}`;
}

updateTimeFlorence();
updateTimeYellow();
updateTimeHa();
updateTimePrague();


setInterval(updateTimeFlorence, 1000);
setInterval(updateTimeYellow, 1000);
setInterval(updateTimeHa, 1000);
setInterval(updateTimePrague, 1000);