function myObjectCreate(obj) {
	function Func() {}
	Func.prototype = obj;
	return new Func();
}
