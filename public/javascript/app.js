'use strict';
var learnjavascript = {};

learnjavascript.questionView = function(questionNumber) {
    var title = 'Question #' + questionNumber + ' Arriving soon!!!';
    return $('<div class="question-view">').text(title);
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