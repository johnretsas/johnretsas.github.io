import React from "react";
import styles from "./css/Home.module.css"; // Import css modules stylesheet as styles
import {
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiAmazonaws,
  SiPython,
  SiGo,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const Home = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          width: "100%",
          maxWidth: 600,
          marginTop: "20px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Hey, I'm <span style={{ color: "limegreen" }}>John</span> :)
        </div>
        <div style={{ marginBottom: "10px" }}>
          I am a senior software engineer with{" "}
          <span style={{ color: "limegreen", textDecoration: "underline" }}>7+ years</span> of experience.
        </div>
        <div
          style={{
            width: "100%",
            marginBlock: 40,
            background: "limegreen",
            height: 2,
          }}
        />
        <div style={{ textAlign: "left" }}>
          <SiJavascript
            color="limegreen"
            size={"40px"}
            style={{ marginRight: 10 }}
          />
          +
          <SiTypescript
            color="limegreen"
            size={"40px"}
            style={{ marginInline: 10 }}
          />{" "}
          stacks
        </div>
        <div style={{ textAlign: "right" }}>
          AWS{" "}
          <SiAmazonaws
            color="limegreen"
            size={"40px"}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          Kubernetes{" "}
          <SiKubernetes
            color="limegreen"
            size={"40px"}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          Golang{" "}
          <SiGo
            size={"40px"}
            style={{ marginLeft: 10, marginRight: 10 }}
            color="limegreen"
          />
        </div>
        <div style={{ textAlign: "left" }}>
          Kotlin{" "}
          <TbBrandKotlin
            color="limegreen"
            size={"40px"}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          Python{" "}
          <SiPython
            size={"40px"}
            style={{ marginLeft: 10, marginRight: 10 }}
            color="limegreen"
          />
        </div>
        <div
          style={{
            width: "100%",
            marginBlock: 40,
            background: "limegreen",
            height: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
