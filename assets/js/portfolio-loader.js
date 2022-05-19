var portfolioData = {
  "NiagaraFalls": {
    "Title": "Niagara Falls",
    "Description": "A post-graduation field trip with my family",
    "Images": [
      "assets/img/portfolio/1/img1.jpg",
      "assets/img/portfolio/1/img2.jpg",
      "assets/img/portfolio/1/img3.jpg"
    ]
  }
};

function loadPortfolio(portName)
{
	if (portName in portfolioData)
	{
		$('#portfolio-image-holder').empty();
		$('#portfolio-page-name').text(portfolioData[portName]["Title"]);
		$('#portfolio-page-description').text(portfolioData[portName]["Description"]);
		$.each(portfolioData[portName]["Images"], function(){
	    	$('#portfolio-image-holder').append('<img class="mb-4" src="' + this + '" />'); 
		});
	}
}
