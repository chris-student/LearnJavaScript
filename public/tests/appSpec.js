describe('LearnJavascript', function() {
    it('can show question view', function() {
        learnjavascript.showView('#question-1');
        expect($('.view-container .question-view').length).toEqual(1);
    });
});
