var state = {
  countries: null
}

window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var select = document.getElementById('countryList');
  var request = new XMLHttpRequest();
  request.open( "GET", url );

  request.onload = function(){
    if (request.status === 200){
      var jsonString = request.responseText;
      state.countries = JSON.parse( jsonString );
      displayOptions( select );
      persist();
    }
  }
  request.send( null );
}

var displayOptions = function(select) {
  for ( var i = 0; i < state.countries.length; i++ ) {
    var opt = document.createElement('option')
    opt.innerHTML = state.countries[i].name;
    opt.value = i;
    select.appendChild(opt)
  }
}

var persist= function(){
  persist = JSON.parse( localStorage.getItem('countries')) || [];
  document.getElementById("textToDisplay").innerHTML = "Country name: " + persist.name + ", population: " +  persist.population + ", Capital City: " + persist.capital;
}


var selectCountry = function(){
  var index = document.getElementById('countryList').value;
  var selectedCountry = state.countries[index];

  document.getElementById("textToDisplay").innerHTML = "Country name: " + selectedCountry.name + ", population: " +  selectedCountry.population + ", Capital City: " + selectedCountry.capital;

  borderCountry(selectedCountry)

  localStorage.setItem('countries', JSON.stringify(selectedCountry));
}

var borderCountry = function(selectedCountry){
  for ( var i in selectedCountry.borders){
    var border = selectedCountry.borders[i];
    // console.log(border)
    for ( var x in state.countries){ 
      var alpha = state.countries[x];
    if ( border === alpha.alpha3Code ){
        console.log(alpha)
        document.getElementById("borderingNations").innerHTML = "BORDERING NATIONS: " + "Country name: " + alpha.name + ", population: " +  alpha.population + ", Capital City: " + alpha.capital;
        }
      }
    }
  }






