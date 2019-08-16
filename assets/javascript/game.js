$(document).ready(function() {
    // Character Buttons
    var capBtn = $("#cap");
    var spidermanBtn = $("#spiderman");
    var ironmanBtn = $("#ironman");
    var lokiBtn = $("#loki");
    var ultronBtn = $("#ultron");
    var thanosBtn = $("#thanos");

    // Characters
    // HEROS
    var cap = {
        name: "Cap",
        hp: 140,
        dp: 3,
        basedp: 3,
    }
    var spiderman = {
        name: "Spidy",
        hp: 100,
        dp: 6,
        basedp: 6,
    }
    var ironman = {
        name: "Mr. Stark",
        hp: 120,
        dp: 4,
        basedp: 4,
    }
    // ENEMIES
    var loki = {
        name: "Loki",
        hp: 180,
        dp: 6,
    }
    var ultron = {
        name: "Ultron",
        hp: 140,
        dp: 7,
    }
    var thanos = {
        name: "Thanos",
        hp: 160,
        dp: 10,
    }

    var hero = "";
    var defender = "";

    // Display the values
    $("#cap-hp").html("HP: " + cap.hp + " | " + "DP: " + cap.dp);
    $("#spiderman-hp").html("HP: " + spiderman.hp + " | " + "DP: " + spiderman.dp);
    $("#ironman-hp").html("HP: " + ironman.hp + " | " + "DP: " + ironman.dp);
    $(".loki-hp").html("HP: " + loki.hp + " | " + "DP: " + loki.dp);
    $(".ultron-hp").html("HP: " + ultron.hp + " | " + "DP: " + ultron.dp);
    $(".thanos-hp").html("HP: " + thanos.hp + " | " + "DP: " + thanos.dp);

    // setStats();
    reset();

    // RESET
    // ***********************
    function reset() {
        // Hide ALL screens
        $(".start-screen, .instructions, .versus-heading, .good-characters, .bad-side, .instructions-screen").addClass("d-none");
        // Move ALL characters to starting positions
        $(".good-characters").append(capBtn, spidermanBtn, ironmanBtn);
        $(".evil-characters").append(lokiBtn, ultronBtn, thanosBtn);
        // Clear all BGs
        $(".bg-cap, .bg-spiderman, .bg-ironman").removeClass("bg-success");
        // Reset TITLE
        $(".heading").html("AVENGERS RPG");
        // Remove hp classes
        $("#cap-hp").removeClass("user-hp");
        $("#spiderman-hp").removeClass("user-hp");
        $("#ironman-hp").removeClass("user-hp");

        startSequence();
    };
    // ***********************


    // START SCREEN
    // **************************
    function startSequence() {
        // Display start screen
        $(".start-screen").removeClass("d-none");
        // Click start button
        $(".start-btn").on('click', function() {
            // Remove start screen
            $(".start-screen").addClass("d-none");
            
            chooseCharacter();
        })
    };
    // **************************


    // CHOOSE CHARACTER
    // **************************
    function chooseCharacter() {
        // display character page
        $(".good-characters").removeClass("d-none");
        // Change TITLE
        $(".heading").html("Choose your hero!");
            // IF USER CHOOSES CAP
            $(capBtn).on('click', function() {
                chooseCap();
                chooseDefender();
            })
            $(spidermanBtn).on('click', function() {
                chooseSpiderman();
                chooseDefender();
            })
            $(ironmanBtn).on('click', function() {
                chooseIronman();
                chooseDefender();
            })
    };
    // **************************


    // CHOOSE DEFENDER
    // **************************
    function chooseDefender() {
        defender = ""
        // hide other pages
        $(".instructions, .versus-heading").addClass("d-none");
        // give BGs 
        $(".bg-loki, .bg-ultron, .bg-thanos").addClass("bg-hover");
        // display enemies page
        $(".bad-side").removeClass("d-none");
        // Change TITLE
        $(".heading").html("Choose an enemy to attack!");
            // IF USER CHOOSES LOKI
            $(lokiBtn).on('click', function() {
                chooseLoki();
                battle();
            })
            $(ultronBtn).on('click', function() {
                chooseUltron();
                battle();
            })
            $(thanosBtn).on('click', function() {
                chooseThanos();
                battle();
            })
    };
    // **************************


    // BATTLE
    // **************************
    function battle() {
        if (defender === loki) {
            $(lokiBtn).on('click', function() {
                // ONLY WHILE DEFENDER IS ALIVE
                if (defender.hp >= 0) {
                    // hero deals damage
                    defender.hp = defender.hp - hero.dp;
                    $(".loki-hp").html("HP: " + defender.hp + " | " + "DP: " + defender.dp);
                    // defender deals damage
                    hero.hp = hero.hp - defender.dp;
                    $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);
                }
                // EVERY CLICK (dead or alive)
                // hero dp increases
                hero.dp = hero.dp + hero.basedp;
                $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);
                
                kill();
                lose();
            })
        }
        if (defender === ultron) {
            $(ultronBtn).on('click', function() {
                // ONLY WHILE DEFENDER IS ALIVE
                if (defender.hp >= 0) {
                    // hero deals damage
                    defender.hp = defender.hp - hero.dp;
                    $(".ultron-hp").html("HP: " + defender.hp + " | " + "DP: " + defender.dp);
                    // defender deals damage
                    hero.hp = hero.hp - defender.dp;
                    $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);
                }
                // EVERY CLICK (dead or alive)
                // hero dp increases
                hero.dp = hero.dp + hero.basedp;
                $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);
                
                kill();
                lose();
            })
        }
        if (defender === thanos) {
            $(thanosBtn).on('click', function() {
                // ONLY WHILE DEFENDER IS ALIVE
                if (defender.hp >= 0) {
                    // hero deals damage
                    defender.hp = defender.hp - hero.dp;
                    $(".thanos-hp").html("HP: " + defender.hp + " | " + "DP: " + defender.dp);
                    // defender deals damage
                    hero.hp = hero.hp - defender.dp;
                    $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);
                }
                // EVERY CLICK (dead or alive)
                // hero dp increases
                hero.dp = hero.dp + hero.basedp;
                $(".user-hp").html("HP: " + hero.hp + " | " + "DP: " + hero.dp);

                kill();
                lose();
            })
        }
    };
    // **************************

    // ON KILL
    // **************************
    function kill() {
        if (defender.hp <= 0) {
            if (defender === loki) {
                alert("You defeated " + defender.name + "!");
                $(".graveyard").append(lokiBtn);
                chooseDefender();
            }
            if (defender === ultron) {
                alert("You defeated " + defender.name + "!");
                $(".graveyard").append(ultronBtn);
                chooseDefender();
            }
            if (defender === thanos) {
                alert("You defeated " + defender.name + "!");
                $(".graveyard").append(thanosBtn);
                chooseDefender();
            }
        }

        victory();
    }
    // **************************


    // If user WINS
    // **************************
    function victory() {
        if (loki.hp <= 0 && ultron.hp <= 0 && thanos.hp <= 0) {
            alert("Victory! You saved the world, " + hero.name + "!");
            setStats();
            reset();
        }
    };
    // **************************

    // If user LOSES
    // **************************
    function lose() {
        if (hero.hp <= 0) {
            alert("You lost! Try again!");
            setStats();
            reset();
        }
    };
    // **************************


    // Stats back to starting
    // **************************
    function setStats() {
        // Reset variables
        cap.hp = 140;
        cap.dp = 3;
        cap.basedp = 3;
        spiderman.hp = 100;
        spiderman.dp = 6;
        spiderman.basedp = 6;
        ironman.hp = 120;
        ironman.dp = 4;
        ironman.basedp = 4;
        loki.hp = 180;
        loki.dp = 6;
        ultron.hp = 140;
        ultron.dp = 7;
        thanos.hp = 160;
        thanos.dp = 10;

        hero = "";
        defender = "";

        // Display the rest values
        $("#cap-hp").html("HP: " + cap.hp + " | " + "DP: " + cap.dp);
        $("#spiderman-hp").html("HP: " + spiderman.hp + " | " + "DP: " + spiderman.dp);
        $("#ironman-hp").html("HP: " + ironman.hp + " | " + "DP: " + ironman.dp);
        $(".loki-hp").html("HP: " + loki.hp + " | " + "DP: " + loki.dp);
        $(".ultron-hp").html("HP: " + ultron.hp + " | " + "DP: " + ultron.dp);
        $(".thanos-hp").html("HP: " + thanos.hp + " | " + "DP: " + thanos.dp);
    };
