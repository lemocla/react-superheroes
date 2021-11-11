import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid bg-black px-4">
            <div className="row py-4 mt-4 ">
                <div className='col-6 text-white footer-a'>
                <a className='fs-5 text-decoration-none' href='https://github.com/GazzaJ' target='_blank' rel="noreferrer" ><i className="fab fa-github fw-bold fs-3 pe-2"></i> Gareth John</a>
                </div>
                <div className='col-6 text-white text-end footer-a'>
                <a className='fs-5 text-decoration-none footer-a:hover' href='https://github.com/lemocla' target='_blank' rel="noreferrer" >Claire Lemonnier <i className="fab fa-github fw-bold ps-2 fs-3"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer