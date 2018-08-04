class Client {
	
	constructor(application_id, region = "na") {
		this.application_id = application_id;
		if (region === "na") region = "com";
		this.region = region;
	}
	
}

module.exports = {
	Client,
};