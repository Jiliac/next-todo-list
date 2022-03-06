import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Input } from "../components/input";
import { List } from "../components/list";

const Home: NextPage = () => {
  const [list, setList] = useState<Array<string>>([]);

  const onAdd = (todoItem: string) => {
    setList(prevList => [...list, todoItem])
  };

  return (
    <>
      <h1 className="my-5">My Todo List</h1>

      <Input onAdd={onAdd} />

      <h3 className="my-4">The List:</h3>
      <List list={list} />
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
