#!/bin/bash

    rm -rf allure-report

    suite_name="$1"

    ./node_modules/protractor/bin/protractor conf.js --suite $suite_name

    # get the result
    RESULT="$?"
    # command to generate report
    GENERATE_REPORT="./node_modules/allure-commandline/bin/allure generate allure-results --clean -o allure-report"

    if [ $RESULT -eq 0 ]; then

        $GENERATE_REPORT
        exit 0
        
    else 

        $GENERATE_REPORT
        exit 1

    fi

