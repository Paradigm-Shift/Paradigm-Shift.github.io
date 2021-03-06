var player = {
    ore: 9,
    processors: 9,
    electricity: 0,
    metal: 9,
    alloy: 9,
    ai_chips: 9,
    ore_per_second_view: 0,
    processors_per_second_view: 0,
    electricity_per_second_view: 0,
    metal_per_second_view: 0,
    alloy_per_second_view: 0,
    ai_per_second_view: 0,
    ore_per_time_wedge: 0,
    processors_per_time_wedge: 0,
    electricity_per_time_wedge: 0,
    ore_automatic_transform: 0,
    metal_automatic_transform: 0,
    ai_automatic_transform: 0,
    robot_1_electricity_change: 0,
    robot_1_electricity_add_change: 0,
    robot_1_electricity_change_view: 0,
    robot_2_electricity_change: 0,
    robot_2_electricity_add_change: 0,
    robot_2_electricity_change_view: 0,
    robot_3_electricity_change: 0,
    robot_3_electricity_add_change: 0,
    robot_3_electricity_change_view: 0,
    robot_4_electricity_change: 0,
    robot_4_electricity_add_change: 0,
    robot_4_electricity_change_view: 0,
    robot_5_electricity_change: 0,
    robot_5_electricity_add_change: 0,
    robot_5_electricity_change_view: 0,
    robot_6_electricity_change: 0,
    robot_6_electricity_add_change: 0,
    robot_6_electricity_change_view: 0,
    robot_7_electricity_change: 0,
    robot_7_electricity_add_change: 0,
    robot_7_electricity_change_view: 0,
    robot_8_electricity_change: 0,
    robot_8_electricity_add_change: 0,
    robot_8_electricity_change_view: 0,
    robot_9_electricity_change: 0,
    robot_9_electricity_add_change: 0,
    robot_9_electricity_change_view: 0,
    robot_10_electricity_change: 0,
    robot_10_electricity_add_change: 0,
    robot_10_electricity_change_view: 0,
    robot_1_ore_change: 0,
    robot_1_ore_add_change: 0,
    robot_1_ore_change_view: 0,
    robot_2_ore_change: 0,
    robot_2_ore_add_change: 0,
    robot_2_ore_change_view: 0,
    robot_3_ore_change: 0,
    robot_3_ore_add_change: 0,
    robot_3_ore_change_view: 0,
    robot_4_ore_change: 0,
    robot_4_ore_add_change: 0,
    robot_4_ore_change_view: 0,
    robot_5_ore_change: 0,
    robot_5_ore_add_change: 0,
    robot_5_ore_change_view: 0,
    robot_6_ore_change: 0,
    robot_6_ore_add_change: 0,
    robot_6_ore_change_view: 0,
    robot_7_ore_change: 0,
    robot_7_ore_add_change: 0,
    robot_7_ore_change_view: 0,
    robot_8_ore_change: 0,
    robot_8_ore_add_change: 0,
    robot_8_ore_change_view: 0,
    robot_9_ore_change: 0,
    robot_9_ore_add_change: 0,
    robot_9_ore_change_view: 0,
    robot_10_ore_change: 0,
    robot_10_ore_add_change: 0,
    robot_10_ore_change_view: 0,
    robot_1_processors_change: 0,
    robot_1_processors_add_change: 0,
    robot_1_processors_change_view: 0,
    robot_2_processors_change: 0,
    robot_2_processors_add_change: 0,
    robot_2_processors_change_view: 0,
    robot_3_processors_change: 0,
    robot_3_processors_add_change: 0,
    robot_3_processors_change_view: 0,
    robot_4_processors_change: 0,
    robot_4_processors_add_change: 0,
    robot_4_processors_change_view: 0,
    robot_5_processors_change: 0,
    robot_5_processors_add_change: 0,
    robot_5_processors_change_view: 0,
    robot_6_processors_change: 0,
    robot_6_processors_add_change: 0,
    robot_6_processors_change_view: 0,
    robot_7_processors_change: 0,
    robot_7_processors_add_change: 0,
    robot_7_processors_change_view: 0,
    robot_8_processors_change: 0,
    robot_8_processors_add_change: 0,
    robot_8_processors_change_view: 0,
    robot_9_processors_change: 0,
    robot_9_processors_add_change: 0,
    robot_9_processors_change_view: 0,
    robot_10_processors_change: 0,
    robot_10_processors_add_change: 0,
    robot_10_processors_change_view: 0,
    robots: 0,
    mine_automatic_wedge_on: false,
    processors_automatic_wedge_on: false,
    electricity_automatic_wedge_on: false,
    ore_automatic_transform_on: false,
    metal_automatic_transform_on: false,
    metal_discovered: false,
    alloy_discovered: false,
    ai_discovered: false,
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
    robot_1_is_generating_ore: false,
    robot_2_is_generating_ore: false,
    robot_3_is_generating_ore: false,
    robot_4_is_generating_ore: false,
    robot_5_is_generating_ore: false,
    robot_6_is_generating_ore: false,
    robot_7_is_generating_ore: false,
    robot_8_is_generating_ore: false,
    robot_9_is_generating_ore: false,
    robot_10_is_generating_ore: false,
    robot_1_is_generating_processors: false,
    robot_2_is_generating_processors: false,
    robot_3_is_generating_processors: false,
    robot_4_is_generating_processors: false,
    robot_5_is_generating_processors: false,
    robot_6_is_generating_processors: false,
    robot_7_is_generating_processors: false,
    robot_8_is_generating_processors: false,
    robot_9_is_generating_processors: false,
    robot_10_is_generating_processors: false,
    robot_1_electricity_add: 0,
    robot_2_electricity_add: 0,
    robot_3_electricity_add: 0,
    robot_4_electricity_add: 0,
    robot_5_electricity_add: 0,
    robot_6_electricity_add: 0,
    robot_7_electricity_add: 0,
    robot_8_electricity_add: 0,
    robot_9_electricity_add: 0,
    robot_10_electricity_add: 0,
    robot_1_ore_add: 0,
    robot_2_ore_add: 0,
    robot_3_ore_add: 0,
    robot_4_ore_add: 0,
    robot_5_ore_add: 0,
    robot_6_ore_add: 0,
    robot_7_ore_add: 0,
    robot_8_ore_add: 0,
    robot_9_ore_add: 0,
    robot_10_ore_add: 0,
    robot_1_processors_add: 0,
    robot_2_processors_add: 0,
    robot_3_processors_add: 0,
    robot_4_processors_add: 0,
    robot_5_processors_add: 0,
    robot_6_processors_add: 0,
    robot_7_processors_add: 0,
    robot_8_processors_add: 0,
    robot_9_processors_add: 0,
    robot_10_processors_add: 0,
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
    robot_ore_1_add_number: 1,
    robot_ore_2_add_number: 1,
    robot_ore_3_add_number: 1,
    robot_ore_4_add_number: 1,
    robot_ore_5_add_number: 1,
    robot_ore_6_add_number: 1,
    robot_ore_7_add_number: 1,
    robot_ore_8_add_number: 1,
    robot_ore_9_add_number: 1,
    robot_ore_10_add_number: 1,
    robot_processors_1_add_number: 1,
    robot_processors_2_add_number: 1,
    robot_processors_3_add_number: 1,
    robot_processors_4_add_number: 1,
    robot_processors_5_add_number: 1,
    robot_processors_6_add_number: 1,
    robot_processors_7_add_number: 1,
    robot_processors_8_add_number: 1,
    robot_processors_9_add_number: 1,
    robot_processors_10_add_number: 1,
    robot_1_level: 1,
    robot_2_level: 1,
    robot_3_level: 1,
    robot_4_level: 1,
    robot_5_level: 1,
    robot_6_level: 1,
    robot_7_level: 1,
    robot_8_level: 1,
    robot_9_level: 1,
    robot_10_level: 1,
    whatever_area: 10,
    whatever_area_name: "10px"
};

