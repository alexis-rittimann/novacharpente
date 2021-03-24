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
