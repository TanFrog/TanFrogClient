# Tan Frog Client
[![Build Status][travis-badge]][travis-badge-url]

Tan Frog is an open source web application build on:
1. FrontEnd - TypeScript and Angular2
2. Backend - ASP.NET Web API
3. Database - SQL Azure

To best describe what Tan Frog does, I use this example:
International Community School (ICS) in Kirkland Washington holds an annual 'Art Day' event. There are 20+ classes available and students attend 3 of these classes 
on this one day instead of their normal classes.

This web application is used to:
1. Display class options to students
2. Allows students to set their class preferences (up to 6)
3. After preferences are set, assigns students to classes for each of the 3 periods.
4. Provides class assignments to students and class rosters to instructors.
5. Do 1 through 4 for any generic organization. 

## Admin Functions
An organization will be assigned one or more administrators.  Once the organization exists, the administrator can create events.
An event has two different schedules.

The first schedules defines important dates related to this event, for example:
1. Students allowed to set preferences 1/2/2017
2. Preference setting ends 1/6/2017
3. Class assignments complete 1/7/2017
4. Event date 1/9/2017

The second schedule is a day-of-event schedule.  Here is a sample day-of-event schedule:
1. Home Room for Attendance 8:00 - 8:10
2. Period 1 8:15 - 10:10
3. Period 2 10:15 - 12:10
4. Lunch 12:15 - 12:45
5. Assembly 12:50 - 1:25
6. Period 3 1:30 - 3:00

After the administrator defines the schedules above, they can import students and define classes.

The administrators should let the students know to visit the tan frog website to view classes and set preferences on the appropriate dates.

## Student Functions
Students will visit the tan frog website and select their event.  They will see available classes - and be able to easily set preferences using a drag-and-drop interface.
Preferences, once set, are locked and can only be unlocked by an administrator.  This prevents other students from setting preferences maliciously.  After class assignments
have been made, students return to the tan frog website to see (and print out) their schedules.  

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Install npm package
> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
