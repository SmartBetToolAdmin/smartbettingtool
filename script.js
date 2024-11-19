// Function for Win/Draw Prediction
function calculateWinDraw() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);
    const oddsTeam1 = parseFloat(document.getElementById("oddsTeam1").value);
    const oddsTeam2 = parseFloat(document.getElementById("oddsTeam2").value);
    const oddsDraw = parseFloat(document.getElementById("oddsDraw").value);

    if (isNaN(avgTeam1) || isNaN(avgTeam2) || isNaN(oddsTeam1) || isNaN(oddsTeam2) || isNaN(oddsDraw)) {
        document.getElementById("recommendation").innerText = "Enter all data";
        return;
    }

    const probTeam1 = 1 / oddsTeam1;
    const probTeam2 = 1 / oddsTeam2;
    const probDraw = 1 / oddsDraw;
    const totalProb = probTeam1 + probTeam2 + probDraw;

    const normProbTeam1 = probTeam1 / totalProb;
    const normProbTeam2 = probTeam2 / totalProb;

    if (normProbTeam1 >= 0.6) {
        document.getElementById("recommendation").innerText = "Team 1 to win likely";
    } else if (normProbTeam2 >= 0.6) {
        document.getElementById("recommendation").innerText = "Team 2 to win likely";
    } else if (normProbTeam1 > normProbTeam2) {
        document.getElementById("recommendation").innerText = "Team 1 or draw likely";
    } else if (normProbTeam2 > normProbTeam1) {
        document.getElementById("recommendation").innerText = "Team 2 or draw likely";
    } else {
        document.getElementById("recommendation").innerText = "Draw likely";
    }
}

// Function for Both Teams to Score
function calculateBothToScore() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        document.getElementById("recommendation").innerText = "Enter data";
        return;
    }

    if (avgTeam1 >= 1.5 && avgTeam2 > 1) {
        document.getElementById("recommendation").innerText = "Both teams to score likely";
    } else if (avgTeam1 < 1.5 && avgTeam2 <= 1) {
        document.getElementById("recommendation").innerText = "Both teams to score unlikely";
    } else {
        document.getElementById("recommendation").innerText = "Both teams to score unlikely";
    }
}

// Function for First Team to Score
function calculateFirstTeamToScore() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        document.getElementById("recommendation").innerText = "Enter data";
        return;
    }

    if (avgTeam1 > avgTeam2) {
        document.getElementById("recommendation").innerText = "Team 1 likely to score first";
    } else if (avgTeam2 > avgTeam1) {
        document.getElementById("recommendation").innerText = "Team 2 likely to score first";
    } else {
        document.getElementById("recommendation").innerText = "Either team can score first";
    }
}

// Function for Over/Under Goals
function calculateOverUnder() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        document.getElementById("recommendation").innerText = "Enter data";
        return;
    }

    if (avgTeam1 >= 1.5 && avgTeam2 > 1) {
        document.getElementById("recommendation").innerText = "Over 2.5 goals likely";
    } else if (avgTeam1 < 1.5 && avgTeam2 <= 1) {
        document.getElementById("recommendation").innerText = "Under 2.5 goals likely";
    } else {
        document.getElementById("recommendation").innerText = "Under 2.5 goals likely";
    }
}

function clearAll() {
    document.getElementById("avgTeam1").value = "";
    document.getElementById("avgTeam2").value = "";
    document.getElementById("oddsTeam1").value = "";
    document.getElementById("oddsTeam2").value = "";
    document.getElementById("oddsDraw").value = "";

    const recommendation = document.getElementById("recommendation");
    recommendation.textContent = "";
}


