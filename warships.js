class Client {
	
	constructor(application_id, region = "na") {
		this.application_id = application_id;
		if (region === "na") region = "com";
		this.region = region;
	}
	
	// Account Methods
	getPlayers(queries = {}) {}
	getPlayerPersonalData(queries = {}) {}
	getPlayersAchievements(queries = {}) {}
	getPlayerStatistics(queries = {}) {}
	
	// Encyclopedia Methods
	getEncycloInformation(queries = {}) {}
	getEncycloWarships(queries = {}) {}
	getEncycloAchievements(queries = {}) {}
	getEncycloShipParameters(queries = {}) {}
	getEncycloModules(queries = {}) {}
	getEncycloServiceRecordInformation(queries = {}) {}
	getEncycloCommanders(queries = {}) {}
	getEncycloCommanderSkills(queries = {}) {}
	getEncycloCommanderRanks(queries = {}) {}
	getEncycloBattleTypes(queries = {}) {}
	getEncycloConsumables(queries = {}) {}
	getEncycloCollections(queries = {}) {}
	getEncycloCollectionItems(queries = {}) {}
	getEncycloMaps(queries = {}) {}
	
	// Warship Methods
	getStatisticsOfPlayersShips(queries = {}) {}
	
	// Seasons Methods
	getRankedBattlesSeasons(queries = {}) {}
	getShipStatisticsInRankedBattles(queries = {}) {}
	getPlayersStatisticsInRankedBattles(queries = {}) {}
	
	// Clan Methods
	getClans(queries = {}) {}
	getClanDetails(queries = {}) {}
	getPlayerClanData(queries = {}) {}
	getClanGlossary(queries = {}) {}
	getClanBattleSeasons(queries = {}) {}
	
}

const account = {
	getPlayers(application_id, region, queries = {}) {},
	getPlayerPersonalData(application_id, region, queries = {}) {},
	getPlayersAchievements(application_id, region, queries = {}) {},
	getPlayerStatistics(application_id, region, queries = {}) {},
};
const encyclopedia = {
	getEncycloInformation(application_id, region, queries = {}) {},
	getEncycloWarships(application_id, region, queries = {}) {},
	getEncycloAchievements(application_id, region, queries = {}) {},
	getEncycloShipParameters(application_id, region, queries = {}) {},
	getEncycloModules(application_id, region, queries = {}) {},
	getEncycloServiceRecordInformation(application_id, region, queries = {}) {},
	getEncycloCommanders(application_id, region, queries = {}) {},
	getEncycloCommanderSkills(application_id, region, queries = {}) {},
	getEncycloCommanderRanks(application_id, region, queries = {}) {},
	getEncycloBattleTypes(application_id, region, queries = {}) {},
	getEncycloConsumables(application_id, region, queries = {}) {},
	getEncycloCollections(application_id, region, queries = {}) {},
	getEncycloCollectionItems(application_id, region, queries = {}) {},
	getEncycloMaps(application_id, region, queries = {}) {},
};
const warships = {
	getStatisticsOfPlayersShips(application_id, region, queries = {}) {},
};
const seasons = {
	getRankedBattlesSeasons(application_id, region, queries = {}) {},
	getShipStatisticsInRankedBattles(application_id, region, queries = {}) {},
	getPlayersStatisticsInRankedBattles(application_id, region, queries = {}) {},
};
const clans = {
	getClans(application_id, region, queries = {}) {},
	getClanDetails(application_id, region, queries = {}) {},
	getPlayerClanData(application_id, region, queries = {}) {},
	getClanGlossary(application_id, region, queries = {}) {},
	getClanBattleSeasons(application_id, region, queries = {}) {},
};

module.exports = {
	Client,
	account,
	encyclopedia,
	warships,
	seasons,
	clans,
};