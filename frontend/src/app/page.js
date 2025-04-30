'use client'

import Image from "next/image";
import styles from "./page.module.css";
// import { useEffect, useState } from "react";

export default function Home() {
  return(
    <div className="styles.container">
      <div className="styles.navbar">
        <Image src="/apollo247.svg" width={150} height={80} />
      </div>
    </div>
  );
}