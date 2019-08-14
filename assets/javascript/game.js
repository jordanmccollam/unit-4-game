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
        hp: 0,
        dp: 0,
        basedp: 0,
    }
    var spiderman = {
        name: "Spidy",
        hp: 0,
        dp: 0,
        basedp: 0,
    }
    var ironman = {
        name: "Ironman",
        hp: 0,
        dp: 0,
        basedp: 0,
    }
    // VILLAINS
    var loki = {
        hp: 0,
        dp: 0,
    }
    var ultron = {
        hp: 0,
        dp: 0,
    }
    var thanos = {
        hp: 0,
        dp: 0,
    }

    var userCharacter = "";

    // set stats to starting point
    setStats();

    // ****************************
    // Character selection sequence
    characterSelect();
    function characterSelect() {
        // IF USER CHOOSES CAP
        $(capBtn).on('click', function() {
            userCharacter = cap;
            $(".good").addClass("bg-success");
            $("#ironman, #spiderman").addClass("d-none");
            $(".evil-characters").addClass("d-none");
            $(".evil-opponents").removeClass("d-none");
            $(".heading").html("Choose an enemy to attack!");
            $(".instructions2").removeClass("d-none");
            defenderSelect();
        })
        // IF USER CHOOSES SPIDERMAN
        $(spidermanBtn).on('click', function() {
            userCharacter = spiderman;
            $(".good").addClass("bg-success");
            $("#ironman, #cap").addClass("d-none");
            $(".evil-characters").addClass("d-none");
            $(".evil-opponents").removeClass("d-none");
            $(".heading").html("Choose an enemy to attack!");
            $(".instructions2").removeClass("d-none");
            defenderSelect();
        })
        // IF USER CHOOSES IRONMAN
        $(ironmanBtn).on('click', function() {
            userCharacter = ironman;
            $(".good").addClass("bg-success");
            $("#cap, #spiderman").addClass("d-none");
            $(".evil-characters").addClass("d-none");
            $(".evil-opponents").removeClass("d-none");
            $(".heading").html("Choose an enemy to attack!");
            $(".instructions2").removeClass("d-none");
            defenderSelect();
        })
    };

    // **************************
    // Defender selection sequence
    function defenderSelect() {
        // IF USER CHOOSES LOKI
        $(lokiBtn).on('click', function() {
            $(".versus-heading").removeClass("d-none");
            $(".battle-zone").append($("#loki"));
            $(".evil-opponents").append($("#ultron"));
            $(".evil-opponents").append($("#thanos"));
            $(".heading").html("Battle!");
            $(".instructions").html("Click the enemy to attack");
            $(".instructions").removeClass("d-none");
        })
        // IF USER CHOOSES ULTRON
        $(ultronBtn).on('click', function() {
            $(".versus-heading").removeClass("d-none");
            $(".battle-zone").append($("#ultron"));
            $(".evil-opponents").append($("#loki"));
            $(".evil-opponents").append($("#thanos"));
            $(".heading").html("Battle!");
            $(".instructions").html("Click the enemy to attack");
            $(".instructions").removeClass("d-none");
        })
        // IF USER CHOOSES THANOS
        $(thanosBtn).on('click', function() {
            $(".versus-heading").removeClass("d-none");
            $(".battle-zone").append($("#thanos"));
            $(".evil-opponents").append($("#loki"));
            $(".evil-opponents").append($("#ultron"));
            $(".heading").html("Battle!");
            $(".instructions").html("Click the enemy to attack");
            $(".instructions").removeClass("d-none");
        })
        attack();
    };

    // ***************************
    // ATTACK
    function attack() {
        // If attacking LOKI
        $("#loki").on('click', function() {
            // user attacks
            loki.hp = loki.hp - userCharacter.dp;
            userCharacter.dp = userCharacter.dp + userCharacter.basedp;
            $(".loki-hp").html(loki.hp);
            // opponenet attacks
            userCharacter.hp = userCharacter.hp - loki.dp;
            $(".user-hp").html("HP: " + userCharacter.hp + " | " + "DP: " + userCharacter.dp);
            killLoki();
            lose();
        })
        // If attacking ultron
        $("#ultron").on('click', function() {
            // user attacks
            ultron.hp = ultron.hp - userCharacter.dp;
            userCharacter.dp = userCharacter.dp + userCharacter.basedp;
            $(".ultron-hp").html(ultron.hp);
            // opponenet attacks
            userCharacter.hp = userCharacter.hp - ultron.dp;
            $(".user-hp").html("HP: " + userCharacter.hp + " | " + "DP: " + userCharacter.dp);
            killUltron();
            lose();
        })
        // If attacking thanos
        $("#thanos").on('click', function() {
            // user attacks
            thanos.hp = thanos.hp - userCharacter.dp;
            userCharacter.dp = userCharacter.dp + userCharacter.basedp;
            $(".thanos-hp").html(thanos.hp);
            // opponenet attacks
            userCharacter.hp = userCharacter.hp - thanos.dp;
            $(".user-hp").html("HP: " + userCharacter.hp + " | " + "DP: " + userCharacter.dp);
            killThanos();
            lose();
        })
    };

    // ************************
    // KILL SEQUENCES
    function killLoki() {
        if (loki.hp <= 0) {
            $(lokiBtn).addClass("d-none");
            $(".heading").html("Choose your next opponent");
            $(".evil-opponents").on('click', function() {
                $(".heading").html("Battle!");
            })
        }
        // IF VICTORY
        if (loki.hp <= 0 && ultron.hp <= 0 && thanos.hp <= 0) {
            victory();
        }
    };
    function killUltron() {
        if (ultron.hp <= 0) {
            $(ultronBtn).addClass("d-none");
            $(".heading").html("Choose your next opponent");
            $(".evil-opponents").on('click', function() {
                $(".heading").html("Battle!");
            })
        }
        // IF VICTORY
        if (loki.hp <= 0 && ultron.hp <= 0 && thanos.hp <= 0) {
            victory();
        }
    };
    function killThanos() {
        if (thanos.hp <= 0) {
            $(thanosBtn).addClass("d-none");
            $(".heading").html("Choose your next opponent");
            $(".evil-opponents").on('click', function() {
                $(".heading").html("Battle!");
            })
        }
        // IF VICTORY
        if (loki.hp <= 0 && ultron.hp <= 0 && thanos.hp <= 0) {
            victory();
        }
    };

    // ON LOSS
    function lose() {
        if(userCharacter.hp <= 0) {
            alert("You lost! Try again!")
            location.reload();
        }
    };

    // ON VICTORY (all enemies are dead)
    function victory() {
        alert("Victory! You saved the world, " + userCharacter.name + "!");
        location.reload();
    };

    // ***************************
    // Set stats
    function setStats() {
        // Reset variables
        cap.hp = 180;
        cap.dp = 5;
        cap.basedp = 5;
        spiderman.hp = 100;
        spiderman.dp = 6;
        spiderman.basedp = 6;
        ironman.hp = 150;
        ironman.dp = 6;
        ironman.basedp = 6;
        loki.hp = 180;
        loki.dp = 6;
        ultron.hp = 140;
        ultron.dp = 7;
        thanos.hp = 160;
        thanos.dp = 10;
        // Display the rest values
        $(".cap-hp").html("HP: " + cap.hp + " | " + "DP: " + cap.dp);
        $(".spiderman-hp").html("HP: " + spiderman.hp + " | " + "DP: " + spiderman.dp);
        $(".ironman-hp").html("HP: " + ironman.hp + " | " + "DP: " + ironman.dp);
        $(".loki-hp").html("HP: " + loki.hp + " | " + "DP: " + loki.dp);
        $(".ultron-hp").html("HP: " + ultron.hp + " | " + "DP: " + ultron.dp);
        $(".thanos-hp").html("HP: " + thanos.hp + " | " + "DP: " + thanos.dp);
    };





});