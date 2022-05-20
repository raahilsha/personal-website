var portfolioData = {
  "niagara": {
    "Title": "Niagara Falls",
    "Year": 2018,
    "Description": "A post-graduation road trip with my family",
    "Images": 3,
  },
  "seaport": {
    "Title": "Arboretum -> Seaport",
    "Year": 2018,
    "Description": "A summertime day trip with friends to explore Boston",
    "Images": 8,
  },
  "auburncemetery": {
    "Title": "Mt. Auburn Cemetery",
    "Year": 2018,
    "Description": "As the leaves turned orange, we explored a landscape of remembrance",
    "Images": 8,
  },
  "firstsnow": {
    "Title": "First Snow, November 2018",
    "Year": 2018,
    "Description": "The night of the first snowfall of the season",
    "Images": 4,
  },
  "friendsgiving2018": {
    "Title": "Friendsgiving Dinner",
    "Year": 2018,
    "Description": "Featuring: A turkey that nobody knew how to cook",
    "Images": 5,
  },
  "winterwalk": {
    "Title": "A Midwinter Walk",
    "Year": 2018,
    "Description": "On the first of December, 2018",
    "Images": 7,
  },
  "fallphotoshoot2019": {
    "Title": "Fall Photoshoot",
    "Year": 2019,
    "Description": "Museums, coffeeshops, and more!",
    "Images": 12,
  },
  "charlessunset": {
    "Title": "Sunset over the Charles",
    "Year": 2019,
    "Description": "On a walk to Longfellow Bridge",
    "Images": 6,
  },
  "firstsnow2019": {
    "Title": "First Snow, 2019",
    "Year": 2019,
    "Description": "Spot the dead snowman!",
    "Images": 7,
  },
  "lunareclipse1": {
    "Title": "2019 Lunar Eclipse",
    "Year": 2019,
    "Description": "300mm, f/5.6, 2.5s, ISO 400 | 80mm, f/5.6, 5s, ISO 400",
    "Images": 2,
  },
  "portland1": {
    "Title": "Portland, ME",
    "Year": 2019,
    "Description": "My very first trip to Portland, done by car",
    "Images": 8,
  },
  "colorado": {
    "Title": "Trip to Colorado",
    "Year": 2020,
    "Description": "Spring Break, 2020",
    "Images": 16,
  },
  "bostonaquarium": {
    "Title": "New England Aquarium",
    "Year": 2020,
    "Description": "It's so relaxing to watch the fish go blub blub",
    "Images": 10,
  },
  "newmexico": {
    "Title": "New Mexico",
    "Year": 2020,
    "Description": "Mountains, Sands, and Caves",
    "Images": 8,
  },
  "downtownwalk": {
    "Title": "Downtown Boston Walk",
    "Year": 2020,
    "Description": "I'd like to think that the cat's name is Ferdinand",
    "Images": 6,
  },
  "arboretum2020": {
    "Title": "Arnorld Arboretum",
    "Year": 2020,
    "Description": "A refrain for spring",
    "Images": 6,
  }
};

function generatePortLink(portName)
{
	if (!(portName in portfolioData))
	{
		return;
	}

	var genHTML = "";
	genHTML += '<div class="col-lg-4 portfolio-item p';
	genHTML += portfolioData[portName]["Year"];
	genHTML += '"><div class="image-border"><div class="portfolio-item-content"><img src="assets/img/portfolio/';
	genHTML += portName;
	genHTML += '/cover.jpg" alt="/" class="img-fluid"><div class="img-overlay text-center"><div class="img-overlay-content"><div class="portfolio-icon"><a href="javascript:void();" onclick="loadPortfolio(\'';
	genHTML += portName;
	genHTML += '\')" type="button" data-toggle="modal" data-target="#portfolio-single"><i class="lni-link"></i></a></div><h5 class="mt-3 mb-0">';
	genHTML += portfolioData[portName]["Title"];
	genHTML += '</h5></div></div></div></div></div>';

	$('#portfolio-items-holder').prepend(genHTML);
}

function loadPortfolio(portName)
{
	if (portName in portfolioData)
	{
		$('#portfolio-image-holder').empty();
		$('#portfolio-page-name').text(portfolioData[portName]["Title"]);
		$('#portfolio-page-description').text(portfolioData[portName]["Description"]);
		for (let imgCount = 1; imgCount <= portfolioData[portName]["Images"]; imgCount++)
		{
			$('#portfolio-image-holder')
				.append('<img class="mb-4" src="assets/img/portfolio/' + portName + '/img' + imgCount + '.jpg" />');
		}
	}
}

for (portName in portfolioData)
{
	generatePortLink(portName);
}