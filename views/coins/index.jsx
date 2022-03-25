// Imports
const React = require('react'); // react import
const Def = require('../default'); // default html import


// Stub Function
function index ( { coin, title } ) {
    return (
        <Def title={title}>
            <main>
                <h1>Places Index Page</h1>
            </main>
        </Def>
    )
}


// Exports
module.exports = index; 