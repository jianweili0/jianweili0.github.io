var headlines=[];
var desFacets = [];
var perFacets = [];
var deFwords = []
var Facets = []
var tSize = 10
var lineheight = 20;
var rectheight = 10
var margin = 20;
var maxHeadLen, minHeadLen;

function preload(){

  // input your key and url
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "qrmg4uSADDCbach1ULvcZSWSTwDBfYbd"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

  
}

function setup(){
  createCanvas(600,1000);
  background(0)
  textSize(tSize)
  textAlign(LEFT,TOP)
  //noLoop();
  console.log(nytResponse)
  extractHeadlines();
  makewords();
}




function draw() {
  background(0);
  translate(margin, margin);


  for (var i = 0; i < headlines.length; i++) {

    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    if (mouseX > margin && mouseX < margin+rectwidth && mouseY < i*lineheight && mouseY > i*lineheight+(-1*rectheight)) {
      fill(255, 204, 0); // orange
      rect(0, i*lineheight, rectwidth,-1*rectheight)
    } else {
      fill(255);
    }
    
    //console.log(200)

    textSize(7);
    text(headlines[i], 0, (i-1)*lineheight);
  }

  for (var i = 0; i < headlines.length; i++) {
      var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
      // show abstract on mouseover
      if (mouseX > margin && mouseX < margin+rectwidth && mouseY < margin+i*lineheight && mouseY > margin+i*lineheight+(-1*rectheight)) {
        fill(255, 204, 0); // orange
        console.log(deFwords[i])


        rect(mouseX, mouseY, 400, 200);
        fill(0);
        textSize(20);
        text(deFwords[i], mouseX+10, mouseY+10, 400-20, 200-20); // 10px label padding
      }
    }

}





function makewords(){
  for (var i = 0; i<desFacets.length; i++){ 
    // toString() make input into string
    var def = desFacets[i].toString().split(",");
    // console.log(def)
    
    // // console.log(deF)
    append(deFwords,def)
    // console.log(1212)
    console.log(deFwords)


  }

}



function extractHeadlines() {

  //console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var df = nytResponse.results[i].des_facet;
    var pf = nytResponse.results[i].per_facet;
    var h = nytResponse.results[i].title;
    var facets = nytResponse.results[i].per_facet +" "+nytResponse.results[i].des_facet
  
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
    append(desFacets, df);
    append(perFacets, pf);
    append(Facets,facets)
    //console.log(ss);
  }

  //console.log(headlines); // make sure counted data looks as expected
  //console.log(maxHeadLen);
  //console.log(minHeadLen);
}