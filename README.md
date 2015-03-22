Installation
---------

Step 1. Install node package manager (npm) by going to `https://nodejs.org/` and click INSTALL

Step 2. Check that `npm` is installed:

```bash
npm -v
```

Step 3. Install gulp globally

```bash
npm install -g gulp

```

Step 4. Install requirements

```bash
cd myproject
npm install
```

Run gulp + browsersync + flask
------------------------------
Step 5. Make sure your flask port is set to `5003`:
```
app.run(debug=True, port=5003)
```

Step 6. Run gulp
```
gulp # this will run flask and open a browser
```
