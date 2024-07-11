function abrir(){

  const file=document.getElementById('file').files[0]
  const img= document.getElementById('img')
  const read= new FileReader
  read.onload= function(e){
      img.src=read.result
  }
  read.readAsDataURL(file)
}