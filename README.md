# webmonetization.dev

This is the source code for the landing page that lives at webmonetization.dev. It is simply a sign-up form for our newsletter, and also serves as a waitlist until we have actual web monetization providers. This page is written in HTML and CSS.

## Local development

1. Clone this repo to your local computer:
   ```shell
   $ git clone https://github.com/interledger/webmonetization.dev.git
   ```
2. Run a web server out of the folder you cloned the files into. If you do not have web server on your local machine, this repository comes with a very basic node-based server:
   ```shell
   $ node server.js
   ```
   The default port is `2000` but you can pass in any other port number you want:
   ```shell
   $ node server.js 5432
   ```
