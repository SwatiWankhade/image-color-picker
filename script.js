const openPicker = document.querySelector('.open-picker');
const result = document.querySelector('.res');
const imageInput = document.querySelector('#image-select');
const imagePreview = document.querySelector('.preview');


if (!window.EyeDropper) {
    alert("Your browser does not support this feature");
}
const eyeDropper = new EyeDropper();

// function func()  {
 
//     const file= this.files[0];
//     if(!file) return;
//     const reader = new FileReader();
//     reader.addEventListener("load",()=>{
//         img.src=this.result;
//     });
//     reader.readAsDataURL(file);
    
// }
// imageInput.addEventListener("change", ()=>{
//     imagePreview.classList.add("active");
//     const file = this.files[0];
//     if(!file) return
//     const reader = new FileReader();
//     reader.addEventListener("load", ()=>{
//         imagePreview.src= this.result;
//     });
//     reader.readAsDataURL(file);
// })

imageInput.onchange = ()=>{
    imagePreview.classList.add("active");
    imagePreview.src = URL.createObjectURL(imageInput.files[0]);
}

openPicker.addEventListener("click", ()=>{
    result.classList.add("show");
    eyeDropper.open()
    .then(res =>{
        result.innerHTML = `Picked Color : <b> ${res.sRGBHex}</b>`
    })
    .catch(err =>{
        console.log("Uer cancel selection.")
    });
});