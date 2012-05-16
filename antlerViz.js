function getBody(){
 return document.getElementsByTagName("body").item(0);
}
function applyLiterate(f, x){f(x); return x;}
function vertexDom(parent, url){
 if(!parent)
  parent = applyLiterate(
   function(x){
    x.style.width = "100%";
    x.style.height = "100%";
    getBody().appendChild(x);
   },
   document.createElement("div")
  );
 if(arguments.length < 2) url = "about:blank";
 var vizrep = applyLiterate(
  function(x){
   x.style.width = "100%";
   x.style.height = "50%";
   x.style["text-align"] = "center";
   parent.appendChild(x);
   x.appendChild(
    applyLiterate(
     function(x){
      x.src = url;
      x.border = "1";
      x.style.width = "50%";
      x.style.height = "100%";
      x.style.display = "inline-block";
     },
     document.createElement("iframe")
    )
   );
  },
  document.createElement("div")
 );
 function halfCol(x){
  x.style.height = "50%";
  x.style.width = "50%";
  x.style.float = "left";
  parent.appendChild(x);
 }
 var ar = applyLiterate(
  halfCol,
  document.createElement("div")
 );
 var dr = applyLiterate(
  halfCol,
  document.createElement("div")
 );
 return [parent, vizrep, ar, dr];
}
