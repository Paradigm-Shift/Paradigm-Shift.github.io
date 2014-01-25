
function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener)
     elem.addEventListener (eventType,handler,false);
 else if (elem.attachEvent)
     elem.attachEvent ('on'+eventType,handler); 
}
var img_on = document.getElementsByClassName("on")
addEventHandler(img_on,'onclick',classToggle(img_on));
var player = {
    ore: 9,
    processors: 0,
    electricity: 0,
    metal: 9,
    alloy: 9,
    ore_per_second_view: 0,
    processors_per_second_view: 0,
    electricity_per_second_view: 0,
    metal_per_second_view: 0,
    alloy_per_second_view: 0,
    ore_per_time_wedge: 0,
    processors_per_time_wedge: 0,
    electricity_per_time_wedge: 0,
    ore_automatic_transform: 0,
    metal_automatic_transform: 0,
    robot_electricity_change: 0,
    robot_electricity_add_change: 0,
    robots: 0,
    mine_automatic_wedge_on: false,
    processors_automatic_wedge_on: false,
    electricity_automatic_wedge_on: false,
    ore_automatic_transform_on: false,
    metal_automatic_transform_on: false,
    metal_discovered: false,
    alloy_discovered: false,
    robot_discovered: false,
    robot_1_bought: false,
    robot_2_bought: false,
    robot_3_bought: false,
    robot_4_bought: false,
    robot_5_bought: false,
    robot_6_bought: false,
    robot_7_bought: false,
    robot_8_bought: false,
    robot_9_bought: false,
    robot_10_bought: false,
    robot_1_selected: false,
    robot_2_selected: false,
    robot_3_selected: false,
    robot_4_selected: false,
    robot_5_selected: false,
    robot_6_selected: false,
    robot_7_selected: false,
    robot_8_selected: false,
    robot_9_selected: false,
    robot_10_selected: false,
    robot_1_is_generating_electricity: false,
    robot_2_is_generating_electricity: false,
    robot_3_is_generating_electricity: false,
    robot_4_is_generating_electricity: false,
    robot_5_is_generating_electricity: false,
    robot_6_is_generating_electricity: false,
    robot_7_is_generating_electricity: false,
    robot_8_is_generating_electricity: false,
    robot_9_is_generating_electricity: false,
    robot_10_is_generating_electricity: false,
    robot_electricity_add: 0,
    robot_electricity_1_add_number: 1,
    robot_electricity_2_add_number: 1,
    robot_electricity_3_add_number: 1,
    robot_electricity_4_add_number: 1,
    robot_electricity_5_add_number: 1,
    robot_electricity_6_add_number: 1,
    robot_electricity_7_add_number: 1,
    robot_electricity_8_add_number: 1,
    robot_electricity_9_add_number: 1,
    robot_electricity_10_add_number: 1,
    whatever_area: 10,
    whatever_area_name: "10px"
};

function orePlusManual() {
    if (player.ore == 10) {
        return;
    }
    player.ore++;
    update_total_clicks();
    if (player.ore == 10) {
        if (player.metal_discovered === false) {
            document.getElementById("ore_to_metal_manual_discovered").innerHTML = "Ore to Metal";
            document.getElementById("ore_to_metal_automatic_discovered").innerHTML = "Ore to Metal";
            document.getElementById("metal_discovered").innerHTML = "Metal:";
            player.metal_discovered = true;
        }
    }
}

function processorsPlusManual() {
    if (player.processors == 10) {
        return;
    }
    player.processors++;
    update_total_clicks();
}

function electricityPlusManual() {
    if (player.electricity == 10) {
        return;
    }
    player.electricity++;
    update_total_clicks();
}

function oreToMetalManual() {
    if (player.metal == 10) {
        return;
    }
    if (player.ore == 10) {
        player.ore -= 10;
        player.metal++;
        if (player.alloy_discovered === false) {
            if (player.metal == 10) {
                document.getElementById("metal_to_alloy_manual_discovered").innerHTML = "Metal to Alloy";
                document.getElementById("metal_to_alloy_automatic_discovered").innerHTML = "Metal to Alloy";
                document.getElementById("alloy_discovered").innerHTML = "Alloy:";
                player.alloy_discovered = true;
            }
        }
    }
    update_total_clicks();
}

function metalToAlloyManual() {
    if (player.alloy == 10) {
        return;
    }
    if (player.metal == 10) {
        player.metal -= 10;
        player.alloy++;
        if (player.alloy == 10) {
            if (player.robot_discovered === false) {
                document.getElementById("robot_tab").innerHTML = "Robots";
                document.getElementById("robot_1_text").innerHTML = "Buy Robot 1";
                document.getElementById("robot_2_text").innerHTML = "Buy Robot 2";
                document.getElementById("robot_3_text").innerHTML = "Buy Robot 3";
                document.getElementById("robot_4_text").innerHTML = "Buy Robot 4";
                document.getElementById("robot_5_text").innerHTML = "Buy Robot 5";
                document.getElementById("robot_6_text").innerHTML = "Buy Robot 6";
                document.getElementById("robot_7_text").innerHTML = "Buy Robot 7";
                document.getElementById("robot_8_text").innerHTML = "Buy Robot 8";
                document.getElementById("robot_9_text").innerHTML = "Buy Robot 9";
                document.getElementById("robot_10_text").innerHTML = "Buy Robot 10";
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_discovered = true;
            }
        }
    }
    update_total_clicks();
}

