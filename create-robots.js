function robot1() {
    if (player.robot_discovered === true) {
        if (player.robot_1_bought === false) {
            if (player.alloy == 10) {
                player.alloy -= 10;
                player.robot_1_bought = true;
                player.robot_electricity_change--;
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_1_text").innerHTML = "Robot 1";
                return;
            }
        } else if (player.robot_1_bought === true) {
            if (player.robot_1_selected === false) {
                player.robot_1_selected = true;
                document.getElementById("robot_selected").innerHTML = "1";
                document.getElementById("robot_level").innerHTML = player.robot_1_level;
                if (player.robot_1_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_1_selected === true) {
                player.robot_1_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_2_text").innerHTML = "Robot 2";
            }
        } else if (player.robot_2_bought === true) {
            if (player.robot_2_selected === false) {
                document.getElementById("robot_selected").innerHTML = "2";
                document.getElementById("robot_level").innerHTML = player.robot_2_level;
                player.robot_2_selected = true;
                if (player.robot_2_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_2_selected === true) {
                player.robot_2_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_3_text").innerHTML = "Robot 3";
            }
        } else if (player.robot_3_bought === true) {
            if (player.robot_3_selected === false) {
                document.getElementById("robot_selected").innerHTML = "3";
                document.getElementById("robot_level").innerHTML = player.robot_3_level;
                player.robot_3_selected = true;
                if (player.robot_3_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_3_selected === true) {
                player.robot_3_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_4_text").innerHTML = "Robot 4";
            }
        } else if (player.robot_4_bought === true) {
            if (player.robot_4_selected === false) {
                document.getElementById("robot_selected").innerHTML = "4";
                document.getElementById("robot_level").innerHTML = player.robot_4_level;
                player.robot_4_selected = true;
                if (player.robot_4_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_4_selected === true) {
                player.robot_4_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_5_text").innerHTML = "Robot 5";
            }
        } else if (player.robot_5_bought === true) {
            if (player.robot_5_selected === false) {
                document.getElementById("robot_selected").innerHTML = "5";
                document.getElementById("robot_level").innerHTML = player.robot_5_level;
                player.robot_5_selected = true;
                if (player.robot_5_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_5_selected === true) {
                player.robot_5_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_6_text").innerHTML = "Robot 6";
            }
        } else if (player.robot_6_bought === true) {
            if (player.robot_6_selected === false) {
                document.getElementById("robot_selected").innerHTML = "6";
                document.getElementById("robot_level").innerHTML = player.robot_6_level;
                player.robot_6_selected = true;
                if (player.robot_6_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_6_selected === true) {
                player.robot_6_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_7_text").innerHTML = "Robot 7";
            }
        } else if (player.robot_7_bought === true) {
            if (player.robot_7_selected === false) {
                document.getElementById("robot_selected").innerHTML = "7";
                document.getElementById("robot_level").innerHTML = player.robot_7_level;
                player.robot_7_selected = true;
                if (player.robot_7_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_7_selected === true) {
                player.robot_7_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_8_text").innerHTML = "Robot 8";
            }
        } else if (player.robot_8_bought === true) {
            if (player.robot_8_selected === false) {
                document.getElementById("robot_selected").innerHTML = "8";
                document.getElementById("robot_level").innerHTML = player.robot_8_level;
                player.robot_8_selected = true;
                if (player.robot_8_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_8_selected === true) {
                player.robot_8_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_9_text").innerHTML = "Robot 9";
            }
        } else if (player.robot_9_bought === true) {
            if (player.robot_9_selected === false) {
                document.getElementById("robot_selected").innerHTML = "9";
                document.getElementById("robot_level").innerHTML = player.robot_9_level;
                player.robot_9_selected = true;
                if (player.robot_9_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_9_selected === true) {
                player.robot_9_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
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
                player.robot_electricity_change_view -= 10;
                document.getElementById("electricity_per_second").innerHTML = player.robot_electricity_change_view;
                player.robots++;
                document.getElementById("robot_10_text").innerHTML = "Robot 10";
            }
        } else if (player.robot_10_bought === true) {
            if (player.robot_10_selected === false) {
                document.getElementById("robot_selected").innerHTML = "10";
                document.getElementById("robot_level").innerHTML = player.robot_10_level;
                player.robot_10_selected = true;
                if (player.robot_10_is_generating_electricity === true) {
                    document.getElementById("robot_electricity_text").innerHTML = "Generating Electricity";
                }
            } else if (player.robot_10_selected === true) {
                player.robot_10_selected = false;
                document.getElementById("robot_electricity_text").innerHTML = "Generate Electricity";
                document.getElementById("robot_selected").innerHTML = "None";
                document.getElementById("robot_level").innerHTML = "0";
            }
        }
    }
};
