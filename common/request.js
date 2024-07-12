import network from "./network.js";

const getHomeData = function(data) {
	return network({
		url: "cloud-mall",
		data: {
			module: "home",
			action: "index",
			data
		},
		isShowLoading: false
	})
}