
const API_KEY = "PASTE_DEEPAI_KEY_HERE";

async function process(endpoint){
  const input=document.getElementById("file");
  const img=document.getElementById("out");
  const fd=new FormData();
  fd.append("image",input.files[0]);
  const r=await fetch("https://api.deepai.org/api/"+endpoint,{
    method:"POST",
    headers:{"api-key":API_KEY},
    body:fd
  });
  const j=await r.json();
  img.src=j.output_url;
}
