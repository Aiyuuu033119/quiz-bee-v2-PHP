<?php

    class Question{
        function index(){
            $question = array(
                '0' => array(
                        'question' => 'Choose the preferred tag pair to use when emphasizing text?',
                        'choices' => array(
                            'a' => '<strong> </strong>',
                            'b' => '<i> </i>',
                            'c' => '<a> </a>',
                        ),
                        'correct' => 'a'
                    ),
                '1' => array(
                        'question' => 'Someone who works with a website plan or design plan to program the actual site?',
                        'choices' => array(
                            'a' => 'Dekstop Developer',
                            'b' => 'Web Developer',
                            'c' => 'Mobile Developer',
                        ),
                        'correct' => 'b'
                    ),
                '2' => array(
                    'question' => 'What tag pair contains the items in an ordered or unordered list?',
                    'choices' => array(
                        'a' => '<ul> </ul>',
                        'b' => '<ol> </ol>',
                        'c' => '<li> </li>',
                    ),
                    'correct' => 'c'
                ),
                '3' => array(
                    'question' => 'Choose the special character that is used to indicate a blank space?',
                    'choices' => array(
                        'a' => '/n',
                        'b' => '&nbsp;',
                        'c' => '<br/>',
                    ),
                    'correct' => 'b'
                ),
                '4' => array(
                    'question' => 'What tag pair is used to create the largest heading?',
                    'choices' => array(
                        'a' => '<h1> </h1>',
                        'b' => '<h6> </h6>',
                        'c' => '<b> </b>',
                    ),
                    'correct' => 'a'
                ),
                '5' => array(
                    'question' => 'What type of HTML list will automatically place a bullet point indicator in front of each item?',
                    'choices' => array(
                        'a' => 'List',
                        'b' => 'Ordered List',
                        'c' => 'Unordered List',
                    ),
                    'correct' => 'c'
                ),
                '6' => array(
                    'question' => 'Which CSS property configures the font typeface?',
                    'choices' => array(
                        'a' => 'font-weight',
                        'b' => 'font-size',
                        'c' => 'font-family',
                    ),
                    'correct' => 'c'
                ),
                '7' => array(
                    'question' => 'An External Style Sheet uses the _____ file extension?',
                    'choices' => array(
                        'a' => 'css',
                        'b' => 'scss',
                        'c' => 'sass',
                    ),
                    'correct' => 'a'
                ),
                '8' => array(
                    'question' => 'Use the _____ tag to associate a web page with an External Style Sheet?',
                    'choices' => array(
                        'a' => '<script>',
                        'b' => '<link>',
                        'c' => '<meta>',
                    ),
                    'correct' => 'b'
                ),
                '9' => array(
                    'question' => 'When CSS is coded in the body of the web page as an attribute of an HTML tag it is called _____?',
                    'choices' => array(
                        'a' => 'External',
                        'b' => 'Inline',
                        'c' => 'Internal',
                    ),
                    'correct' => 'b'
                ),
                '10' => array(
                    'question' => 'What type of program is used to view web pages?',
                    'choices' => array(
                        'a' => 'Web Page',
                        'b' => 'Website',
                        'c' => 'Web Browser',
                    ),
                    'correct' => 'c'
                ),
                '11' => array(
                    'question' => 'A _____ consists of two or more computers connected for the purpose of communicating and sharing resources',
                    'choices' => array(
                        'a' => 'Network Cable',
                        'b' => 'Network',
                        'c' => 'Wi-Fi Hotspot',
                    ),
                    'correct' => 'b'
                ),
                '12' => array(
                    'question' => 'A domain name is a unique text-based Internet address corresponding to a unique?',
                    'choices' => array(
                        'a' => 'PORT',
                        'b' => 'MAC Address',
                        'c' => 'IP Address',
                    ),
                    'correct' => 'c'
                ),
                '13' => array(
                    'question' => 'Consists of a worldwide collection of electronic documents?',
                    'choices' => array(
                        'a' => 'Web',
                        'b' => 'Web Server',
                        'c' => 'Web Page',
                    ),
                    'correct' => 'a'
                ),
                '14' => array(
                    'question' => 'Global network connecting millions of computers, making it possible to exchange information?',
                    'choices' => array(
                        'a' => 'Internet',
                        'b' => 'Wi-fi',
                        'c' => 'Bluetooth',
                    ),
                    'correct' => 'a'
                ),
                '15' => array(
                    'question' => 'Electronic document on the web containing text, graphics, audio, video, and links to other webpages?',
                    'choices' => array(
                        'a' => 'Website',
                        'b' => 'Web Page',
                        'c' => 'Web Server',
                    ),
                    'correct' => 'b'
                ),
                '16' => array(
                    'question' => 'Using _____, a Web sites visitors can move from one page to another, and view information in any order?',
                    'choices' => array(
                        'a' => 'Container',
                        'b' => 'Button',
                        'c' => 'Hyperlinks',
                    ),
                    'correct' => 'c'
                ),
                '17' => array(
                    'question' => 'The _____ tags decrease the font size in comparison to the surrounding text?',
                    'choices' => array(
                        'a' => '<small></small>',
                        'b' => '<large></large>',
                        'c' => '<p></p>',
                    ),
                    'correct' => 'a'
                ),
                '17' => array(
                    'question' => 'The _____ tags display text below normal text?',
                    'choices' => array(
                        'a' => '<small></small>',
                        'b' => '<sup></sup>',
                        'c' => '<sub></sub>',
                    ),
                    'correct' => 'c'
                ),
                '18' => array(
                    'question' => 'The _____ tag is often used for text in column format in another document pasted into HTML code?',
                    'choices' => array(
                        'a' => '<blockqoute></blockqoute>',
                        'b' => '<pre></pre>',
                        'c' => '<div></div>',
                    ),
                    'correct' => 'b'
                ),
                '19' => array(
                    'question' => 'Text tagged with the em tags usually appear this way?',
                    'choices' => array(
                        'a' => 'Bold',
                        'b' => 'Normal',
                        'c' => 'Italicized',
                    ),
                    'correct' => 'c'
                ),
            );
        
            echo json_encode($question);
        }
    }

?>
