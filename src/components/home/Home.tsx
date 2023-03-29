import React from "react";
import styles from "./css/Home.module.css"; // Import css modules stylesheet as styles
import { SiJavascript, SiTypescript, SiKubernetes, SiPhp, SiKotlin, SiAmazonaws, SiPython } from 'react-icons/si'
import { TbBrandKotlin } from "react-icons/tb"
import { Link } from "react-router-dom";

const Home = () => {
    return <div className={styles.container}>
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: "100%", maxWidth: 500, marginTop: "20px" }}>
            <div style={{ marginBottom: "10px" }}>Hey, I'm <span style={{ color: "limegreen" }}>John</span> :)</div>
            <div style={{ marginBottom: "10px" }}>I have <span style={{ color: "limegreen" }}>5+ years</span> of experience as a <span style={{ color: "limegreen" }}>
                software engineer</span>
            </div>
            <div style={{ textAlign: "left" }}>
                <SiJavascript color="limegreen" size={"15px"} style={{ marginRight: 10 }} />+<SiTypescript color="limegreen" size={"15px"} style={{ marginInline: 10 }} /> stacks
            </div>
            <div style={{ textAlign: "right" }}>Kafka</div>
            <div style={{ textAlign: "left" }}>Kubernetes <SiKubernetes size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} /></div>
            <div style={{ textAlign: "right" }}>PHP <SiPhp size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} /></div>
            <div style={{ textAlign: "left" }}>Kotlin <TbBrandKotlin size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} /></div>
            <div style={{ textAlign: "right" }}>AWS <SiAmazonaws size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} /></div>
            <div style={{ textAlign: "left" }}>Python <SiPython size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} /></div>
            <div style={{ width: "100%", marginBlock: 40, background: "limegreen", height: 2 }} />
            <div style={{ marginTop: "20px", }}>
                <Link to="/blog" className="root_navbar_link_idle root_navbar_link">Read my blog</Link>
            </div>
        </div>
    </div >
}

export default Home;
