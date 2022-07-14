/** @param {NS} ns */
export function main(ns, target) {
	basic_hack(ns, target);
}
export function basic_hack(ns, target) {
	let RAM_req = ((ns.getScriptRam("hack_workers.js", "home") * 6) + ns.getScriptRam("weaken_worker.js", "home"));
	let allowedRAM = ns.getServerMaxRam("home") - 64;
	if ((allowedRAM > 0) && (allowedRAM >= RAM_req)) {
		let RAM_mult = Math.floor(allowedRAM / RAM_req);
		for (let i = 0; i < RAM_mult; i++) {
			//NEEDS EDITING
			//ns.exec("hack_workers.js", "home", 6, target);
			//ns.exec("weaken_worker.js", "home", 1, target);
			ns.exec("basic_hack.script", "home", 6, target);
		}
	}
}