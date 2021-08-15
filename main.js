var meme = document.querySelector('main');

var memeUrl = document.querySelector('input');

var memeCollection = [
  "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/03/Best-funny-Coronavirus-memes-2020-Honeycombers-Bali-30.jpeg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-1608304523.jpg",
  "https://i.pinimg.com/564x/eb/2c/e0/eb2ce0e34b16c6e5c2910a18a2806bf8.jpg",
  "https://i.pinimg.com/originals/85/e0/0e/85e00e2c48d7a590206166ba5ec8c3f9.jpg",
  "https://images7.memedroid.com/images/UPLOADED388/5d93a956d7647.jpeg",
  "https://pbs.twimg.com/media/EwlKmC8XMAA1qE8.jpg",
  "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/03/Best-funny-Coronavirus-memes-2020-Honeycombers-Bali-10.jpg",
  "https://i.imgflip.com/575x3t.jpg",
  "https://pbs.twimg.com/media/D5ci1LhWkAAHA79.jpg",
  "https://pbs.twimg.com/media/EY2waFlWoAAyT8P.jpg",
  "https://i.pinimg.com/736x/f0/98/4d/f0984dd5ea50e8b0b180aaf1384615da.jpg",
  "https://uploads.dailydot.com/32e/52/f420bec13a16354a.png?auto=compress%2Cformat&ixlib=php-3.3.0",
  "https://i.ytimg.com/vi/gbFmI8ZPegA/mqdefault.jpg",
  "https://pbs.twimg.com/media/EzQ6hdaVkAIGmNQ.jpg",
  "https://www.tastefullyoffensive.com/wp-content/uploads/2020/11/what-is-a-dank-meme-funny-you-should-ask-47-dank-memes-15.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3Mle3tsD26zrYuKfFnlAhygzdWSc5Fho5A&usqp=CAU",
  "https://www.cccneb.edu/programs/cccmart/gallery/graphic_arts/web/2003tyler/Pr1/images/spritecranberry.jpg",
  "https://www.liveabout.com/thmb/74OqFbiBWT6M-NXtUqEDruloKCc=/879x659/smart/filters:no_upscale()/BorninTimeforDank_wide-5addff7da9d4f9003d1706ff.jpg",
  "https://64.media.tumblr.com/e733064bfdb33d86e6e8867d71420135/cee4c212b2385c15-25/s1280x1920/5ce5db148a2a8617c580ecd91945b7841a62691d.jpg",
  "https://images3.memedroid.com/images/UPLOADED64/5dd8042505ec1.jpeg",
  "https://i.imgflip.com/22yviw.jpg",
  "https://images7.memedroid.com/images/UPLOADED629/5a5bdf757e3dc.jpeg",
  "https://quotesnhumor.com/wp-content/uploads/2019/02/3-17.jpg",
  "https://i.pinimg.com/originals/4c/c2/4b/4cc24bf639ea5af0f1b5da35367e591d.jpg",
  "https://i.pinimg.com/736x/b8/43/b2/b843b2023b94a352d8ecadb865e1e5f8.jpg",
  "https://i.pinimg.com/736x/80/eb/b3/80ebb3af80dca9a536cc9eb8826101ac.jpg",
  "https://i.redd.it/rkccgvoqy8f21.jpg",
  "https://pbs.twimg.com/media/Dh3OD2TXkAA4DFl.jpg",
  "https://i.pinimg.com/originals/f7/bc/31/f7bc315ab3a7a8591aebf8badf50a8e2.jpg",
  "https://i.redd.it/t7z47rasn1s31.jpg"
];

var changeMemeButton = document.querySelector('#change');
var userClicks = 0;

changeMemeButton.addEventListener("click" , function(event) {
  meme.innerHTML = '';
  let randomNum = Math.floor(Math.random() * memeCollection.length);
  let newMeme = document.createElement('img');
  newMeme.className = 'meme-picture';
  newMeme.src = memeCollection[randomNum];
  meme.appendChild(newMeme);
  ++userClicks;
  if (userClicks === 1) {
    var showClicks = "Wow, you've viewed: " + userClicks + " meme";
  } else if (userClicks > 1 && userClicks < 50) {
    var showClicks = "Wow, you've viewed: " + userClicks + " memes";
  } else if (userClicks >= 50 && userClicks < 100) {
    var showClicks = "Okay buddy slow down... you've viewed: " + userClicks +
    " memes";
  } else {
    var showClicks = "You're out of control... you've viewed: " + userClicks +
    " memes";
  }
  document.querySelector('h2').innerHTML = showClicks;
});


var addMemeButton = document.querySelector('#add');

addMemeButton.addEventListener("click", function(event) {
  if (memeUrl.value !== '') {
    memeCollection.push(memeUrl.value);
  }
  memeUrl.value = ''
});
