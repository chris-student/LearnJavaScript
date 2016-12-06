describe('LearnJavascript', function() {
    it('can show question view', function() {
        learnjavascript.showView('#question-1');
        expect($('.view-container .question-view').length).toEqual(1);
    });

    it('shows the landing page view when there is no hash', function() {
        learnjavascript.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });

    it('passes the hash view parameter to the view function', function() {
        spyOn(learnjavascript, 'questionView');
        learnjavascript.showView('#question-42');
        expect(learnjavascript.questionView).toHaveBeenCalledWith('42');
    });

    describe('problem view', function() {
        it('has a title that includes the question number', function() {
            var view = learnjavascript.questionView('1');
            expect(view.text()).toEqual('Question #1 Arriving soon!!!');
        });
    });
});
