//module hacklib.js

/** @param {NS} ns */

/*
TODO
1. rewrite flatscan to create an object and pass that for checks, can be updated at set intervals.
*/

export function flat_scan(ns, startPoint, visited) {
	visited.push(startPoint);
	let scan_lst = ns.scan(startPoint);
	for (let i = 0; i < working.length; i++ ){
		if (visited.includes(scan_lst[i]) == false){
			flat_scan(working[i], visited);
		}
	}
	return visited;
}
export function crack_try (ns,target) {
	let count = 0;
    if (ns.fileExists("BruteSSH.exe", "home")) {
		ns.brutessh(target);
		count++;
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
            ns.ftpcrack(target);
			count++;
        }
    if (ns.fileExists("relaySMTP.exe", "home")) {
            ns.relaysmtp(target);
			count++;
        }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
            ns.httpworm(target);
			count++;
        }
    if (ns.fileExists("SQLInject.exe", "home")) {
            ns.sqlinject(target);
			count++;
        }
	if (count >= getServerNumPortsRequired(target)) {
		ns.nuke(target);
	}
}

export function full_kill(ns, startPoint, visited) {
	let kill_list = flatScan("home", []);
	for (var i = 0; i < kill_list.length; i++) {
		killall(kill_list[i]);
    }
}