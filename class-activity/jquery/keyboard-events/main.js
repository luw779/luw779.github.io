$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'http://www.stickpng.com/assets/images/5a67a18801d15068bdfe87c1.png';
  } else if ( key == 'b' ) {
    img = 'https://www.pinclipart.com/picdir/middle/26-262676_hugging-clipart-transparent-rilakkuma-and-friends-png-download.png';
  } else if ( key == 'c' ) {
    img = 'https://banner2.kisspng.com/20180501/kyw/kisspng-rilakkuma-line-sticker-kavaii-5ae84f7281df63.558109351525174130532.jpg';
  }  else if ( key == 'd' ) {
    img = 'https://i.gifer.com/embedded/download/ZFqf.gif';
  } else if ( key == 'e' ) {
    img = 'http://www.stickpng.com/assets/images/5a67a16b01d15068bdfe87bd.png';
  } else if ( key == 'f' ) {
    img = 'https://sdl-stickershop.line.naver.jp/products/0/0/11/749/android/stickers/9336.png;compress=true';
  } else if ( key == 'g' ) {
    img = 'https://media1.tenor.com/images/44db1a3c925b78d3d6ae8a362fa87a39/tenor.gif?itemid=8715598';
  } else if ( key == 'h' ) {
    img = 'https://www.clipartmax.com/png/middle/193-1939054_rilakkuma-rilakkuma-gif.png';
  } else if ( key == 'i' ) {
    img = 'https://www.clipartmax.com/png/middle/64-641354_korilakkuma-kiiroitori-rilakkuma-kawaii-free-kawaii-calendar-2018.png';
  } else if ( key == 'j' ) {
    img = 'https://www.clipartmax.com/png/middle/193-1939070_%5Bvector%5D-rilakkuma-korilakkuma-kiiroitori-by-okinishiro-rilakkuma-iphone-5.png';
  } else if ( key == 'k' ) {
    img = 'https://www.clipartmax.com/png/middle/64-641344_warm-and-toasty%F0%9F%8D%9E-rilakkuma-korilakkuma-kiiroitori-san-x.png';
  } else if ( key == 'l' ) {
    img = 'https://pngimage.net/wp-content/uploads/2018/06/rilakkuma-png-5-218x200.png';
  } else if ( key == 'm' ) {
    img = 'https://ya-webdesign.com/images/sticker-transparent-rilakkuma-3.png';
  } else if ( key == 'n' ) {
    img = 'https://media1.tenor.com/images/c026c24101c9f938c9305c844ab77055/tenor.gif?itemid=11295791';
  } else if ( key == 'o' ) {
    img = 'https://66.media.tumblr.com/e7f731d307f3890daec33911d1e07e89/tumblr_o48v8pmMye1qi6ssqo5_250.png';
  } else if ( key == 'p' ) {
    img = 'http://www.stickpng.com/assets/images/5a67a1a401d15068bdfe87c5.png';
  } else if ( key == 'q' ) {
    img = 'https://www.clipartmax.com/png/middle/77-777308_honey-kawaii-cute-bear-brown-sweet-freetoedit-desktop-rilakkuma-2018-calendar.png';
  } else if ( key == 'r' ) {
    img = 'http://www.stickpng.com/assets/images/5a67a16b01d15068bdfe87bd.png';
  } else if ( key == 's' ) {
    img = 'https://newvitruvian.com/images/transparent-kitty-rilakkuma.png';
  } else if ( key == 't' ) {
    img = 'http://static.wixstatic.com/media/37ea86_ccc92576191642f0973abc312c2a380e.png/v1/fill/w_231,h_211,al_c,lg_1,q_80/37ea86_ccc92576191642f0973abc312c2a380e.webp';
  } else if ( key == 'u' ) {
    img = 'https://i.pinimg.com/originals/6c/d9/a9/6cd9a92acdff13f40751faef3e91cb7b.gif';
  } else if ( key == 'v' ) {
    img = 'https://media.giphy.com/media/y9SaOSVAj5ct2/giphy.gif';
  } else if ( key == 'w' ) {
    img = 'https://media.tenor.com/images/de58aeae7a3f436481212fc23d3878ca/tenor.gif';
  } else if ( key == 'x' ) {
    img = 'https://sdl-stickershop.line.naver.jp/products/0/0/3/6044/android/stickers/10247732.png;compress=true';
  } else if ( key == 'y' ) {
    img = 'https://stickershop.line-scdn.net/sticonshop/v1/product/5ad6f19f031a67c6648c6433/iPhone/main.png';
  } else if ( key == 'z' ) {
    img = 'https://img.kaidee.com/profile/3058432/b56b165d4fa230e1a195a025c49c7c6f.png';
  } 

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});