//function addEventHandler(elem,eventType,handler) {
// if (elem.addEventListener)
//     elem.addEventListener (eventType,handler,false);
// else if (elem.attachEvent)
//     elem.attachEvent ('on'+eventType,handler); 
//}
//var img_on = document.getElementsByClassName("on")
//addEventHandler(img_on,'onclick',orePlusManual());

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
    if (player.processors == 10) {
        if (player.ai_discovered === false) {
            document.getElementById("processors_to_ai_manual_discovered").innerHTML = "Processors to AI Chip";
            document.getElementById("processors_to_ai_automatic_discovered").innerHTML = "Processors to AI Chip";
            document.getElementById("ai_discovered").innerHTML = "AI Chips:";
            player.ai_discovered = true;
        }
    }
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
                document.getElementById("robot_processors_text").innerHTML = "Generate Processors";
                document.getElementById("robot_ore_text").innerHTML = "Generate Ore";
                document.getElementById("robot_upgrade_text").innerHTML = "Upgrade";
                player.robot_discovered = true;
            }
        }
    }
    update_total_clicks();
}

function processorsToAiManual() {
    if (player.ai_chips == 10) {
        return;
    }
    if (player.processors == 10) {
        player.processors -= 10;
        player.ai_chips++;
        update_total_clicks();
    }
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
        player.metal_automatic_transform_on = true;
        document.getElementById("metal_to_alloy_automatic_discovered").innerHTML = "Metal to Alloy on!";
    }
};

