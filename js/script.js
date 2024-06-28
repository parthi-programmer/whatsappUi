let mainSearchSlider = document.querySelector('.main-search-container');
let mainSearch = document.querySelector('.chat-container .search');
let close = document.querySelector('.main-search-container .nav-logo-item');
let msgInput = document.querySelector('.chat-container .search-bar .search-box');
let chatInput = document.querySelector('.chat-search .search-box');
let msgBackIcon = document.querySelector('.chat-container .search-bar .btn .back-icon');
let msgSearchIcon = document.querySelector('.chat-container .search-bar .btn .search-icon');
let chatBackIcon = document.querySelector('.chat-search .btn .back-icon');
let chatSearchIcon = document.querySelector('.chat-search .btn .search-icon');
let filterBtn = document.getElementById('filter-btn');
let filterPopBox = document.querySelector('.filter-element');
let chatMsgInput = document.querySelector('.main-chat-content .chat-msg-input .chat-input .chat-box');
let chatMic = document.querySelector('.main-chat-content .chat-msg-input .chat-input .buttons .mic');
let chatSend = document.querySelector('.main-chat-content .chat-msg-input .chat-input .buttons .send');
let adbtn = document.querySelector('.chat-list-container .navbar .nav-element .ad');
let adpopup = document.querySelector('.chat-list-container .ad-container');
let cancelBtn = document.querySelector('.chat-list-container .ad-container .ad-content-container .ad-content .button-group .cancel-btn');
let cummunitiBtn = document.querySelector('.chat-list-container .navbar .nav-element .group');
let cummunitiScreen = document.querySelector('.communiti-container')
let cummunitiScreenBackBtn = document.querySelector('.communiti-container .header-container .header .back')
let channelBtn = document.querySelector('.chat-list-container .navbar .nav-element .news-letter');
let channelScreen = document.querySelector('.channel-container')
let channelScreenBackBtn = document.querySelector('.channel-container .header-container .header .back')
let statusBtn = document.querySelector('.chat-list-container .navbar .nav-element .status');
let statusScreen = document.querySelector('.status-container');
let statusScreenBackBtn = document.querySelector('.status-container .header-container .header .back');
let newChatInput = document.querySelector('.new-chat-container .search-bar .search-box');
let newChatback = document.querySelector('.new-chat-container .search-bar .btn .back-icon');
let newChatsearch = document.querySelector('.new-chat-container .search-bar .btn .search-icon');
let newChatBtn = document.querySelector('.chat-list-container .navbar .nav-element .new-chat');
let newChatScreen = document.querySelector('.new-chat-container');
let newChatScreenBackBtn = document.querySelector('.new-chat-container .header-container .header .back');
let moreScreen = document.querySelector('.more-container');
let mainMoreScreen = document.querySelector('.main-more-container');
let attachementBtn = document.querySelector('.main-chat-content .input-icons .attachement-icon .plus-icon');
let attachementCloseBtn = document.querySelector('.main-chat-content .input-icons .attachement-icon .close-icon');
let attachementScreen = document.querySelector('.attachement-container');
let activeUser = document.querySelectorAll('.chat-list-container .chat-list .user-chat .user');
let emojiNavbar = document.querySelectorAll('.emoji-container .header .emoji-navbar .emoji-nav-item');
let emojiBtn = document.querySelector('.main-chat-content .input-icons .emoji');
let emojiCloseBtn = document.querySelector('.main-chat-content .input-icons .emoji-close-icon');
let emojiScreen = document.querySelector('.emoji-container');


let mainMsgDiv = document.getElementById("scroller");
mainMsgDiv.scrollTop = mainMsgDiv.scrollHeight;


emojiBtn.addEventListener('click',()=>{
    emojiScreen.classList.add('active');
    emojiCloseBtn.classList.add('active');
});

emojiCloseBtn.addEventListener('click',()=>{
    emojiCloseBtn.classList.remove('active');
    emojiScreen.classList.remove('active');
});


emojiNavbar.forEach((user)=>{
    user.addEventListener('click', (e) => {
        let parrent = e
        setActiveEmoji(parrent);
    });
});

