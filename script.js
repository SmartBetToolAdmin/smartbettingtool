// Function for Win/Draw Prediction
function calculateWinDraw() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);
    const oddsTeam1 = parseFloat(document.getElementById("oddsTeam1").value);
    const oddsTeam2 = parseFloat(document.getElementById("oddsTeam2").value);
    const oddsDraw = parseFloat(document.getElementById("oddsDraw").value);

    const recommendation = document.getElementById("recommendation");

    if (isNaN(avgTeam1) || isNaN(avgTeam2) || isNaN(oddsTeam1) || isNaN(oddsTeam2) || isNaN(oddsDraw)) {
        recommendation.innerText = "Enter all data";
        recommendation.style.backgroundColor = "#f4ae01"; // Change background color
        return;
    }

    const probTeam1 = 1 / oddsTeam1;
    const probTeam2 = 1 / oddsTeam2;
    const probDraw = 1 / oddsDraw;
    const totalProb = probTeam1 + probTeam2 + probDraw;

    const normProbTeam1 = probTeam1 / totalProb;
    const normProbTeam2 = probTeam2 / totalProb;

    if (normProbTeam1 >= 0.6) {
        recommendation.innerText = "Team 1 to win likely";
    } else if (normProbTeam2 >= 0.6) {
        recommendation.innerText = "Team 2 to win likely";
    } else if (normProbTeam1 > normProbTeam2) {
        recommendation.innerText = "Team 1 or draw likely";
    } else if (normProbTeam2 > normProbTeam1) {
        recommendation.innerText = "Team 2 or draw likely";
    } else {
        recommendation.innerText = "Draw likely";
    }

    recommendation.style.backgroundColor = "#f4ae01"; // Change background color
}

// Function for Both Teams to Score
function calculateBothToScore() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    const recommendation = document.getElementById("recommendation");

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        recommendation.innerText = "Enter data";
        recommendation.style.backgroundColor = "#f4ae01"; // Change background color
        return;
    }

    if (avgTeam1 >= 1.5 && avgTeam2 > 1) {
        recommendation.innerText = "Both teams to score likely";
    } else if (avgTeam1 < 1.5 && avgTeam2 <= 1) {
        recommendation.innerText = "Both teams to score unlikely";
    } else {
        recommendation.innerText = "Both teams to score unlikely";
    }

    recommendation.style.backgroundColor = "#f4ae01"; // Change background color
}

// Function for First Team to Score
function calculateFirstTeamToScore() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    const recommendation = document.getElementById("recommendation");

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        recommendation.innerText = "Enter data";
        recommendation.style.backgroundColor = "#f4ae01"; // Change background color
        return;
    }

    if (avgTeam1 > avgTeam2) {
        recommendation.innerText = "Team 1 likely to score first";
    } else if (avgTeam2 > avgTeam1) {
        recommendation.innerText = "Team 2 likely to score first";
    } else {
        recommendation.innerText = "Either team can score first";
    }

    recommendation.style.backgroundColor = "#f4ae01"; // Change background color
}

// Function for Over/Under Goals
function calculateOverUnder() {
    const avgTeam1 = parseFloat(document.getElementById("avgTeam1").value);
    const avgTeam2 = parseFloat(document.getElementById("avgTeam2").value);

    const recommendation = document.getElementById("recommendation");

    if (isNaN(avgTeam1) || isNaN(avgTeam2)) {
        recommendation.innerText = "Enter data";
        recommendation.style.backgroundColor = "#f4ae01"; // Change background color
        return;
    }

    if (avgTeam1 >= 1.5 && avgTeam2 > 1) {
        recommendation.innerText = "Over 2.5 goals likely";
    } else if (avgTeam1 < 1.5 && avgTeam2 <= 1) {
        recommendation.innerText = "Under 2.5 goals likely";
    } else {
        recommendation.innerText = "Under 2.5 goals likely";
    }

    recommendation.style.backgroundColor = "#f4ae01"; // Change background color
}

// Function to Clear All Data
function clearAll() {
    document.getElementById("avgTeam1").value = "";
    document.getElementById("avgTeam2").value = "";
    document.getElementById("oddsTeam1").value = "";
    document.getElementById("oddsTeam2").value = "";
    document.getElementById("oddsDraw").value = "";

    const recommendation = document.getElementById("recommendation");
    recommendation.textContent = "";
    recommendation.style.backgroundColor = "#ffffff"; // Revert background color
}
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const category = document.getElementById("searchCategory").value;
    const query = document.getElementById("searchInput").value.toLowerCase();

    if (category === "all") {
        // Search all pages
        const pages = [
            { name: "Moneyline (Win/Draw/Win)", url: "moneyline.html" },
            { name: "Point Spread (Handicap)", url: "pointspread.html" },
            { name: "Over/Under (Totals)", url: "overunder.html" },
            { name: "Double Chance", url: "doublechance.html" },
            { name: "Draw No Bet", url: "drawnobet.html" },
            { name: "Both Teams to Score", url: "bothteamstoscore.html" },
            { name: "First Goal Scorer", url: "firstgoalscorer.html" },
            { name: "Anytime Goal Scorer", url: "anytimegoalscorer.html" },
            { name: "Half-Time/Full-Time", url: "halftimefulltime.html" },
            { name: "Exact Score", url: "exactscore.html" },
            { name: "Parlay/Accumulator", url: "parlay.html" },
            { name: "Outrights (Futures)", url: "outrights.html" },
            { name: "Asian Handicap", url: "asianhandicap.html" },
            { name: "Live/In-Play Betting", url: "liveinplay.html" },
            { name: "Winning Margin", url: "winningmargin.html" },
            { name: "Correct Scoreline", url: "correctscoreline.html" },
            { name: "Clean Sheet", url: "cleansheet.html" },
            { name: "Time of Goal", url: "timeofgoal.html" },
            { name: "First Half Bets", url: "firsthalfbets.html" },
            { name: "Player Props", url: "playerprops.html" },
            { name: "Football (Soccer)", url: "football.html" },
            { name: "Cricket", url: "cricket.html" },
            { name: "Basketball", url: "basketball.html" },
            { name: "Tennis", url: "tennis.html" },
            { name: "Field Hockey", url: "fieldhockey.html" },
            { name: "Volleyball", url: "volleyball.html" },
            { name: "Table Tennis", url: "tabletennis.html" },
            { name: "Baseball", url: "baseball.html" },
            { name: "Golf", url: "golf.html" },
            { name: "American Football", url: "americanfootball.html" },
            { name: "Rugby", url: "rugby.html" },
            { name: "Badminton", url: "badminton.html" },
            { name: "Swimming", url: "swimming.html" },
            { name: "Motorsport", url: "motorsport.html" },
            { name: "Boxing", url: "boxing.html" }
        ];

        const match = pages.find(page => page.name.toLowerCase().includes(query));

        if (match) {
            window.location.href = match.url;
        } else {
            alert("No pages found matching your query!");
        }
    } else {
        // Navigate directly to the selected category
        window.location.href = category;
    }
});