function update_total_clicks() {
    document.getElementById("total_ore_clicks").innerHTML = player.ore;
    document.getElementById("total_processor_clicks").innerHTML = player.processors;
    document.getElementById("total_electricity_clicks").innerHTML = player.electricity;
    document.getElementById("total_metal_clicks").innerHTML = player.metal;
    document.getElementById("total_alloy_clicks").innerHTML = player.alloy;
    document.getElementById("total_ai_clicks").innerHTML = player.ai_chips;
}

setInterval(function () {
    if (player.ore < 10) {
        player.ore = player.ore + player.ore_per_time_wedge;
        player.ore = player.ore + player.robot_1_ore_add;
        player.ore = player.ore + player.robot_2_ore_add;
        player.ore = player.ore + player.robot_3_ore_add;
        player.ore = player.ore + player.robot_4_ore_add;
        player.ore = player.ore + player.robot_5_ore_add;
        player.ore = player.ore + player.robot_6_ore_add;
        player.ore = player.ore + player.robot_7_ore_add;
        player.ore = player.ore + player.robot_8_ore_add;
        player.ore = player.ore + player.robot_9_ore_add;
        player.ore = player.ore + player.robot_10_ore_add;
    }
    if (player.processors < 10) {
        player.processors = player.processors + player.processors_per_time_wedge;
        player.processors = player.processors + player.robot_1_processors_add;
        player.processors = player.processors + player.robot_2_processors_add;
        player.processors = player.processors + player.robot_3_processors_add;
        player.processors = player.processors + player.robot_4_processors_add;
        player.processors = player.processors + player.robot_5_processors_add;
        player.processors = player.processors + player.robot_6_processors_add;
        player.processors = player.processors + player.robot_7_processors_add;
        player.processors = player.processors + player.robot_8_processors_add;
        player.processors = player.processors + player.robot_9_processors_add;
        player.processors = player.processors + player.robot_10_processors_add;
    }
    if (player.electricity < 10) {
        player.electricity = player.electricity + player.electricity_per_time_wedge;
        player.electricity += player.robot_1_electricity_add;
        player.electricity += player.robot_2_electricity_add;
        player.electricity += player.robot_3_electricity_add;
        player.electricity += player.robot_4_electricity_add;
        player.electricity += player.robot_5_electricity_add;
        player.electricity += player.robot_6_electricity_add;
        player.electricity += player.robot_7_electricity_add;
        player.electricity += player.robot_8_electricity_add;
        player.electricity += player.robot_9_electricity_add;
        player.electricity += player.robot_10_electricity_add;
    }
    if (player.ore_automatic_transform_on === true) {
        oreToMetalManual();
    }
    if (player.metal_automatic_transform_on === true) {
        metalToAlloyManual();
    }
    
    update_total_clicks();
}, 10000);

