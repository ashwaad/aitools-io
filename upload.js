
const API_KEY = "affdb7d4-bdf4-4d75-8a8a-cd695cb30790";

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
