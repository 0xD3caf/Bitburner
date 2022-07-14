// module map_to_file.js

/** @param {NS} ns */
export async function main(ns) {
    await map_to_file(ns);
}

export async function map_to_file(ns) {
    let unsorted_server_list = []
    let servers = ["home"];
    ns.clear("spider.txt");
    for (let i = 0; i < servers.length; ++i) {
        let hostname = servers[i];
        let server_score = Math.floor(100 - ((ns.getServerMinSecurityLevel(hostname)) * (ns.getServerMaxMoney(hostname)) * (ns.getServerGrowth(hostname)) / (ns.getHackTime(hostname))));
        let working_list = [];
        working_list.push(hostname);
        working_list.push(ns.getServerMaxRam(hostname));
        working_list.push(ns.getServerNumPortsRequired(hostname));
        working_list.push(ns.getServerRequiredHackingLevel(hostname));
        working_list.push(ns.getServerMaxMoney(hostname));
        working_list.push(ns.getServerMinSecurityLevel(hostname));
        working_list.push(ns.getServerGrowth(hostname));
        working_list.push(server_score);
        ns.tprint(working_list);
        //await ns.write("spider.txt", hostname    
        //make a 3d list then at end turn to string
        let newScan = ns.scan(hostname);
        for (let j = 0; j < newScan.length; j++) {
            if (servers.indexOf(newScan[j]) == -1) {
                servers.push(newScan[j]);
            }
        }
    }
    /*let sorted_server_list = unsorted_server_list.sort(function(a = unsorted_server_list.slice(),b){return a > b})
    for (let i = 0; i < sorted_server_list.length; i++){
        continue
    }*/
    ns.tprint("Network mapped");
}