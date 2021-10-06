import React from 'react'

function Footer() {
    return (
        <footer className="page-footer #4a148c purple darken-4">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()} , {new Date().getMonth()} Xakaton 
                    <a className="grey-text text-lighten-4 right" href="#!">Ozmu Milliy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
