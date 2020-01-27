var myRequest = new XMLHttpRequest(),
	allData = [],
	category = 'general',
	links = document.querySelectorAll('.nav-link');
  getData(category);
  
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function(e) {
    category = e.target.text;
    getData(category);
	});
}

function getData(category) {
	myRequest.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			var allData = JSON.parse(this.response).articles,
				myText = ``;

        for (var i = 0; i < allData.length; i++) {
				myText += `<div class="col-md-3">
                    <div class="item">
                    <img class="img-fluid" src="${allData[i].urlToImage}">
                      <h3>${allData[i].title}</h3>
                      <p>${allData[i].description}</p>
                    </div>
                  </div>`;
			}
			document.getElementById('temp').innerHTML = myText;
		}
	};

	myRequest.open(
		'get',
		'https://newsapi.org/v2/top-headlines?country=eg&category=' +
			category +
			'&apiKey=a16313719f014e3ab46b615653e4de87',
		true
	);
	myRequest.send();
}


// var myRequest = new XMLHttpRequest();

// myRequest.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {

//     var myJsObject = JSON.parse(this.response).articles,
//     myText = ``;

//     for(i=0; i<myJsObject.length; i++) {

//       myText += `<div class="col-md-3">
//                   <div class="item">
//                   <img src="${myJsObject[i].urlToImage} " class="img-fluid">
//                     <h3>${myJsObject[i].title}</h3>
//                     <p>${myJsObject[i].description}</p>
//                   </div>
//                 </div>`
//     }
//     document.getElementById("temp").innerHTML = myText
//   }
// }

// myRequest.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=a16313719f014e3ab46b615653e4de87", true);

// myRequest.send();
