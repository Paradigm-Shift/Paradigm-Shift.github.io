function reset_robot_text(){document.getElementById("robot_1_text").innerHTML="Buy Robot 1";document.getElementById("robot_2_text").innerHTML="Buy Robot 2";document.getElementById("robot_3_text").innerHTML="Buy Robot 3";document.getElementById("robot_4_text").innerHTML="Buy Robot 4";document.getElementById("robot_5_text").innerHTML="Buy Robot 5";document.getElementById("robot_6_text").innerHTML="Buy Robot 6";document.getElementById("robot_7_text").innerHTML="Buy Robot 7";document.getElementById("robot_8_text").innerHTML="Buy Robot 8";document.getElementById("robot_9_text").innerHTML="Buy Robot 9";document.getElementById("robot_10_text").innerHTML="Buy Robot 10";document.getElementById("robot_electricity_text").innerHTML="Generate Electricity";document.getElementById("robot_selected").innerHTML="None";player.robot_1_bought=false;player.robot_2_bought=false;player.robot_3_bought=false;player.robot_4_bought=false;player.robot_5_bought=false;player.robot_6_bought=false;player.robot_7_bought=false;player.robot_8_bought=false;player.robot_9_bought=false;player.robot_10_bought=false;player.robot_1_selected=false;player.robot_2_selected=false;player.robot_3_selected=false;player.robot_4_selected=false;player.robot_5_selected=false;player.robot_6_selected=false;player.robot_7_selected=false;player.robot_8_selected=false;player.robot_9_selected=false;player.robot_10_selected=false;player.robot_electricity_change=0;player.robot_electricity_add_change=0;player.robot_electricity_change_view=0;player.robot_electricity_add=0;player.robot_1_is_generating_electricity=false;player.robot_2_is_generating_electricity=false;player.robot_3_is_generating_electricity=false;player.robot_4_is_generating_electricity=false;player.robot_5_is_generating_electricity=false;player.robot_6_is_generating_electricity=false;player.robot_7_is_generating_electricity=false;player.robot_8_is_generating_electricity=false;player.robot_9_is_generating_electricity=false;player.robot_10_is_generating_electricity=false;player.robot_ore_change=0;player.robot_ore_add_change=0;player.robot_ore_change_view=0;player.robot_ore_add=0;player.robot_1_is_generating_ore=false;player.robot_2_is_generating_ore=false;player.robot_3_is_generating_ore=false;player.robot_4_is_generating_ore=false;player.robot_5_is_generating_ore=false;player.robot_6_is_generating_ore=false;player.robot_7_is_generating_ore=false;player.robot_8_is_generating_ore=false;player.robot_9_is_generating_ore=false;player.robot_10_is_generating_ore=false;player.robot_processors_change=0;player.robot_processors_add_change=0;player.robot_processors_change_view=0;player.robot_processors_add=0;player.robot_1_is_generating_processors=false;player.robot_2_is_generating_processors=false;player.robot_3_is_generating_processors=false;player.robot_4_is_generating_processors=false;player.robot_5_is_generating_processors=false;player.robot_6_is_generating_processors=false;player.robot_7_is_generating_processors=false;player.robot_8_is_generating_processors=false;player.robot_9_is_generating_processors=false;player.robot_10_is_generating_processors=false;player.robot_1_level=1;player.robot_2_level=1;player.robot_3_level=1;player.robot_4_level=1;player.robot_5_level=1;player.robot_6_level=1;player.robot_7_level=1;player.robot_8_level=1;player.robot_9_level=1;player.robot_10_level=1}

