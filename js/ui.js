class UI{
constructor(){
    this.profile=document.querySelector('#profile');

}
showprofile(user){
    this.profile.innerHTML=`<div class=" card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary
    btn-block mb-4">view profile</a>
    </div>

<div class="col-md-9">
<span class="badge badge-primary">public Repos: ${user.public_repos}</span>
<span class="badge badge-secondry">public Repos: ${user.public_gists}</span>
<span class="badge badge-success">public Repos: ${user.followers}</span>
<span class="badge badge-info">public Repos: ${user.following}</span>
<br><br>
<ul class="list-group">
<li class="list-group-item">Company: ${user.company}</li>
<li class="list-group-item">Website/blog: ${user.blog}</li>
<li class="list-group-item">Location: ${user.Location}</li>
<li class="list-group-item">Member Since: ${user.created_at}</li>
</ul>
</div>



    </div>
    </div>`;
}
clearprofile(){
    this.profile.innerHTML ="";
}
showAlert(message, className){
    let div=document.createElement('div');
    div.className=className;
    div.appendChild(document.createTextNode(message));
    let container=document.querySelector('.searchContainer');
    let search=document.querySelector('.search');
    container.insertBefore(div, search);
}
}