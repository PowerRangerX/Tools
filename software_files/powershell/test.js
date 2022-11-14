let selector = '[name*="message-content-"]';

var elements = document.querySelectorAll(selector);

if(elements) {
	elements.forEach(el=>{console.log(el.name);});
}
