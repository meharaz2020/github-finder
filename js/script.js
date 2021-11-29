let searchBtn=document.querySelector('#searchBtn');
let searchuser=document.querySelector('#searchUser');
let ui=new UI();
searchBtn.addEventListener('click',(e) => {
    let userTxt=searchuser.value;
    if(userTxt !=''){
        fetch(`https://api.github.com/users/${userTxt}`)
        .then(result => result.json())
        .then(data => {
            //console.log(data);
            
            if( data.message == 'not found'){
            // ui.showAlert("User not found!", "alert alert-danger");
            }else{
             ui.showprofile(data);
            }
        })
    }else{
           // ui.clearprofile();
    }
});
