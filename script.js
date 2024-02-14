// to get elements value
function getInputValue(inputId){
  const inputEl = document.getElementById(inputId);
  const inputValue = parseFloat(inputEl.value);
  return inputValue;
}

// to set area
function setArea(areaId, area){
  const areaEl = document.getElementById(areaId);
  areaEl.innerText = area;
}


// Triangle Area
function triangleArea(){
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  const area = 0.5 * base * height; 
  setArea("triangle-area", area);
}

// Rectangle Area
function rectangleArea(){
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const area = width * length; 
  setArea("rectangle-area", area);
}



