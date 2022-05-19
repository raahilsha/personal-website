function loadPortfolio1()
{
	// Khalid helped here
	var images = {'img1':'assets/img/portfolio/1/img1.jpg','img2':'assets/img/portfolio/1/img2.jpg','img3':'assets/img/portfolio/1/img3.jpg'};
	$.each(images, function(){
	    $('#images-here').append('<img src="' + this + '" />'); 
	});
}

