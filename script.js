
var text = {
	"home" : "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",

	"profile" : "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.",

	"mdo" : "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.",

	"fat" : "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
};

var message = document.querySelector("#message");
var button1 = document.querySelector("#target1");
var button2 = document.querySelector("#target2");
var button3 = document.querySelector("#elem1");
var button4 = document.querySelector("#elem2");

button1.onclick = function() {
	button1.setAttribute("data-btn-val", text.home);
	message.innerHTML= button1.getAttribute("data-btn-val");
};

button2.onclick = function() {
	button2.setAttribute("data-btn-val", text.profile);
	message.innerHTML= button2.getAttribute("data-btn-val");
};

button3.onclick = function() {
	button3.setAttribute("data-btn-val", text.mdo);
	message.innerHTML= button3.getAttribute("data-btn-val");
};

button4.onclick = function() {
	button4.setAttribute("data-btn-val", text.fat);
	message.innerHTML= button4.getAttribute("data-btn-val");
};
	

target3.onclick = function() {
	if (document.getElementById("dropdown_container").style.display =="none") {
		document.getElementById("dropdown_container").style.display = "block";
	} else {
		document.getElementById("dropdown_container").style.display = "none";
	}
};

