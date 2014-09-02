$(function () {
	
	//variables
	var br = "<br>";
	var	d = new Date();
	var letter = {
		"date": (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear(), 
		'myAddress': "2625 W. McNair St.",
		'myCityStateZip':"Chandler, AZ 85224",
		"introSent": "I am writing about your job posting for a ",
		"htmlcss": ["I am adept at creating user interfaces in Html & CSS. ", "I have mastery of HTML and CSS. "],
		"javascript": ["I have experience with javascript libraries such as knockout.js, handlebars.js and require.js. ",
						"I have built frontend functionality for webapps with jQuery, Knockout, and Bootstrap. "],
		"php": ["I have used php for server side applications using an MVC framework. ", "I often work from a php server technology. "],
		"cSharp": "I have experience and train in c#.NET for a server language, including Entity Framework and cshtml. ",
		"vbDotNet" : ["I have training in VB.NET. ", "Visual Basic is a language I have studied, in a .NET environment. "],
		"javaSun": ["I have extensive java and open source development experience. ", "Java and other open source tools have been used in my web projects. "],
		"sqlSlashMySql": ["I can build, maintain and query SQL databases, in both MySql and SQL Server. ", "My skills include writing and debugging queries, reports and stored procedures in SQL Server and MySql. "],
		"leadership": ["I've had numerous experiences as a leader, both small and large teams. ", "My educational background includes motivating, engaging and evaluating students and employees. "],
		"training": ["Having taught in the public school system as well as leading staff developments in my previous job, I have a knack and a love of training and learning. ", "I would like to not only learn and innovate in new technologies, but also transfer new information out to colleagues. "],
		"collaboration": ["I lthrive on working collaboratively and would love to work and develop in an Agile/scrum environment.", "Teamwork and communication are cornerstones of my professional philosphy."],
		"changeMgmt": ["I live for change. ", "My ideal situation is a fast-paced, ever-changing workplace"],
		"writing": ["I am an experienced, published writer. ", "I have excellent written communication skills. "],
		"followup" : "I will follow up on this letter by email within the next two weeks. ",
		"thankyou": "Thank you for reviewing my resume and I look forward to working together.",
		"closing": ["Sincerely, ", "Regards, "],
		"signature": "Rick Larsen",
		"myEmail": "ricklarsen4@yahoo.com",
		"myPhone": "480.650.3393"
	};

	var coinFlip = function  (options) {
		var result = Math.floor(Math.random() * 2 );
		return result;
	}

	
	//functions
	var onCreateClick = function() {
		// reset output fields
		$('.letterResults').text("");
		$('input').css('background','white');
		$('.errorMessage').text("");
		$('.instructions3').hide();
		var mgrName = $('.hiringManager');
		var companyName = $('.companyName');
		var address1 = $('.addressOne');
		var address2 = $('.addressTwo');
		var city = $('.city');
		var state = $('.state');
		var zip = $('.zip');
		var jobTitle = $('.jobTitle');

		//this array list all required fields 
		var inputs = [mgrName,companyName,address1,city,state,zip];
		var letterReady = true;
		//validate fields are not blank
		for (i in inputs) {
			var msg = inputs[i].attr('placeholder');
			if (inputs[i].val() == 0) {
				$('.errorMessage').append("Please Enter " + msg+ "<br>");
				letterReady = false;
			} else {
				letterReady = true;
			}			
		}

		if (state.val().length != 2) {
			$('.errorMessage').append("Please Enter a Valid State." + br);
			letterReady = false;
		}

		if (zip.val().length != 5) {
			$('.errorMessage').append('Please Enter a Valid Zip Code.' + br);
			letterReady = false;
		}

		if (jobTitle.val() == 0){
			$('.errorMessage').append('Please Enter Job Title You Are Seeking.' + br);
			letterReady = false;
		}

		//build string
		if (letterReady == true) {
			$('.letterStuff').show();
			letter.mgrName = mgrName.val();
			letter.companyName = companyName.val();
			letter.address1 = address1.val();
			letter.address2 = address2.val();
			letter.city = city.val();
			letter.state = state.val();
			letter.zip = zip.val();
			letter.salutation = "Dear " + mgrName.val() + ":";

		//get values for tech skills checked.
		var techSkills = [
			document.getElementById('htmlcss'),
			document.getElementById('javascript'),
			document.getElementById('php'),	
			document.getElementById('cSharp'),
			document.getElementById('vbDotNet'),
			document.getElementById('javaSun'),
			document.getElementById('sqlSlashMySql')
		];

		var softSkills = [
			document.getElementById('leadership'),
			document.getElementById('training'),
			document.getElementById('collaboration'),
			document.getElementById('changeMgmt'),
			document.getElementById('writing')
		];

		var requiredSkills = [];
		var desiredSkills = [];

		$('.letterResults').append(letter.date + br + br +
				letter.myAddress + br + letter.myCityStateZip + br + br +
				letter.mgrName + br + letter.address1 + "&nbsp;" + letter.address2 + br +
				letter.city + ", " + letter.state + " " + letter.zip + br + br +
				letter.salutation + br + letter.introSent + jobTitle.val() + ". " );
		}		
		for (i in techSkills) {
			if (techSkills[i].checked == true) {
				requiredSkills.push(techSkills[i]);
			}
		}

		for (i in softSkills) {
			if (softSkills[i].checked == true) {
				desiredSkills.push(softSkills[i]);
			}
		}

		for (i in requiredSkills) {
			$('.letterResults').append(letter[requiredSkills[i].id][coinFlip(2)]);
		}

		$('.letterResults').append(br + br + br);

		for (i in desiredSkills) {
			$('.letterResults').append(letter[desiredSkills[i].id][coinFlip(2)]);
		}

		$('.letterResults').append(br + br +br);

		if (letterReady == true) {
			$('.letterResults').append(letter.followup + letter.thankyou + br + br + letter.closing[coinFlip(2)] + br + br + letter.signature +
							br + letter.myEmail + br + letter.myPhone);
		}

	}

	var nextInfoClick = function () {
		$('.techSkills').show();
		$('.jobTitle').focus();
		$('.instructions1').hide();
		$('.instructions2').show();
	}

	var nextTechClick = function () {
		$('.softSkills').show();
		$('.instructions2').hide();
		$('.instructions3').show();
	}

	var printVersionClick = function() {
		$('.mainForm').hide();
	}

	var tryAgainClick = function() {
		$('.mainForm').show();
	}

	//event handlers
	$('.hiringManager').focus();
	$('.createLetter').on("click", onCreateClick);
	$('.nextInfo').on('click',nextInfoClick);
	$('.nextTech').on('click',nextTechClick);
	$('.printVersion').on('click', printVersionClick);
	$('.tryAgain').on('click',tryAgainClick);
});