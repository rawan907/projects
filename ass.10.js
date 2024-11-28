var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');
var visitButton=document.getElementById('visit');
var siteArr=[];

function addSite(){
var Site={
    name:siteNameInput.value,
    url:siteUrlInput.value,}
    siteArr.push(Site);
    displayLastSite()
    clearForm();
    displaySite();
}
function clearForm(){
siteNameInput.value=null;
siteUrlInput.value=null;
}
function displaySite(){
    var box='';
    for(var i=0;i<siteArr.length;i++){
        box +=`<tr>
                        <td>${i+1}</td>
                        <td>${siteArr[i].name}</td>
                        <td><button id="visit" onclick="visitSite(${i})">
                                <i class="fa-solid fa-eye"></i>
                                visit</button>
                        </td>
                        <td><button id="delete" onclick="deleteSite(${i})">
                                <i class="fa-solid fa-trash"></i>
                                Delete</button></td>
                    </tr>`}
    document.getElementById('tbody').innerHTML= box;
}
function displayLastSite(){
    //for(var i=0;i<siteArr.length;i++){
        var  box =`<tr>
                        <td>${siteArr.length}</td>
                        <td>${siteArr[siteArr.length-1].name}</td>
                        <td><button id="visit"onclick="visitSite()" >
                                <i class="fa-solid fa-eye"></i>
                                visit</button>
                        </td>
                        <td><button id="delete" onclick="deleteSite()">
                                <i class="fa-solid fa-trash"></i>
                                Delete</button></td>
                    </tr>`
   // }
    document.getElementById('tbody').innerHTML += box;
}
function deleteSite(index){
siteArr.splice(index,1);
displaySite(siteArr);
}
function visitSite(index) {
if(index<siteArr.length){
    window.open(`https://www.${siteArr[index].url}`);
}}
function validationSiteUrl(){
    var regexUrl=/[A-Z a-z].com$/;
    if(regexUrl.test(siteUrlInput.value)){
        if(siteUrlInput.classList.contains('is-invalid')){
            siteUrlInput.classList.remove('is-invalid');
        }
        siteUrlInput.classList.add('is-valid');
    }
    else{
        
        siteUrlInput.classList.add('is-invalid');
        if(siteUrlInput.classList.contains('is-valid')){
            siteUrlInput.classList.remove('is-valid');
        }
    }
}
siteUrlInput.addEventListener('blur',function(){
    validationSiteUrl();
})

function validationSiteName(){
    var regexName=/^[a-z]{1,10}$/
    if(regexName.test(siteNameInput.value)){
        if(siteNameInput.classList.contains('is-invalid')){
            siteNameInput.classList.remove('is-invalid');
        }
        siteNameInput.classList.add('is-valid');
    }
    else{
        
        siteNameInput.classList.add('is-invalid');
        if(siteNameInput.classList.contains('is-valid')){
            siteNameInput.classList.remove('is-valid');
        }
    }
}
siteNameInput.addEventListener('blur',function(){
    validationSiteName();
})