setInterval(function () {
    if (player.robot_1_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_1_electricity_change)) {
        player.electricity += player.robot_1_electricity_change;
    } else if (player.robot_1_electricity_change < 0 && player.electricity < Math.abs(player.robot_1_electricity_change)) {
        player.robot_1_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_1_electricity_change;
        reset_robot_text();
    }
    if (player.robot_2_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_2_electricity_change)) {
        player.electricity += player.robot_2_electricity_change;
    } else if (player.robot_2_electricity_change < 0 && player.electricity < Math.abs(player.robot_2_electricity_change)) {
        player.robot_2_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_2_electricity_change;
        reset_robot_text();
    }
    if (player.robot_3_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_3_electricity_change)) {
        player.electricity += player.robot_3_electricity_change;
    } else if (player.robot_3_electricity_change < 0 && player.electricity < Math.abs(player.robot_3_electricity_change)) {
        player.robot_3_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_3_electricity_change;
        reset_robot_text();
    }
    if (player.robot_4_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_4_electricity_change)) {
        player.electricity += player.robot_4_electricity_change;
    } else if (player.robot_4_electricity_change < 0 && player.electricity < Math.abs(player.robot_4_electricity_change)) {
        player.robot_4_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_4_electricity_change;
        reset_robot_text();
    }
    if (player.robot_5_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_5_electricity_change)) {
        player.electricity += player.robot_5_electricity_change;
    } else if (player.robot_5_electricity_change < 0 && player.electricity < Math.abs(player.robot_5_electricity_change)) {
        player.robot_5_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_5_electricity_change;
        reset_robot_text();
    }
    if (player.robot_6_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_6_electricity_change)) {
        player.electricity += player.robot_6_electricity_change;
    } else if (player.robot_6_electricity_change < 0 && player.electricity < Math.abs(player.robot_6_electricity_change)) {
        player.robot_6_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_6_electricity_change;
        reset_robot_text();
    }
    if (player.robot_7_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_7_electricity_change)) {
        player.electricity += player.robot_7_electricity_change;
    } else if (player.robot_7_electricity_change < 0 && player.electricity < Math.abs(player.robot_7_electricity_change)) {
        player.robot_7_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_7_electricity_change;
        reset_robot_text();
    }
    if (player.robot_8_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_8_electricity_change)) {
        player.electricity += player.robot_8_electricity_change;
    } else if (player.robot_8_electricity_change < 0 && player.electricity < Math.abs(player.robot_8_electricity_change)) {
        player.robot_8_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_8_electricity_change;
        reset_robot_text();
    }
    if (player.robot_9_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_9_electricity_change)) {
        player.electricity += player.robot_9_electricity_change;
    } else if (player.robot_9_electricity_change < 0 && player.electricity < Math.abs(player.robot_9_electricity_change)) {
        player.robot_9_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_9_electricity_change;
        reset_robot_text();
    }
    if (player.robot_10_electricity_change <= 0 && player.electricity >= Math.abs(player.robot_10_electricity_change)) {
        player.electricity += player.robot_10_electricity_change;
    } else if (player.robot_10_electricity_change < 0 && player.electricity < Math.abs(player.robot_10_electricity_change)) {
        player.robot_10_electricity_change += player.robots;
        player.robots = 0;
        document.getElementById("electricity_per_second").innerHTML = player.robot_10)electricity_change;
        reset_robot_text();
    }
    update_total_clicks();
    // more stuff goes here
}, 1000);
