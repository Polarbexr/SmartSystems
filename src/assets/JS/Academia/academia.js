
  let listVideo = document.querySelectorAll('.video-list .vid');
  let mainVideo = document.querySelector('.main-video video');
  let title = document.querySelector('.main-video .title');

  listVideo.forEach(video => {
    video.onclick = () =>{
      listVideo.forEach(vid => vid.classList.remove('active'));
      video.classList.add('active');
      if(video.classList.contains('active')){
        let src = video.children[0].getAttribute('src');
        mainVideo.src = src;
        let text = video.children[1].innerHTML;
        title.innerHTML = text;
      };
    };
  });



let listOneIntern = document.querySelectorAll('.one_intern');
let mainImage = document.getElementById('main-img');
let tittle = document.querySelector('.text-content h2');

listOneIntern.forEach(oneIntern => {
    oneIntern.onclick = () => {
        listOneIntern.forEach(item => item.classList.remove('active'));
        oneIntern.classList.add('active');

        if (oneIntern.classList.contains('active')) {
            let src = oneIntern.parentElement.getAttribute('data-src');
            let text = oneIntern.parentElement.getAttribute('data-text');

            mainImage.src = src;
            tittle.innerHTML = text;
        }
    };
});