const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+
	(e.pageX - 20)+"px;")
})


document.addEventListener('click', ()=>{
	cursor.classList.add('expand');

	setTimeout(()=>{
		cursor.classList.remove("expand");
	}, 500);

})
 const load=document.querySelector('.loader');

  window.addEventListener('load',function() {

	var lineBar = new ProgressBar.Line("#line-container", {
		strokeWidth: 1,
		trailWidth: 0.5,
		from: { color: "#000000" },
		to: { color: "#000001" },
		text: {
		  value: '0',
		  className: 'progress-text',
		},
		step: (state, shape) => {
		  shape.setText(Math.round(shape.value() * 100) + ' %');
		}
	  });
	  load.style.opacity="1";
	  lineBar.animate(1, {
		duration: 1000,
	  }, function(){ load.style.opacity="0";});

});

// MENU BURGER

$(document).ready(function(){
  $(window).mousemove(function(e){
    var y = e.clientY;
    // console.log(y);
    $(".hover-element").css("margin-top", y);
  });

  $("nav ul li a").mouseover(function(){
    var activeLinkId = $(this).attr("href");
    $(".link-img img").removeClass("active");
    $(".link-img img"+activeLinkId).addClass("active");
  });

  var toggleBtn = document.querySelector(".toggle");
  //GSAP timeline
  var tl = new TimelineMax({paused: true});

  tl.to(".toggle span:nth-child(2)", 1, {
    right: "-100"
  })
  tl.to(".toggle span:nth-child(1)", 1, {
    rotate: 45,
    top: 10
  }, "-=1")//offset
  tl.to(".toggle span:nth-child(3)", 1, {
    rotate: -45,
    top: 10
  }, "-=1")//offset

  tl.to("nav", 1, {
    left: "0"
  }, "-=1")//Offset

  tl.from("nav ul li", 1, {
    x: -300,
    opacity: 0,
    stagger: .2
  })
  tl.from(".link-img", 1, {
    scale: 1.1,
    opacity: 0
  })

  // Timeine reverse
  tl.reverse();
  //Click to play Timeline
  toggleBtn.onclick = function(){
    tl.reversed(!tl.reversed());
  }
});
