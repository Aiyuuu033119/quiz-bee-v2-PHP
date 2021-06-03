$(document).ready(function () {

    $('.loader-container').html('<div class="loader11"></div>');
    $('.modal-loading').hide();

    // func for shuffle array 
    const chooseRandom = (json, num = 1) => {

        // container for shuffle array 
        const res = [];

        for (let i = 0; i < num;) {

            const random = Math.floor(Math.random() * json.length);
            if (res.indexOf(json[random]) !== -1) {
                continue;
            };
            res.push(json[random]);
            i++;
        };

        return res;
    };

    var question_list;
    let seconds = 0;
    var questionPerTime = 29;
    var i = 0;
    let right = 0;

    var question_stored = '';
    var answer_stored = '';

    // $('.count').hide();

    // funtion for modal
    $('.play-btn').on('click', function () {

        $.ajax({
            url: "https://quiz-bee-ian.herokuapp.com/index.php?question=1",
            type: "GET",
            contentType: false,
            processData: false,
            beforeSend: function(){
                $('.modal-loading').show();
                // modal hide
                $('.modal').hide();
            },
            success: function (data) {

                var json = JSON.parse(data);

                // passing array
                question_list = chooseRandom(json, 10);

                $('.modal-loading').hide();

                // displaying question
                choose(i);

                // start timer
                count = setInterval(time, 1000)
            }
        });


    });

    //func for time
    function time() {

        if (seconds <= 19) {
            $('.timer-num').css('color', 'rgb(27,27,27)');
        }
        else {
            $('.timer-num').css('color', '#f75454');
        }

        if (seconds <= questionPerTime) {
            ++seconds;
            $('.timer-num').text(seconds);
        }
        else {
            $('.choices-a, .choices-b, .choices-c').css({
                'background-color': '#f75454',
                'pointer-events': 'none'
            });
            seconds = -1;
            setTimeout(function () {
                $('.choices-a, .choices-b, .choices-c').css({
                    'background-color': '#4759ff',
                    'pointer-events': 'auto'

                });
                choose(i);
            }, 1000);
        }
    }

    //function for question render
    function question(question, num) {

        if (num == question.length) {

            // setting up the pointer events to none
            pointerEvents('.choices-a, .choices-b, .choices-c', 'none');

            // setting for number label
            $('.color-label').css({
                'width': '100%',
                'border-radius': '50px'
            });

            clearInterval(count);

            countAppper(right);


        } else {

            // setting up the pointer events to auto
            pointerEvents('.choices-a, .choices-b, .choices-c', 'auto');

            // setting for number label
            $('.color-label').css({
                'width': ((i + 1) / question.length) * 100 + '%',
                'border-radius': '50px 0 0 50px'
            });

            // var shuffleChoices = chooseRandom(question[num].choices, 2);
            var choices = [];
            choices.push(question[num].choices.a, question[num].choices.b, question[num].choices.c);
            choices = chooseRandom(choices, 3);

            // setting up the question, choices, number of question
            $('.question-text').text(question[num].question);
            $('.answer-a').text(choices[0]);
            $('.answer-b').text(choices[1]);
            $('.answer-c').text(choices[2]);
            $('.from').text(num + 1);
            $('.to').text(question.length);

            question_stored+= question[num].question+'-/-';

            // determinig if the correct answer is a
            if (question[num].correct == 'a') {

                if(question[num].choices.a == choices[0]){
                    dataRelaying('.choices-a', 'b326b5062b2f0e69046810717534cb09')    
                }
                else{
                    dataRelaying('.choices-a', '');
                }

                if(question[num].choices.a == choices[1]){
                    dataRelaying('.choices-b', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-b', '');
                }

                if(question[num].choices.a == choices[2]){
                    dataRelaying('.choices-c', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-c', '');
                }


            }

            // determinig if the correct answer is b
            if (question[num].correct == 'b') {

                if(question[num].choices.b == choices[0]){
                    dataRelaying('.choices-a', 'b326b5062b2f0e69046810717534cb09')    
                }
                else{
                    dataRelaying('.choices-a', '');
                }

                if(question[num].choices.b == choices[1]){
                    dataRelaying('.choices-b', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-b', '');
                }

                if(question[num].choices.b == choices[2]){
                    dataRelaying('.choices-c', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-c', '');
                }

            } 

            // determinig if the correct answer is c
            if (question[num].correct == 'c') {

                if(question[num].choices.c == choices[0]){
                    dataRelaying('.choices-a', 'b326b5062b2f0e69046810717534cb09')    
                }
                else{
                    dataRelaying('.choices-a', '');
                }

                if(question[num].choices.c == choices[1]){
                    dataRelaying('.choices-b', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-b', '');
                }

                if(question[num].choices.c == choices[2]){
                    dataRelaying('.choices-c', 'b326b5062b2f0e69046810717534cb09') 
                }
                else{
                    dataRelaying('.choices-c', '');
                }

            }

            // preparing for the next set of question
            ++i;

        }

    }

    // function for displaying question
    function choose(i) {

        // apperance of question
        question(question_list, i);
    }

    $('.choices-a').on('click', function () {

        // determinig the if the choose is correct
        if ($(this).attr('data-relay') == 'b326b5062b2f0e69046810717534cb09') {

            // count correct answer
            right++;

            // collect answer
            answer_stored+= $('.answer-a').text()+'+t'+'-/-';

            // set background color to the right choices
            backgroundChoices('.choices-a', '#16da40');

        } else {

            // collect answer
            answer_stored+= $('.answer-a').text()+'+f'+'-/-';

            // set background color to the wrong choices
            backgroundChoices('.choices-a', '#f75454');

        }

        // setting up the pointer events to none
        pointerEvents('.choices-a, .choices-b, .choices-c', 'none');

        // restart the seconds to -1 to start in the zero
        seconds = -1;

        setTimeout(function () {

            // back to normal background color
            backgroundChoices('.choices-a', '#4759ff');

            // appear next question
            choose(i);

        }, 1000);
    });

    // func for B
    $('.choices-b').on('click', function () {

        // determinig the if the choose is correct
        if ($(this).attr('data-relay') == 'b326b5062b2f0e69046810717534cb09') {

            // count correct answer
            right++;

            // collect answer
            answer_stored+= $('.answer-b').text()+'+t'+'-/-';

            // set background color to the right choices
            backgroundChoices('.choices-b', '#16da40');

        } else {

            // collect answer
            answer_stored+= $('.answer-b').text()+'+f'+'-/-';

            // set background color to the wrong choices
            backgroundChoices('.choices-b', '#f75454');

        }

        // setting up the pointer events to none
        pointerEvents('.choices-a, .choices-b, .choices-c', 'none');

        // restart the seconds to -1 to start in the zero
        seconds = -1;

        setTimeout(function () {

            // back to normal background color
            backgroundChoices('.choices-b', '#4759ff');

            // appear next question
            choose(i);

        }, 1000);
    });

    // func for C
    $('.choices-c').on('click', function () {

        // determinig the if the choose is correct
        if ($(this).attr('data-relay') == 'b326b5062b2f0e69046810717534cb09') {

            // count correct answer
            right++;

            // collect answer
            answer_stored+= $('.answer-c').text()+'+t'+'-/-';

            // set background color to the right choices
            backgroundChoices('.choices-c', '#16da40');

        } else {

            // collect answer
            answer_stored+= $('.answer-c').text()+'+f'+'-/-';

            // set background color to the wrong choices
            backgroundChoices('.choices-c', '#f75454');

        }

        // setting up the pointer events to none
        pointerEvents('.choices-a, .choices-b, .choices-c', 'none');

        // restart the seconds to -1 to start in the zero
        seconds = -1;

        setTimeout(function () {

            // back to normal background color
            backgroundChoices('.choices-c', '#4759ff');

            // appear next question
            choose(i);

        }, 1000);
    });

    // func for color background of your choices
    function backgroundChoices(selector, color) {
        $(selector).css({
            'background-color': color
        });
    }

    // function for pointer events 
    function pointerEvents(selector, pointer) {
        $(selector).css({
            'pointer-events': pointer
        });
    }

    // func for setting data
    function dataRelaying(selector, data) {
        $(selector).attr('data-relay', data);
    }

    // func for counting modal
    function countAppper(resultToExam) {

        $('.card').hide();

        $('.count').css({
            'visibility': 'visible',
            'opacity': '1'
        }).addClass('count-show');

        var rederectingTime = 0;

        setInterval(() => {
            $('.wait').text(rederectingTime);
            if (rederectingTime == 3) {
                window.location.href = 'score.html' + window.location.search + '&result=' + (resultToExam * 10) + '&questions=' + question_stored + '&answers=' + answer_stored.replace(/&nbsp;/g, "160") ;
            }
            rederectingTime++;

        }, 500);

    }

    // setTimeout(() => {
        pointerEvents('.play-btn', 'auto')
    // }, 500);

});