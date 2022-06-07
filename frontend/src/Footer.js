import React from "react";
import { FaSeedling, FaInstagram, FaUserPlus } from "react-icons/fa";
import './Footer.css';
let year = new Date().getFullYear()
// Imported Icons from React icons for my footer

const Footer = () => (
    <div className="footer">
        <p style={{
            fontSize: "20px",
            textAlign: "center"
        }}>{year} | STOCKHOLM </p>
        <p className="footer-icons">
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://javligtgott.se/"><FaSeedling /></a>
            <a href="/"><FaUserPlus /></a>
        </p>

    </div>

);

export default Footer;