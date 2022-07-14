/** @param {NS} ns */
//{hostname, maxRAM, port #, hacklvl, max $, minsec, growth}

export function main(ns) {
	find_best_server(ns);
}
export async function find_best_server(ns) {
	let server_list = ns.read("spider.txt").split("\n");
	for (let i = 0; i < server_list.length; i++) {
		let server_info = server_list[i].slice(0, -2);
		
	}
}