function robotElectricity() {
    if (player.robot_discovered === true) {
        if (player.robot_1_selected === true) {
            if (player.robot_1_is_generating_electricity === false) {
                player.robot_1_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_1_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_1_is_generating_electricity === true) {
                player.robot_1_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_1_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_2_selected === true) {
            if (player.robot_2_is_generating_electricity === false) {
                player.robot_2_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_2_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_2_is_generating_electricity === true) {
                player.robot_2_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_2_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_3_selected === true) {
            if (player.robot_3_is_generating_electricity === false) {
                player.robot_3_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_3_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_3_is_generating_electricity === true) {
                player.robot_3_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_3_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_4_selected === true) {
            if (player.robot_4_is_generating_electricity === false) {
                player.robot_4_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_4_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_4_is_generating_electricity === true) {
                player.robot_4_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_4_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_5_selected === true) {
            if (player.robot_5_is_generating_electricity === false) {
                player.robot_5_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_5_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_5_is_generating_electricity === true) {
                player.robot_5_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_5_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_6_selected === true) {
            if (player.robot_6_is_generating_electricity === false) {
                player.robot_6_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_6_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_6_is_generating_electricity === true) {
                player.robot_6_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_6_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_7_selected === true) {
            if (player.robot_7_is_generating_electricity === false) {
                player.robot_7_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_7_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_7_is_generating_electricity === true) {
                player.robot_7_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_7_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_8_selected === true) {
            if (player.robot_8_is_generating_electricity === false) {
                player.robot_8_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_8_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_8_is_generating_electricity === true) {
                player.robot_8_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_8_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_9_selected === true) {
            if (player.robot_9_is_generating_electricity === false) {
                player.robot_9_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_9_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_9_is_generating_electricity === true) {
                player.robot_9_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_9_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } else if (player.robot_10_selected === true) {
            if (player.robot_10_is_generating_electricity === false) {
                player.robot_10_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_10_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            } else if (player.robot_10_is_generating_electricity === true) {
                player.robot_10_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_10_add_number;
                player.robot_electricity_add_change = player.robot_electricity_change_view + player.robot_electricity_add;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_add_change;
            }
        } 
    }
};
function robotProcessors() {
    if (player.robot_discovered === true) {
        if (player.robot_1_selected === true) {
            if (player.robot_1_is_generating_processors === false) {
                player.robot_1_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_1_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_1_is_generating_processors === true) {
                player.robot_1_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_1_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_2_selected === true) {
            if (player.robot_2_is_generating_processors === false) {
                player.robot_2_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_2_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_2_is_generating_processors === true) {
                player.robot_2_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_2_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_3_selected === true) {
            if (player.robot_3_is_generating_processors === false) {
                player.robot_3_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_3_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_3_is_generating_processors === true) {
                player.robot_3_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_3_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_4_selected === true) {
            if (player.robot_4_is_generating_processors === false) {
                player.robot_4_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_4_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_4_is_generating_processors === true) {
                player.robot_4_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_4_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_5_selected === true) {
            if (player.robot_5_is_generating_processors === false) {
                player.robot_5_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_5_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_5_is_generating_processors === true) {
                player.robot_5_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_5_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_6_selected === true) {
            if (player.robot_6_is_generating_processors === false) {
                player.robot_6_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_6_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_6_is_generating_processors === true) {
                player.robot_6_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_6_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_7_selected === true) {
            if (player.robot_7_is_generating_processors === false) {
                player.robot_7_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_7_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_7_is_generating_processors === true) {
                player.robot_7_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_7_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_8_selected === true) {
            if (player.robot_8_is_generating_processors === false) {
                player.robot_8_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_8_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_8_is_generating_processors === true) {
                player.robot_8_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_8_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_9_selected === true) {
            if (player.robot_9_is_generating_processors === false) {
                player.robot_9_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_9_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_9_is_generating_processors === true) {
                player.robot_9_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_9_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } else if (player.robot_10_selected === true) {
            if (player.robot_10_is_generating_processors === false) {
                player.robot_10_is_generating_processors = true;
                document.getElementById("robot_processors_text").innerHTML = "Generating processors";
                player.robot_processors_add += player.robot_processors_10_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            } else if (player.robot_10_is_generating_processors === true) {
                player.robot_10_is_generating_processors = false;
                document.getElementById("robot_processors_text").innerHTML = "Generate processors";
                player.robot_processors_add -= player.robot_processors_10_add_number;
                player.robot_processors_add_change = player.robot_processors_change_view + player.robot_processors_add;
                document.getElementById("processors_per_second").innerHTML = player.robot_processors_add_change;
            }
        } 
    }
};
function robotOre() {
    if (player.robot_discovered === true) {
        if (player.robot_1_selected === true) {
            if (player.robot_1_is_generating_ore === false) {
                player.robot_1_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_1_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_1_is_generating_ore === true) {
                player.robot_1_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_1_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_2_selected === true) {
            if (player.robot_2_is_generating_ore === false) {
                player.robot_2_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_2_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_2_is_generating_ore === true) {
                player.robot_2_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_2_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_3_selected === true) {
            if (player.robot_3_is_generating_ore === false) {
                player.robot_3_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_3_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_3_is_generating_ore === true) {
                player.robot_3_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_3_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_4_selected === true) {
            if (player.robot_4_is_generating_ore === false) {
                player.robot_4_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_4_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_4_is_generating_ore === true) {
                player.robot_4_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_4_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_5_selected === true) {
            if (player.robot_5_is_generating_ore === false) {
                player.robot_5_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_5_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_5_is_generating_ore === true) {
                player.robot_5_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_5_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_6_selected === true) {
            if (player.robot_6_is_generating_ore === false) {
                player.robot_6_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_6_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_6_is_generating_ore === true) {
                player.robot_6_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_6_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_7_selected === true) {
            if (player.robot_7_is_generating_ore === false) {
                player.robot_7_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_7_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_7_is_generating_ore === true) {
                player.robot_7_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_7_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_8_selected === true) {
            if (player.robot_8_is_generating_ore === false) {
                player.robot_8_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_8_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_8_is_generating_ore === true) {
                player.robot_8_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_8_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_9_selected === true) {
            if (player.robot_9_is_generating_ore === false) {
                player.robot_9_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_9_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_9_is_generating_ore === true) {
                player.robot_9_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_9_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } else if (player.robot_10_selected === true) {
            if (player.robot_10_is_generating_ore === false) {
                player.robot_10_is_generating_ore = true;
                document.getElementById("robot_ore_text").innerHTML = "Generating ore";
                player.robot_ore_add += player.robot_ore_10_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            } else if (player.robot_10_is_generating_ore === true) {
                player.robot_10_is_generating_ore = false;
                document.getElementById("robot_ore_text").innerHTML = "Generate ore";
                player.robot_ore_add -= player.robot_ore_10_add_number;
                player.robot_ore_add_change = player.robot_ore_change_view + player.robot_ore_add;
                document.getElementById("ore_per_second").innerHTML = player.robot_ore_add_change;
            }
        } 
    }
};
function robotUpgrade(){
    if (player.robot_discovered === true) {
        if (player.robot_1_selected === true) {
            if (player.robot_1_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_1_level++;
                }
            }
        } else if (player.robot_2_selected === true) {
            if (player.robot_2_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_2_level++;
                }
            }
        } else if (player.robot_3_selected === true) {
            if (player.robot_3_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_3_level++;
                }
            }
        } else if (player.robot_4_selected === true) {
            if (player.robot_4_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_4_level++;
                }
            }
        } else if (player.robot_5_selected === true) {
            if (player.robot_5_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_5_level++;
                }
            }
        } else if (player.robot_6_selected === true) {
            if (player.robot_6_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_6_level++;
                }
            }
        } else if (player.robot_7_selected === true) {
            if (player.robot_7_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_7_level++;
                }
            }
        } else if (player.robot_8_selected === true) {
            if (player.robot_8_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_8_level++;
                }
            }
        } else if (player.robot_9_selected === true) {
            if (player.robot_9_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_9_level++;
                }
            }
        } else if (player.robot_10_selected === true) {
            if (player.robot_10_level < 10) {
                if (player.ai_chips > 0) {
                    player.ai_chips -= 1;
                    player.robot_10_level++;
                }
            }
        }
    }
};
