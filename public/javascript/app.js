'use strict';
var learnjavascript = {};

learnjavascript.questions = [
    {
        description:"What is Truth?",
        code:"function problem() {return __;}"
    },
    {
        description:"Easy Maths?",
        code:"function problem() {return 42 === 7* __;}"
    }
];

learnjavascript.applyObject = function(obj,elem) {
    for (var key in obj) {
        elem.find('[data-name="' + key + '"]').text(obj[key]);
    }
}

learnjavascript.questionView = function(data) {
    var questionNumber = parseInt(data, 11);
    var view = $('.templates .question-view').clone();
    var questionData = learnjavascript.questions[questionNumber - 1];
    var resultFlash = view.find('.result');

    function checkAnswer() {
        var answer = view.find('.answer').val();
        var test = questionData.code.replace('__', answer) + ';problem()';
        return eval(test);
    }

    function checkAnswerClick() {
        if(checkAnswer()) {
            learnjavascript.flashElement(resultFlash, 'Correct');
        }else {
            learnjavascript.flashElement(resultFlash, 'InCorrect!');
        }
        return false;
    }

    view.find('.check-btn').click(checkAnswerClick);
    view.find('.title').text('Question #' + questionNumber);
    learnjavascript.applyObject(questionData, view);
    return view;
}

learnjavascript.showView = function(hash) {
    var routes = {
        '#question': learnjavascript.questionView
    };
    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}

learnjavascript.appOnReady = function() {
    window.onhashchange = function() {
        learnjavascript.showView(window.location.hash);
    }
    learnjavascript.showView(window.location.hash);
}

learnjavascript.flashElement = function(elem,content) {
    elem.fadeOut('fast', function() {
        elem.html(content);
        elem.fadeIn();
    });
}