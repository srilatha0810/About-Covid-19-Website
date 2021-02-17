function upDate(previewPic){
    document.getElementById('image2').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image3').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image2').innerHTML = previewPic.alt;
    document.getElementById('image3').innerHTML = previewPic.alt;
}

function unDo(){
    document.getElementById('image2').style.backgroundImage = null;
     document.getElementById('image3').style.backgroundImage = null;
    document.getElementById('image2').innerHTML = "Hover over image below to display here.";
    document.getElementById('image3').innerHTML = "Hover over image below to display here.";
}



