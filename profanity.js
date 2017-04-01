
//var words = {"ass": /[\u1F300-\u1F6FF]/}

var matchText = function(node, regex, callback, excludeElements) { 

    excludeElements || (excludeElements = ['script', 'style', 'iframe', 'canvas']);
    var child = node.firstChild;

    do {
    	if (!child) return;
        switch (child.nodeType) {
        case 1:
            if (excludeElements.indexOf(child.tagName.toLowerCase()) > -1) {
                continue;
            }
            matchText(child, regex, callback, excludeElements);
            break;
        case 3:
           child.data.replace(regex, function(all) {
                var args = [].slice.call(arguments),
                    offset = args[args.length - 2],
                    newTextNode = child.splitText(offset);

                newTextNode.data = newTextNode.data.substr(all.length);
                callback.apply(window, [child].concat(args));
                child = newTextNode;
            });
            break;
        }
    } while (child = child.nextSibling);

    return node;
}

function main() {

// var smiley = new Image()
// smiley.src = 'images/emoji/smiley.png'
// "<img src='images/emoji/smiley.png' alt='smiley'/>"

//var words = {"ass": smiley}


var words = {"ass": '<img src="http://i.imgur.com/Q4Tp80i.png" />',
"fuck": '<img src="http://i.imgur.com/BcwEe0O.png" />',
"shit": '<img src="http://i.imgur.com/nrist2F.png" />',
"bitch": '<img src="http://i.imgur.com/T5tvR5r.png" />',
"fucking": '<img src="http://i.imgur.com/3DyNJzB.png" />',
"ugly": '<img src="http://i.imgur.com/Ibee4uz.png" />',
"whore": '<img src="http://i.imgur.com/T5tvR5r.png" />',
"slut": '<img src="http://i.imgur.com/T5tvR5r.png" />',
"loser": '<img src="http://i.imgur.com/M6ilyeI.png" />',
}
var replaceTextInNode = function(parentNode, key){
	    		matchText(parentNode, new RegExp("\\b" + key + "\\b", "ig"), function(node2, match, offset) {
    			//var smiley = document.createElement(words[key]);
    			var span = document.createElement('span');
				span.innerHTML = words[key];
    			node2.parentNode.insertBefore(span, node2.nextSibling); 
			});
};


for (let key in words) {

	replaceTextInNode(document.body, key);
	document.body.innerHTML = document.body.innerHTML.replace('<img src="images/emoji/smiley.png" />', '<img src="images/emoji/smiley.png" />');
}

}

document.addEventListener('DOMContentLoaded', main());