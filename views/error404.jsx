// Imports
const React = require('react'); // react import
const Def = require('./default'); // default html import

// Stub Function
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND!</h1>
                <img src="images/cat404.png" alt="cat"></img>
                <p>Oops! We can NOT find this page</p>
            </main>
        </Def>
    )
}


// Exports
module.exports = error404;