// CHARACTER SELECTIONS
// *** *** *** *** *** ***
// HEROS
function chooseCap() {
    hero = cap;
    // move to battle zone
    $(".battle-zone").prepend(capBtn);
    // hide other heros
    $(".good-characters").addClass("d-none");
    // Give BG
    $(".bg-cap").addClass("bg-success");
    // Give hp class
    $("#cap-hp").addClass("user-hp");
    // turn off click event
    $(capBtn).off('click');
};
function chooseSpiderman() {
    hero = spiderman;
    // move to battle zone
    $(".battle-zone").prepend(spidermanBtn);
    // hide other heros
    $(".good-characters").addClass("d-none");
    // Give BG
    $(".bg-spiderman").addClass("bg-success");
    // Give hp class
    $("#spiderman-hp").addClass("user-hp");
    // turn off click event
    $(spidermanBtn).off('click');
};
function chooseIronman() {
    hero = ironman;
    // move to battle zone
    $(".battle-zone").prepend(ironmanBtn);
    // hide other heros
    $(".good-characters").addClass("d-none");
    // Give BG
    $(".bg-ironman").addClass("bg-success");
    // Give hp class
    $("#ironman-hp").addClass("user-hp");
    // turn off click event
    $(ironmanBtn).off('click');
};
// *** *** *** *** *** ***
// ENEMIES
function chooseLoki() {
    defender = loki;
    // move to battle zone
    $(".battle-zone").append(lokiBtn);
    // Give BG
    $(".bg-loki").addClass("bg-danger");
    // Remove other enemies BG
    $(".bg-ultron, .bg-thanos").removeClass("bg-hover");
    // Show instructions
    $(".instructions, .versus-heading").removeClass("d-none");
    // turn off click event(s)
    $(lokiBtn).off('click');
    $(ultronBtn).off('click');
    $(thanosBtn).off('click');
};
function chooseUltron() {
    defender = ultron;
    // move to battle zone
    $(".battle-zone").append(ultronBtn);
    // Give BG
    $(".bg-ultron").addClass("bg-danger");
    // Remove other enemies BG
    $(".bg-loki, .bg-thanos").removeClass("bg-hover");
    // Show instructions
    $(".instructions, .versus-heading").removeClass("d-none");
    // turn off click event(s)
    $(lokiBtn).off('click');
    $(ultronBtn).off('click');
    $(thanosBtn).off('click');
};
function chooseThanos() {
    defender = thanos;
    // move to battle zone
    $(".battle-zone").append(thanosBtn);
    // Give BG
    $(".bg-thanos").addClass("bg-danger");
    // Remove other enemies BG
    $(".bg-loki, .bg-thanos").removeClass("bg-hover");
    // Show instructions
    $(".instructions, .versus-heading").removeClass("d-none");
    // turn off click event(s)
    $(lokiBtn).off('click');
    $(ultronBtn).off('click');
    $(thanosBtn).off('click');
};
// End of JS
});