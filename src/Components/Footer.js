import React from 'react'
import {FaFacebookSquare,FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa'
export default function Footer() {
    return (
        <section className="bg-dark text-white ">
            <footer className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 px-5">
                            <div className="row">
                                <h2>Nikhil Comforts</h2>
                            </div>
                            <div className="row pt-2">
                                <p>Nikhil Comforts is a multi disciplinary engineering contracting company. We at Nikhil Comforts are backed by highly experienced and qualified Project Managers, engineers and supervisers. We started off with, and established ourselves in the domain of HVAC</p>
                            </div>
                            <div className="row">
                                    <h2>
                                <FaFacebookSquare className="mr-3 social-media"/>   
                                <FaInstagram className="mr-3 social-media"/>
                                <FaLinkedinIn className="mr-3 social-media"/>
                                <FaTwitter className="social-media"/> 
                                </h2>  
                            </div>
                        </div>
                        <div className="col-lg-6 px-5">
                            <div className="row pl-3"><b>Quick Links</b></div>
                            <div className="row pt-4">
                            <div className="col-lg-4">
                                <ul className="text-decoration-none list-group list-group-flush">
                                    <li>Information</li>
                                    <li>Proejects</li>
                                    <li>About Us</li>
                                    <li>Blogs</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="text-decoration-none list-group list-group-flush">
                                    <li>Information</li>
                                    <li>Proejects</li>
                                    <li>About Us</li>
                                    <li>Blogs</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="text-decoration-none list-group list-group-flush">
                                    <li>Information</li>
                                    <li>Proejects</li>
                                    <li>About Us</li>
                                    <li>Blogs</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row px-5 mt-5">
                    <div className="container d-flex justify-content-around flex-sm-row">
                    <a href="/" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="/" rel="noopener noreferrer">Terms of usage</a>
                    <a href="/" rel="noopener noreferrer">2018 Nikhil Comforts</a>
                    </div>
                    </div>
                    
                </div>
            </footer>
            <div className="text-center w-100 bg-black">
                <p className="m-0 p-0">Designed by <a href="https://edunomics.in/" target="_blank" rel="noopener noreferrer" className="m-0 p-0 text-success">Edunomics</a></p>
            </div>
        </section>
    )
}
