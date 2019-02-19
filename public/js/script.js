var toggle_button;
var sidebar_element;
var home_element;
var rape_element;
var memes_element;
var about_element;
var videoplayer_element;
var videocontainer_element;
var valakas_element;


function m_GetElement(str){
    return document.getElementById(str);
}

function valakas(){
    valakas_element.classList.toggle('active');
}


function PageLoaded(){
    toggle_button = m_GetElement('id-tgl-btn');
    sidebar_element = m_GetElement("sidebar");
    home_element = m_GetElement('id-home');
    memes_element = m_GetElement('id-memes');
    rape_element = m_GetElement('id-rape');
    about_element = m_GetElement('id-about');
    videoplayer_element = m_GetElement('video-player');
    videocontainer_element = m_GetElement('video-id');
    valakas_element = m_GetElement('valakas');
}

function test(_this){
    var requested_webm = _this.innerHTML;
    var ext = requested_webm.substr(requested_webm.lastIndexOf('.') + 1);
    var prep_vid = "<source src=\""+"webm/"+requested_webm+"\" type=\"video/"+ext+"\">"
    videocontainer_element.innerHTML = "";
    videocontainer_element.innerHTML = prep_vid;
    videocontainer_element.load();
    openPlayer();
}

function closePlayer(){
    videoplayer_element.classList.toggle('active', false);
    videocontainer_element.pause();
}

function openPlayer(){
    videoplayer_element.classList.toggle('active', true);
}

function toggleSidebar(){
    sidebar_element.classList.toggle('active');
    toggle_button.classList.toggle('active');
}

function toggleHome(){
    home_element.classList.toggle('active', true);
    memes_element.classList.toggle('active', false);
    rape_element.classList.toggle('active', false);
    about_element.classList.toggle('active', false);
}

function toggleMemes(){
    home_element.classList.toggle('active', false);
    memes_element.classList.toggle('active', true);
    rape_element.classList.toggle('active', false);
    about_element.classList.toggle('active', false);
}

function toggleRape(){
    home_element.classList.toggle('active', false);
    memes_element.classList.toggle('active', false);
    rape_element.classList.toggle('active', true);
    about_element.classList.toggle('active', false);
}

function toggleAbout(){
    home_element.classList.toggle('active', false);
    memes_element.classList.toggle('active', false);
    rape_element.classList.toggle('active', false);
    about_element.classList.toggle('active', true);
}