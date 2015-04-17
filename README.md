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
npm install # this will create node_modules/ subdirectory in your directory
```

Run gulp + browsersync + flask
------------------------------
Step 5. Make sure your flask port is set to `5003`:
```python
# app.py
if __name__ == '__main__':
    app.run(debug=True, port=5003)
```

Step 6. Run gulp
```bash
gulp # this will run flask and open a browser
```

Troubleshooting
------------
If you have trouble connecting, make sure the port is set to the correct port.
Trying closing your browser.
Also, you might have to goto the BrowserSync control panel (localhost:3001) and click 'Reload Browser' to refresh it.
