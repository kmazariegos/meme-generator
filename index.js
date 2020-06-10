function logSubmit(event) {
    var meme = document.getElementById("image").value
  
    var topname = document.getElementById("top").value
    var bottomname = document.getElementById("bottom").value  
    
    var locationTop = document.getElementById("topPrint")
    locationTop.innerHTML = topname

    var locationBottom = document.getElementById("bottomPrint")
    locationBottom.innerHTML = bottomname


    var locationImage = document.getElementById("imagePrint")
    locationImage.src = meme

    log.textContent = `Form submitted!`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);


  function deleteMeme() {
    var meme2 = document.getElementById("meme") 
  
    meme2.parentNode.removeChild(meme2);
  
    // event.preventDefault();
  }

  // var currentMeme = document.getElementById("meme")

  // currentMeme.addEventListener('', deleteMeme);