# Run TooltipDemo in your browser

Download the project folder and Extract it. Now, in your command promp, run command "npm install node-modules --save" to install node modules.
Now, run the application by using the command "ng serve" in your cmd. If you have opened the project in visual studio run "npm start"


# About Application

A single page Angular app with simple routing that has one state/view. In it, there are two buttons that when clicked, show a tooltip above the button with some text in it.

When button A is clicked, if button B’s tooltip is open it will close and vice versa - only one tooltip will be visible at a time. Either tooltip will close when clicked anywhere outside of it, but remain open if clicked inside. Either tooltip will close when ESC key is pressed.

If you scroll down to an open tooltip it will detect being at the edge of the screen and change position to be below the butto


# ToolTipDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
