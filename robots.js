function reset_robot_text() {
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
    document.getElementById("robot_selected").innerHTML = "None";
    player.robot_1_bought = false;
    player.robot_2_bought = false;
    player.robot_3_bought = false;
    player.robot_4_bought = false;
    player.robot_5_bought = false;
    player.robot_6_bought = false;
    player.robot_7_bought = false;
    player.robot_8_bought = false;
    player.robot_9_bought = false;
    player.robot_10_bought = false;
    player.robot_1_selected = false;
    player.robot_2_selected = false;
    player.robot_3_selected = false;
    player.robot_4_selected = false;
    player.robot_5_selected = false;
    player.robot_6_selected = false;
    player.robot_7_selected = false;
    player.robot_8_selected = false;
    player.robot_9_selected = false;
    player.robot_10_selected = false;
    player.robot_electricity_add = 0;
    player.robot_1_is_generating_electricity = false;
    player.robot_2_is_generating_electricity = false;
    player.robot_3_is_generating_electricity = false;
    player.robot_4_is_generating_electricity = false;
    player.robot_5_is_generating_electricity = false;
    player.robot_6_is_generating_electricity = false;
    player.robot_7_is_generating_electricity = false;
    player.robot_8_is_generating_electricity = false;
    player.robot_9_is_generating_electricity = false;
    player.robot_10_is_generating_electricity = false;
}

function robot1() {
    if (player.robot_discovered === true) {
        if (player.robot_1_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_1_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_1_text").innerHTML = "Robot 1";
                return;
            }
        } else if (player.robot_1_bought === true) {
            if (player.robot_1_selected === false) {
                player.robot_1_selected = true;
                document.getElementById("robot_selected").innerHTML = "1";
                if (player.robot_1_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_1_selected === true) {
                player.robot_1_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }

        }
    }
};