function setActiveEmoji(parrent) {
    emojiNavbar.forEach((user)=>{
        user.classList.remove('active');
    });
    parrent.target.classList.add('active');
}

activeUser.forEach((user)=>{
    user.addEventListener('click', (e) => {
        let parrent = e
        setActiveUser(parrent);
    });
});

function setActiveUser(parrent) {
    activeUser.forEach((user)=>{
        user.classList.remove('active');
    });
    parrent.target.classList.add('active');
}


attachementBtn.addEventListener('click', ()=>{
    attachementBtn.classList.remove('active');
    attachementScreen.classList.add('active');
    attachementCloseBtn.classList.add('active');
});

attachementCloseBtn.addEventListener('click', ()=>{
    attachementScreen.classList.remove('active');
    attachementCloseBtn.classList.remove('active');
    attachementBtn.classList.add('active');
});


function mainMorePopup() {
    if (mainMoreScreen.style.display === "none") {
        mainMoreScreen.style.display = "inline";
    } 
    else {
        mainMoreScreen.style.display = "none";
    }
}

function morePopup() {
    if (moreScreen.style.display === "none") {
        moreScreen.style.display = "inline";
    } 
    else {
        moreScreen.style.display = "none";
    }
}


newChatInput.addEventListener('click', ()=>{
    newChatsearch.classList.remove('active');
    newChatback.classList.add('active');
});

newChatback.addEventListener('click', ()=>{
    newChatback.classList.remove('active');
    newChatsearch.classList.add('active');
    newChatInput.value = ""
});

statusBtn.addEventListener('click',()=> {
    statusScreen.classList.add('active');
});

statusScreenBackBtn.addEventListener('click',()=> {
    statusScreen.classList.remove('active');
});

newChatBtn.addEventListener('click',()=> {
    newChatScreen.classList.add('active');
});

newChatScreenBackBtn.addEventListener('click',()=> {
    newChatScreen.classList.remove('active');
});


channelBtn.addEventListener('click',()=> {
    channelScreen.classList.add('active');
});

channelScreenBackBtn.addEventListener('click',()=> {
    channelScreen.classList.remove('active');
});


cummunitiBtn.addEventListener('click',()=> {
    cummunitiScreen.classList.add('active');
});

cummunitiScreenBackBtn.addEventListener('click',()=> {
    cummunitiScreen.classList.remove('active');
});


adbtn.addEventListener('click', ()=>{
    adpopup.classList.add('active');
});

cancelBtn.addEventListener('click', ()=>{
    adpopup.classList.remove('active');
});



chatMsgInput.addEventListener('keyup',(e) => {
    chatText = e.target.value;
    if (chatText == "") {
        chatMic.classList.add('active');
        chatSend.classList.remove('active');
    }else{
        chatMic.classList.remove('active');
        chatSend.classList.add('active');
    }
});




function myFunction() {
    let filterPopBox = document.querySelector('.filter-element');
    if (filterPopBox.style.display === "none") {
      filterPopBox.style.display = "block";
      filterPopBox.classList.add('animate');
    } 
    else {
      filterPopBox.style.display = "none";
      filterPopBox.classList.remove('animate');
    }
}

mainSearch.addEventListener('click', ()=>{
    mainSearchSlider.classList.add('active');
});

close.addEventListener('click', ()=>{
    mainSearchSlider.classList.remove('active');
});

msgInput.addEventListener('click', ()=>{
    msgSearchIcon.classList.remove('active');
    msgBackIcon.classList.add('active');
});

chatInput.addEventListener('click', ()=>{
    chatSearchIcon.classList.remove('active');
    chatBackIcon.classList.add('active');
});

msgBackIcon.addEventListener('click', ()=>{
    msgBackIcon.classList.remove('active');
    msgSearchIcon.classList.add('active');
    msgInput.value = ""
});

chatBackIcon.addEventListener('click', ()=>{
    chatBackIcon.classList.remove('active');
    chatSearchIcon.classList.add('active');
    chatInput.value = ""
});
