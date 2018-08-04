const WorldOfTanks = require('./tanks');
const WorldOfWarplanes = require('./warplanes');
const WorldOfWarships = require('./warships');

const rp = require('request-promise-native');

/**
 * Client class
 * @see Client#constructor
 */
class Client {
	
	/**
	 * Client class constructor
	 * @param {string} application_id WarGaming Application ID
	 * @param {string} region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 */
	constructor(application_id, region = "na") {
		/**
		 * @private
		 */
		this.application_id = application_id;
		if (region === "na") region = "com";
		/**
		 * @private
		 */
		this.region = region;
	}
	
	// Clients
	/**
	 * Create a Client object used to access WoT API methods.
	 * @returns {Client}
	 */
	getTanksClient() {
		return new WorldOfTanks.Client(this.application_id, this.region);
	}
	
	/**
	 * Create a Client object used to access WoWp API methods.
	 * @returns {Client}
	 */
	getWarplanesClient() {
		return new WorldOfWarplanes.Client(this.application_id, this.region);
	}
	
	/**
	 * Create a Client object used to access WoWs API methods.
	 * @returns {Client}
	 */
	getWarshipsClient() {
		return new WorldOfWarships.Client(this.application_id, this.region);
	}
	
	// Account Methods
	/**
	 * Method returns partial list of players who have ever accessed
	 * in any WarGaming game. The list is filtered by name or by
	 * initial characters of user name and sorted alphabetically.
	 * @param search Player name search string. Parameter "type"
	 * defines minimum length and type of search. Using the exact
	 * search type, you can enter several names, separated with
	 * commas. Maximum length: 24.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getListOfAccounts(search, queries = {}) {
		return accounts.getListOfAccounts(this.application_id, this.region, search, queries);
	}
	
	/**
	 * Method returns WarGaming account details.
	 * @param account_id Player ID. Maximum limit: 100.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getAccountInformation(account_id, queries = {}) {
		return accounts.getAccountInformation(this.application_id, this.region, account_id, queries);
	}
	
	// Clan Methods
	/**
	 * Method searches and sorts clans by the following logic:
	 *  - exact match of clan tag placed first
	 *  - exact match of clan name placed secod
	 *  - name or tag matches are placed next
	 *  - all comparisons are performed case insensitive
	 *  - expression [wg] is converted to wg and considered as
	 *  the tag
	 *  - search expression "[wg] clan" is performmed by exact
	 *  match of clan name and tag
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClans(queries = {}) {
		return clans.getClans(this.application_id, this.region, queries);
	}
	
	/**
	 * Method returns detailed clan information. Information
	 * is available for World of Tanks and World of Warplanes
	 * clans.
	 * @param clan_id Clan ID. Maximum limit: 100.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanDetails(clan_id, queries = {}) {
		return clans.getClanDetails(this.application_id, this.region, clan_id, queries);
	}
	
	/**
	 * Method returns clan member info and short info on the
	 * clan. Information is available for World of Tanks and
	 * World of Warplanes clans.
	 * @param account_id Account ID Maximum limit: 100. Min
	 * value is 1.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanMemberDetails(account_id, queries = {}) {
		return clans.getClanMemberDetails(this.application_id, this.region, account_id, queries);
	}
	
	/**
	 * Method returns information on clan entities in World
	 * of Tanks and World of Warplanes.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanGlossary(queries = {}) {
		return clans.getClanGlossary(this.application_id, this.region, queries);
	}
	
	/**
	 * Method returns messages of clan message board.
	 * @param access_token Access token for the private data of
	 * a user's account; can be received via the authorization
	 * method; valid within a stated time period
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getMessageBoard(access_token, queries = {}) {
		return clans.getMessageBoard(this.application_id, this.region, access_token, queries);
	}
	
	/**
	 * Method returns information about player's clan history.
	 * Data on 10 last clan members are presented in the response.
	 * @param account_id Account ID. Min value is 1.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getPlayersClanHistory(account_id, queries = {}) {
		return clans.getPlayersClanHistory(this.application_id, this.region, account_id, queries);
	}
	
	// WGTV Methods
	/**
	 * Method returns lists of game projects, categories,
	 * and programs.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVTags(queries = {}) {
		return wgtv.getWGTVTags(this.application_id, this.region, queries);
	}
	
	/**
	 * Method returns list of videos filtered by the specified
	 * parameter.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVListOfVideos(queries = {}) {
		return wgtv.getWGTVListOfVideos(this.application_id, this.region, queries);
	}
	
	/**
	 * Method returns list of vehicles sorted by games and
	 * covered by videos.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVVehicles(queries = {}) {
		return wgtv.getWGTVVehicles(this.application_id, this.region, queries);
	}
	
	// Server Methods
	/**
	 * Method returns the number of online players on the
	 * servers.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getServerOnlinePlayers(queries = {}) {
		return servers.getServerOnlinePlayers(this.application_id, this.region, queries);
	}
	
}

const accounts = {
	/**
	 * Method returns partial list of players who have ever accessed in
	 * any WarGaming game. The list is filtered by name or by initial
	 * characters of user name and sorted alphabetically.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param search Player name search string. Parameter "type"
	 * defines minimum length and type of search. Using the exact
	 * search type, you can enter several names, separated with
	 * commas. Maximum length: 24.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getListOfAccounts(application_id, region, search, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, search});
		return rp({
			uri: `https://api.worldoftanks.${region}}/wgn/account/list/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns WarGaming account details.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param account_id Player ID. Maximum limit: 100.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getAccountInformation(application_id, region, account_id, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, account_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/account/info/`,
			qs: queries,
			json: true,
		});
	}
};

const clans = {
	/**
	 * Method searches and sorts clans by the following logic:
	 *  - exact match of clan tag placed first
	 *  - exact match of clan name placed secod
	 *  - name or tag matches are placed next
	 *  - all comparisons are performed case insensitive
	 *  - expression [wg] is converted to wg and considered as
	 *  the tag
	 *  - search expression "[wg] clan" is performmed by exact
	 *  match of clan name and tag
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClans(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/list/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns detailed clan information. Information
	 * is available for World of Tanks and World of Warplanes
	 * clans.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param clan_id Clan ID. Maximum limit: 100.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanDetails(application_id, region, clan_id, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, clan_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/info/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns clan member info and short info on the
	 * clan. Information is available for World of Tanks and
	 * World of Warplanes clans.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param account_id Account ID Maximum limit: 100. Min
	 * value is 1.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanMemberDetails(application_id, region, account_id, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, account_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/membersinfo/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns information on clan entities in World
	 * of Tanks and World of Warplanes.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getClanGlossary(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/glossary/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns messages of clan message board.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param access_token Access token for the private data of
	 * a user's account; can be received via the authorization
	 * method; valid within a stated time period
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getMessageBoard(application_id, region, access_token, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, access_token});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/messageboard/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns information about player's clan history.
	 * Data on 10 last clan members are presented in the response.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param account_id Account ID. Min value is 1.
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getPlayersClanHistory(application_id, region, account_id, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id, account_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/clans/memberhistory/`,
			qs: queries,
			json: true,
		});
	},
};

const wgtv = {
	/**
	 * Method returns lists of game projects, categories,
	 * and programs.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVTags(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/wgtv/wgs/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns list of videos filtered by the specified
	 * parameter.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVListOfVideos(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/wgtv/videos/`,
			qs: queries,
			json: true,
		});
	},
	
	/**
	 * Method returns list of vehicles sorted by games and
	 * covered by videos.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getWGTVVehicles(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/wgtv/vehicles/`,
			qs: queries,
			json: true,
		});
	}
};

const servers = {
	/**
	 * Method returns the number of online players on the
	 * servers.
	 * @param application_id WarGaming Application ID
	 * @param region What region's API to access. Either
	 * "na", "eu", "ru", or "asia".
	 * @param queries An object containing additional optional
	 * parameters to query for.
	 * @returns Promise
	 */
	getServerOnlinePlayers(application_id, region, queries = {}) {
		if (region === "na") region = "com";
		Object.assign(queries, {application_id});
		return rp({
			uri: `https://api.worldoftanks.${region}/wgn/servers/info/`,
			qs: queries,
			json: true,
		});
	}
};

module.exports = {
	Client,
	WorldOfTanks,
	WorldOfWarplanes,
	WorldOfWarships,
	accounts,
	clans,
	wgtv,
	servers,
};
