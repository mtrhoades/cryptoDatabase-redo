// Imports
const React = require('react');


// Stub function
function Def (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'Crypto-DB'}</title>
            <link href="/css/styles.css" rel="stylesheet"></link>
            </head>
            <body>
                <h1>HTML DEFAULT HERE (nav bar)</h1>
                {html.children}
            </body>
        </html>
    )
}


// Exports
module.exports = Def;
