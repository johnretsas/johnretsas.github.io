import React from "react";
import styles from "./css/Home.module.css"; // Import css modules stylesheet as styles
import { SiTypescript, SiKubernetes, SiPhp, SiKotlin, SiAmazonaws, SiPython } from 'react-icons/si'
import { TbBrandKotlin } from "react-icons/tb"

const Home = () => {
    // const details = {
    //     email: "joretsas@gmail.com",
    //     tel: "07756541760"
    // }
    return <div className={styles.container}>
        <p>Hey, I'm John :)</p>
        <p>I'm a <em>senior full stack engineer</em> focused mainly on JS/TS stacks <SiTypescript size={"30px"} style={{ marginLeft: 10 }} /></p>
        <p>Other stuff I've dabbled with is:</p>
        <p>
            Kubernetes <SiKubernetes size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} />,
            PHP <SiPhp size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} />,
            Kotlin <TbBrandKotlin size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} />,
            AWS <SiAmazonaws size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} />,
            Python <SiPython size={"20px"} style={{ marginLeft: 10, marginRight: 10 }} />
            , and more...</p>
    </div>
}

export default Home;
