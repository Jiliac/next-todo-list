import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="my-5">My Todo List</h1>
      <div className="row" style={{ maxWidth: "600px" }}>
        <div className="col">
          <input type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary px-4">Add</button>
        </div>
      </div>

      <h3 className="my-4">The List:</h3>
      <ul style={{ maxWidth: "600px" }}>
        <div className="row">
          <div className="col">
            <li>ss</li>
          </div>
          <div className="col">
            <button className="btn btn-outline-secondary">Done</button>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Home;
