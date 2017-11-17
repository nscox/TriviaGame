$('#start').on('click', function () {
    game.start();
console.log ('click to start');
})
$(document).on('click', '#end', function () {
    game.done();

})
var questions = [{
    question: "What game was created by French mathematician Blaise Pascal, which he discovered when doing experiments into perpetual motion?",
    answers: ["The Game of Roulette", "The Famous Drinking Bird Game", "The Spinning Top"],
    correctAnswer: "The Game of Roulette"
}, {
    question: "Which is the smallest ocean?",
    answers: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean"],
    correctAnswer: "Arctic Ocean"
}, {
    question: "What California city did the last Pony Express ride end in?",
    answers: ["Culver City", "San Diego", "Sacramento"],
    correctAnswer: "Sacramento"
}, {
    question: "Where does the British Prime Minister live?",
    answers: ["221B Baker Street", "10, Downing Street", "50 Wimpole Street"],
    correctAnswer: "10, Downing Street"
}, {
    question: "What single name is more commonly applied to Holy Roman Emperor Charles the Great?",
    answers: ["Constantine", "Charlemagne", "Hannibal"],
    correctAnswer: "Charlemagne"
}, {
    question: "Which is the only mammal that can't jump?",
    answers: ["Platypus", "Elephant", "Sloth"],
    correctAnswer: "Elephant"
}, {
    question: "Which country has more tractors per capita?",
    answers: ["Canada", "Japan", "Iceland"],
    correctAnswer: "Iceland"
}, {
    question: "The collective noun for a group of Giraffes is called a what?",
    answers: ["A Heard", "A Tower", "A Procerus"],
    correctAnswer: "A Tower"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();

        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">45</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><br><button id="end">DONE</button>');
    },
    done: function () {
        count=0;
        clearInterval(counter);
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

            // if (count <= 0) {
            //     clearInterval(counter);
            // }
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>Finished!</h2>");
        $('#subwrapper').append("<h3>Correct Answers:  " + this.correct + "<h3>");
        $('#subwrapper').append("<h3>Incorrect Answers:  " + this.correct + "<h3>");
        $('#subwrapper').append("<h3>Unanswered:  " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};