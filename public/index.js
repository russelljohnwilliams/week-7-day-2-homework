var state = {
  countries: null
}

window.onload = function(){
  console.log('window loaded');
  var url = 'https://restcountries.eu/rest/v1';
  var select = document.getElementById('countryList');
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = function(){
    if (request.status === 200){
      // console.log( select );
      var jsonString = request.responseText;
      state.countries = JSON.parse( jsonString );
      console.log( 'data', state.countries[0] )
      displayOptions( select );
    }
  }
  request.send( null );
}

var displayOptions = function(select) {
// console.log(countries[0].name)
for ( var i = 0; i < state.countries.length; i++ ) {
  var opt = document.createElement('option')
  opt.innerHTML = state.countries[i].name;
  opt.value = i;
  select.appendChild(opt)
}
}

var selectCountry = function(){
  var index = document.getElementById('countryList').value;
  var selectedCountry = state.countries[index];
  console.log( selectedCountry );

  document.getElementById("textToDisplay").innerHTML = "Country name: " + selectedCountry.name + ", population: " +  selectedCountry.population + ", Capital City: " + selectedCountry.capital;
}


















// window.onload = function(){
//   console.log('window loaded');



//   var url = 'https://restcountries.eu/rest/v1';
//   var request = new XMLHttpRequest();
//   request.open( "GET", url );
//   request.onload = function(){
//     if (request.status === 200){
//       var jsonString = request.responseText;
//       // console.log( jsonString );
//       var countries = JSON.parse( jsonString );
//       // var country = countries[1];
//       // console.log(country);
//       // console.log(country.name);

//       }
//     // console.log( request.responseText );
//   }
//   request.send( null );
//   // console.log( request );
// }


// }

