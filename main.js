let mine= document.getElementById('select')
let inp= document.getElementById('inp')
let btn= document.getElementById('btn')
let dv=document.getElementById('dv')
function weki(hel,lg) {
  axios.get(`https://${lg}.wikipedia.org/api/rest_v1/page/summary/${hel}`)
  .then((response)=>{
    dv.innerHTML=`
      <img src="${response.data.originalimage.source}"></img>
      <p>${response.data.extract}</p>
  `
  })
  .catch (e=>{
    alert("something is wrong")
  })
}

btn.onclick=() => {
  if (inp.value!=''){
    if(mine.value!='lg'){
      weki(inp.value.trim().toLowerCase(),mine.value)
    }
    else{
      alert('select a language')
    }
  }
  else{
    alert('type')
  }
}