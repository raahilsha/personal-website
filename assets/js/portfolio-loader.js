var portfolioData = {
  "niagara": {
    "Title": "Niagara Falls",
    "Description": "A post-graduation road trip with my family",
    "Images": 3,
  },

  "seaport": {
    "Title": "Arboretum -> Seaport",
    "Description": "A summertime day trip with friends to explore Boston",
    "Images": 8,
  }
};

function loadPortfolio(portName)
{
	if (portName in portfolioData)
	{
		$('#portfolio-image-holder').empty();
		$('#portfolio-page-name').text(portfolioData[portName]["Title"]);
		$('#portfolio-page-description').text(portfolioData[portName]["Description"]);
		for (let imgCount = 1; imgCount <= portfolioData[portName]["Images"]; imgCount++)
		{
			$('#portfolio-image-holder').append('<img class="mb-4" src="assets/img/portfolio/' + portName + '/img' + imgCount + '.jpg" />');
		}
	}
}