function mineAutomatic() {
    if (player.mine_automatic_wedge_on === true) {
        player.mine_automatic_wedge_on = false;
        document.getElementById("mining_wedge_on").innerHTML = "Turn on mining";
        player.ore_per_time_wedge = 0;
        document.getElementById("mine_automatic").style.backgroundColor = "grey";
        return;
    }
    if (player.processors_automatic_wedge_on === true) {
        player.processors_automatic_wedge_on = false;
        document.getElementById("processors_wedge_on").innerHTML = "Turn on building";
        player.processors_per_time_wedge = 0;
        document.getElementById("processors_automatic").style.backgroundColor = "grey";
    }
    if (player.electricity_automatic_wedge_on === true) {
        player.electricity_automatic_wedge_on = false;
        document.getElementById("electricity_wedge_on").innerHTML = "Turn on generation";
        player.electricity_per_time_wedge = 0;
        document.getElementById("electricity_automatic").style.backgroundColor = "grey";
    }
    player.mine_automatic_wedge_on = true;
    player.ore_per_time_wedge = 1;
    document.getElementById("mining_wedge_on").innerHTML = "Mining is on!";
    document.getElementById("mine_automatic").style.backgroundColor = "red";
};

function processorsAutomatic() {
    if (player.processors_automatic_wedge_on === true) {
        player.processors_automatic_wedge_on = false;
        document.getElementById("processors_wedge_on").innerHTML = "Turn on building";
        player.processors_per_time_wedge = 0;
        document.getElementById("processors_automatic").style.backgroundColor = "grey";
        return;
    }
    if (player.mine_automatic_wedge_on === true) {
        player.mine_automatic_wedge_on = false;
        document.getElementById("mining_wedge_on").innerHTML = "Turn on mining";
        player.ore_per_time_wedge = 0;
        document.getElementById("mine_automatic").style.backgroundColor = "grey";
    }
    if (player.electricity_automatic_wedge_on === true) {
        player.electricity_automatic_wedge_on = false;
        document.getElementById("electricity_wedge_on").innerHTML = "Turn on generation";
        document.getElementById("electricity_automatic").style.backgroundColor = "grey";
        player.electricity_per_time_wedge = 0;
    }
    player.processors_automatic_wedge_on = true;
    player.processors_per_time_wedge = 1;
    document.getElementById("processors_wedge_on").innerHTML = "Building is on!";
    document.getElementById("processors_automatic").style.backgroundColor = "red";
};

function electricityAutomatic() {
    if (player.electricity_automatic_wedge_on === true) {
        player.electricity_automatic_wedge_on = false;
        document.getElementById("electricity_wedge_on").innerHTML = "Turn on generation";
        player.electricity_per_time_wedge = 0;
        document.getElementById("electricity_automatic").style.backgroundColor = "grey";
        return;
    }
    if (player.mine_automatic_wedge_on === true) {
        player.mine_automatic_wedge_on = false;
        document.getElementById("mining_wedge_on").innerHTML = "Turn on mining";
        player.ore_per_time_wedge = 0;
        document.getElementById("mine_automatic").style.backgroundColor = "grey";
    }
    if (player.processors_automatic_wedge_on === true) {
        player.processors_automatic_wedge_on = false;
        document.getElementById("processors_wedge_on").innerHTML = "Turn on building";
        player.electricity_per_time_wedge = 0;
        document.getElementById("processors_automatic").style.backgroundColor = "grey";
    }
    player.electricity_automatic_wedge_on = true;
    player.electricity_per_time_wedge = 1;
    document.getElementById("electricity_wedge_on").innerHTML = "Generation is on!";
    document.getElementById("electricity_automatic").style.backgroundColor = "red";
};

function oreToMetalAutomatic() {
    if (player.metal_discovered === true) {
        if (player.ore_automatic_transform_on === true) {
            player.ore_automatic_transform_on = false;
            document.getElementById("ore_to_metal_automatic_discovered").innerHTML = "Ore to Metal";
            return;
        }
        player.ore_automatic_transform_on = true;
        document.getElementById("ore_to_metal_automatic_discovered").innerHTML = "Ore to Metal on!";
    }
};

function metalToAlloyAutomatic() {
    if (player.alloy_discovered === true) {
        if (player.metal_automatic_transform_on === true) {
            player.metal_automatic_transform_on = false;
            document.getElementById("metal_to_alloy_automatic_discovered").innerHTML = "Metal to Alloy";
            return;
        }
        player.ore_automatic_transform_on = true;
        document.getElementById("ore_to_metal_automatic_discovered").innerHTML = "Ore to Metal on!";
    }
};

function update_total_clicks() {
    document.getElementById("total_ore_clicks").innerHTML = player.ore;
    document.getElementById("total_processor_clicks").innerHTML = player.processors;
    document.getElementById("total_electricity_clicks").innerHTML = player.electricity;
    document.getElementById("total_metal_clicks").innerHTML = player.metal;
    document.getElementById("total_alloy_clicks").innerHTML = player.alloy;
}

setInterval(function () {
    if (player.ore < 10) {
        player.ore = player.ore + player.ore_per_time_wedge;
    }
    if (player.processors < 10) {
        player.processors = player.processors + player.processors_per_time_wedge;
    }
    if (player.electricity < 10) {
        player.electricity = player.electricity + player.electricity_per_time_wedge;
    }
    if (player.ore_automatic_transform_on === true) {
        oreToMetalManual();
    }
    player.electricity += player.robot_electricity_add;
    update_total_clicks();
}, 10000);

setInterval(function () {
    if (player.robot_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_electricity_change)) {
        player.electricity += player.robot_electricity_change;
    } else if (player.robot_electricity_change < 0 && player.electricity < Math.abs(player.robot_electricity_change)) {
        player.robot_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
        reset_robot_text();
    }
    update_total_clicks();
    // more stuff goes here
}, 1000);
