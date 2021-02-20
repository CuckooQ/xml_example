
const loadDoc = () => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if(this.status === 200 && this.readyState === this.DONE) {
      displayData(xmlHttp);
    }    
  };
  xmlHttp.open("GET", "./korean_major_cities.xml", true);
  xmlHttp.send();
}

const displayData = (xmlHttp) => {
  const xmlObj = xmlHttp.responseXML;
  let result = "<table><tr><th>도시이름</th><th>행정구역</th></tr>";
  const cityList = xmlObj.getElementByTagName("city");
  for(let idx = 0; idx < cityList.length;idx++) {
    result += "<tr><td>" + 
      cityList[idx].getElementByTagName("name")[0].childNodes[0].nodesValue + "</td><td>" +
      cityList[idx].getElementByTagName("class")[0].childNodes[0].nodesValue + "</td></tr>";
  }
  result += "</table>";
  document.getElementById("text").innerHTML = result;
}

const init = () => loadDoc();
init();