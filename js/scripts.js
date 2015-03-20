//Gallery Script

var galCnt = 1;
var galT = document.getElementsByClassName( "thumbClick" );
var galO = document.getElementsByClassName( "overlay" );
var prevImg = document.getElementsByClassName( "prev" );
var nextImg = document.getElementsByClassName( "next" );

  function addGalHrefs(){
    for(i = 0; i < galT.length; i++){
      galT[i].setAttribute("href","#img-"+galCnt++);
    }
  }
  
  function addGalIDs() {
    galCnt = 1;
    for(i = 0; i < galO.length; i++){
      galO[i].setAttribute("id","img-"+galCnt++);
    }
  }

function galPrev(){
  galCnt = 0;
  for(i = 0; i < prevImg.length; i++){
    prevImg[i].setAttribute("href","#img-"+galCnt++);
  }
  prevImg[0].setAttribute("href","#img-"+[prevImg.length]);
}

function galNext(){
  galCnt = 2;
  for(i = 0; i < nextImg.length; i++){
    nextImg[i].setAttribute("href","#img-"+galCnt++);
  }
  nextImg[nextImg.length-1].setAttribute("href","#img-1");
}

function master(){
	addGalHrefs();
	addGalIDs();
	galPrev();
	galNext();
}

window.onload = master;
//////////////////////////////////////
