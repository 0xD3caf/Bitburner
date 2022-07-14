// module get_server_info.js

/** @param {NS} ns */

export async function map_to_file(ns) {
    var servers = ["home"];
    ns.clear("spider.txt");
    for (let i = 0; i < servers.length; ++i) {
        let hostname = servers[i];
        await ns.write("spider.txt", hostname
            + "," + ns.getServerMaxRam(hostname)
            + "," + ns.getServerNumPortsRequired(hostname)
            + "," + ns.getServerRequiredHackingLevel(hostname)
            + "," + ns.getServerMaxMoney(hostname)
            + "," + ns.getServerMinSecurityLevel(hostname)
            + "," + ns.getServerGrowth(hostname)
            + "\r\n");

        let newScan = ns.scan(hostname);
        for (let j = 0; j < newScan.length; j++) {
            if (servers.indexOf(newScan[j]) == -1) {
                servers.push(newScan[j]);
            }
        }
    }
    ns.tprint("Network mapped");
}