function robot2() {
    if (player.robot_discovered === true) {
        if (player.robot_2_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_2_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_2_text").innerHTML = "Robot 2";
            }
        } else if (player.robot_2_bought === true) {
            if (player.robot_2_selected === false) {
                document.getElementById("robot_selected").innerHTML = "2";
                player.robot_2_selected = true;
                if (player.robot_2_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_2_selected === true) {
                player.robot_2_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot3() {
    if (player.robot_discovered === true) {
        if (player.robot_3_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_3_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_3_text").innerHTML = "Robot 3";
            }
        } else if (player.robot_3_bought === true) {
            if (player.robot_3_selected === false) {
                document.getElementById("robot_selected").innerHTML = "3";
                player.robot_3_selected = true;
                if (player.robot_3_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_3_selected === true) {
                player.robot_3_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot4() {
    if (player.robot_discovered === true) {
        if (player.robot_4_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_4_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_4_text").innerHTML = "Robot 4";
            }
        } else if (player.robot_4_bought === true) {
            if (player.robot_4_selected === false) {
                document.getElementById("robot_selected").innerHTML = "4";
                player.robot_4_selected = true;
                if (player.robot_4_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_4_selected === true) {
                player.robot_4_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot5() {
    if (player.robot_discovered === true) {
        if (player.robot_5_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_5_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_5_text").innerHTML = "Robot 5";
            }
        } else if (player.robot_5_bought === true) {
            if (player.robot_5_selected === false) {
                document.getElementById("robot_selected").innerHTML = "5";
                player.robot_5_selected = true;
                if (player.robot_5_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_5_selected === true) {
                player.robot_5_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot6() {
    if (player.robot_discovered === true) {
        if (player.robot_6_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_6_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_6_text").innerHTML = "Robot 6";
            }
        } else if (player.robot_6_bought === true) {
            if (player.robot_6_selected === false) {
                document.getElementById("robot_selected").innerHTML = "6";
                player.robot_6_selected = true;
                if (player.robot_6_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_6_selected === true) {
                player.robot_6_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot7() {
    if (player.robot_discovered === true) {
        if (player.robot_7_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_7_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_7_text").innerHTML = "Robot 7";
            }
        } else if (player.robot_7_bought === true) {
            if (player.robot_7_selected === false) {
                document.getElementById("robot_selected").innerHTML = "7";
                player.robot_7_selected = true;
                if (player.robot_7_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_7_selected === true) {
                player.robot_7_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot8() {
    if (player.robot_discovered === true) {
        if (player.robot_8_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_8_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_8_text").innerHTML = "Robot 8";
            }
        } else if (player.robot_8_bought === true) {
            if (player.robot_8_selected === false) {
                document.getElementById("robot_selected").innerHTML = "8";
                player.robot_8_selected = true;
                if (player.robot_8_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_8_selected === true) {
                player.robot_8_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot9() {
    if (player.robot_discovered === true) {
        if (player.robot_9_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_9_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_9_text").innerHTML = "Robot 9";
            }
        } else if (player.robot_9_bought === true) {
            if (player.robot_9_selected === false) {
                document.getElementById("robot_selected").innerHTML = "9";
                player.robot_9_selected = true;
                if (player.robot_9_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_9_selected === true) {
                player.robot_9_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robot10() {
    if (player.robot_discovered === true) {
        if (player.robot_10_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_10_bought = true;
                player.robot_electricity_change--;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change;
                player.robots++;
                document.getElementById("robot_10_text").innerHTML = "Robot 10";
            }
        } else if (player.robot_10_bought === true) {
            if (player.robot_10_selected === false) {
                document.getElementById("robot_selected").innerHTML = "10";
                player.robot_10_selected = true;
                if (player.robot_10_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_10_selected === true) {
                player.robot_10_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
            }
        }
    }
};

function robotElectricity() {
    if (player.robot_discovered === true) {
        if (player.robot_1_selected === true) {
            if (player.robot_1_is_generating_electricity === false) {
                player.robot_1_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_1_add_number;
            } else if (player.robot_1_is_generating_electricity === true) {
                player.robot_1_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_1_add_number;
            }
        } else if (player.robot_2_selected === true) {
            if (player.robot_2_is_generating_electricity === false) {
                player.robot_2_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_2_add_number;
            } else if (player.robot_2_is_generating_electricity === true) {
                player.robot_2_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_2_add_number;
            }
        } else if (player.robot_3_selected === true) {
            if (player.robot_3_is_generating_electricity === false) {
                player.robot_3_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_3_add_number;
            } else if (player.robot_3_is_generating_electricity === true) {
                player.robot_3_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_3_add_number;
            }
        } else if (player.robot_4_selected === true) {
            if (player.robot_4_is_generating_electricity === false) {
                player.robot_4_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_4_add_number;
            } else if (player.robot_4_is_generating_electricity === true) {
                player.robot_4_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_4_add_number;
            }
        } else if (player.robot_5_selected === true) {
            if (player.robot_5_is_generating_electricity === false) {
                player.robot_5_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_5_add_number;
            } else if (player.robot_5_is_generating_electricity === true) {
                player.robot_5_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_5_add_number;
            }
        } else if (player.robot_6_selected === true) {
            if (player.robot_6_is_generating_electricity === false) {
                player.robot_6_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_6_add_number;
            } else if (player.robot_6_is_generating_electricity === true) {
                player.robot_6_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_6_add_number;
            }
        } else if (player.robot_7_selected === true) {
            if (player.robot_7_is_generating_electricity === false) {
                player.robot_7_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_7_add_number;
            } else if (player.robot_7_is_generating_electricity === true) {
                player.robot_7_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_7_add_number;
            }
        } else if (player.robot_8_selected === true) {
            if (player.robot_8_is_generating_electricity === false) {
                player.robot_8_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_8_add_number;
            } else if (player.robot_8_is_generating_electricity === true) {
                player.robot_8_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_8_add_number;
            }
        } else if (player.robot_9_selected === true) {
            if (player.robot_9_is_generating_electricity === false) {
                player.robot_9_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_9_add_number;
            } else if (player.robot_9_is_generating_electricity === true) {
                player.robot_9_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_9_add_number;
            }
        } else if (player.robot_10_selected === true) {
            if (player.robot_10_is_generating_electricity === false) {
                player.robot_10_is_generating_electricity = true;
                document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                player.robot_electricity_add += player.robot_electricity_10_add_number;
            } else if (player.robot_10_is_generating_electricity === true) {
                player.robot_10_is_generating_electricity = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                player.robot_electricity_add -= player.robot_electricity_10_add_number;
            }
        } 
    }
};
