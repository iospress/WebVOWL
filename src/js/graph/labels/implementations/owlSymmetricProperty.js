webvowl.labels.owlsymmetricproperty = (function () {

	var o = function () {
		webvowl.labels.BaseLabel.call(this);

		this.styleClass("symmetricproperty")
			.type("owl:SymmetricProperty");
	};
	o.prototype = Object.create(webvowl.labels.BaseLabel.prototype);
	o.prototype.constructor = o;

	return o;
}());