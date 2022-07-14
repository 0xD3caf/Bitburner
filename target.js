/** @param {NS} ns */

// module target.js
//import {flat_scan, crack_try} from "hacklib.js"

//should prob convert to not being infinite loop, can be run by composer
function findBestServer(ns, updateCheck) {
	let scan_list = flat_scan("home", []);
	let done = false;
	let target, maxThread, maxHack;
	let maxCash, currServerHackLvl = 0;
	scriptReqRAM = getScriptRam("basic_hack.script", "home");
	while (!done) {
		maxHack = getHackingLevel();
		for (var i = 0; i < scan_list.length; i++) {
			if (hasRootAccess(scan_list[i]) == false) {	//add check here for needed port # and # of scripts
				crack_try(scan_list[i]);
			}
			//convert to best income version here
			if ((getServerMaxMoney(scan_list[i]) > maxCash) && (getServerRequiredHackingLevel(scan_list[i]) >= currServerHackLvl)) {
				if ((maxHack >= getServerRequiredHackingLevel(scan_list[i])) && (hasRootAccess(scan_list[i]) == true)) {
					currServerHackLvl = getServerRequiredHackingLevel(scan_list[i]);
					maxCash = getServerMaxMoney(scan_list[i]);
					target = scan_list[i];
				}
			}
		}
		for (var i = 0; i < scan_list.length; i++) {
			if (hasRootAccess(scan_list[i])) { //check for root access
				if (fileExists("basic_hack.script", scan_list[i]) === false) {
					if (updateCheck == "update") {
						rm("basic_hack.script", scan_list[i])
					}
					scp("basic_hack.script", scan_list[i]);
				}
				if (ps(scan_list[i])["length"] == 0) {
					maxThread = Math.floor((getServerMaxRam(scan_list[i]) / scriptReqRAM));
					if (maxThread > 0) {
						exec("basic_hack.script", scan_list[i], maxThread, target);
					}
				} else if (ps(scan_list[i])[0]["args"][0] !== target) {
					//DANGER DANGER DANGER DANGER DANGER
					//killall(scan_list[i]);
					//sleep(5000);
					//DANGER DANGER DANGER DANGER DANGER
					kill("basic_hack.script", scan_list[i], ps(scan_list[i])[0]["args"][0]);
					maxThread = Math.floor((getServerMaxRam(scan_list[i]) / scriptReqRAM));
					if (maxThread > 0) {
						exec("basic_hack.script", scan_list[i], maxThread, target);
					}
				}
			}
		}
		sleep(60000);
	}
}