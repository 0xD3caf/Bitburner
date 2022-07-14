//module workers.js

/** @param {NS} ns */
var poll_time = 60;					//var to sec duration of sleep timer IN SECONDS

export function growhack_worker(ns, target) {
	let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
	let done = false;
	while (!done) {
		if (ns.getServerMoneyAvailable < moneyThresh){
			ns.grow(target);
		}else{
			ns.hack(target);
		}
	}
}

export function weaken_worker(ns, target) {
	//base worker for weakening, takes server to lowest possible, if lowest sleeps for poll time
	let securityThresh = ns.getServerMinSecurityLevel(target);
	let done = false;
	while (!done) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			ns.weaken(target);
		}else {
			sleep(poll_time * 1000);
		}
	}
}