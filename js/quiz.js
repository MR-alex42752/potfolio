(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} sur ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Active Directory is:",
            answers: {
                a: "A virtual private network",
                b: "An authentication method",
                c: "A directory service"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one is not a Windows command?",
            answers: {
                a: "Fdisk",
                b: "Chkdsk",
                c: "More"
            },
            correctAnswer: "a"
        },
        {
            question: "In Windows, what does the command netstat –r do?",
            answers: {
                a: "This command lists the network interfaces of the active node.",
                b: "This command converts a FAT or FAT32 partition to NTFS.",
                c: "This command displays the routing table."
            },
            correctAnswer: "c"
        },
        {
            question: "A Windows client workstation needs to connect to Windows NT Server via the Internet. Which technology can be useful in this case?",
            answers: {
                a: "PPTP",
                b: "OpenVPN",
                c: "SSL"
            },
            correctAnswer: "a"
        },
        {
            question: "Which statement is true about the Convert utility?",
            answers: {
                a: "It converts a FAT32 file system to NTFS.",
                b: "It converts a FAT16 file system to FAT32.",
                c: "It converts an NTFS file system to FAT16."
            },
            correctAnswer: "a"
        },
        {
            question: "Which authentication and encryption protocol, implemented in Windows systems, ensures secure Internet connections?",
            answers: {
                a: "SSL",
                b: "LDAP",
                c: "Kerberos"
            },
            correctAnswer: "a"
        },
        {
            question: "You want to copy encrypted files from an NTFS volume to a folder on a FAT32 volume. What will be the state of the copied file on the FAT32 volume?",
            answers: {
                a: "The files will be copied but will not retain their encrypted state in the destination folder.",
                b: "The files will be copied and will retain their encrypted state in the destination folder.",
                c: "The NTFS files must first be decrypted before copying to the FAT32 volume."
            },
            correctAnswer: "a"
        },
        {
            question: "Which services are used to manage an IIS server?",
            answers: {
                a: "FTP, SSH, HTTP",
                b: "FTP, SMTP, HTTP",
                c: "HTTP, SNMP, FTP"
            },
            correctAnswer: "b"
        },
        {
            question: "Which utility is used to check the integrity of a host on the Internet?",
            answers: {
                a: "Tracert",
                b: "Ping",
                c: "Netstat"
            },
            correctAnswer: "b"
        },
        {
            question: "Which operating system is designed for a thin client?",
            answers: {
                a: "Windows XP",
                b: "Windows 7",
                c: "Windows Embedded"
            },
            correctAnswer: "c"
        }
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
