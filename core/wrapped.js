jQuery.wrapped = function(){
	var args = jQuery.makeArray(arguments),
	    selector = args.shift(),
	    context =  args.shift(),
		method = args.shift(), 
		q, a;

	//if (_win().jQuery && parseFloat(_win().jQuery().jquery) >= 1.3) {
	//	var a = _win().jQuery(selector, context);
	//    q = jQuery(a.get());
	//} else {
	    q = jQuery(selector, context);
	//}
	
	//need to conver to json
	var res = q[method].apply(q, args);
    
    return jQuery.toJSON(res.jquery ? true : res)
}
_doc = function(){
	return selenium.browserbot.getCurrentWindow().document
}
_win = function(){
	return selenium.browserbot.getCurrentWindow()
}