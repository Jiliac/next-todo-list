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
    setList((prevList) => [...list, todoItem]);
  };

  const onDelete = (index: number) => {
    setList((prevList) => list.filter((_, listIndex) => listIndex !== index));
  };

  return (
    <>
      <h1 className="my-5">My Todo List</h1>

      <Input onAdd={onAdd} />

      <h3 className="my-4">The List:</h3>
      <List list={list} onDelete={onDelete} />

      <button className="btn btn-outline-danger" onClick={() => setList([])}>
        Clean
      </button>
    </>
  );
};

export default Home;
