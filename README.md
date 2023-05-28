# Lab 8 - Starter

Nikan Ostovan, no partner

Question 1:
    automated tests should be done within a github actions command to run the tests everytime there is a push or a pull request.
    this needs to happen in order to make sure that the software is functional at all times when pushed to the repo;
Question 2:
    No, you use unit testing, since E2E simulates user interaction, and only user input is needed for this.
Question 3:
    Yes, as a message system would have a lot of different parts interacting with each other, and each of those modules need to be individually unit tesesd. 
Question 4:
    No, end to end testing would be more appropriate, to see if the user inputs more than 80 characters the input box will truncate correctly or not. 