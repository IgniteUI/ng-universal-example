# Angular Universal Example

This repository demonstrate how to start using Ignite UI for Angular with Server-side rendering. 

# Build

Perform:
1. `npm install`
2. `npm run build:ssr && npm run serve:ssr`
3. Open `localhost:4000` in your browser

# Angular Universal

Most of the Angular applications run in a client's browser, but if you want to generate the full HTML for a page on the server, and avoid additional round-trips for data fetching - [Angular Universal](https://angular.io/guide/universal) come in handy. It renders a client-side page to HTML on the server that is later bootstrapped on the client. Okay, but how it works?

# How it works?

With Angular Universal, you will serve a static version of your apps' landing page, while at the same time the full Angular application loads in the background. The landing pages will be pure HTML and will be displayed even if the JavaScript is disabled, keep in mind that [handling browser events](ssr-rendering.md#things-to-note) won't be possible. More about Server Rendering you can find [here](https://developers.google.com/web/updates/2019/02/rendering-on-the-web).

# Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.
