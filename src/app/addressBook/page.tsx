'use client'
import styles from './page.module.css'
import React, { useState, Dispatch, SetStateAction } from 'react'
import data from "../../../assets/min-data.json";

export default function Home() {

  function addZero(piradinomeri: number) {
    const stringZero = "0"
    let piradinomeriButString = "" + piradinomeri
    let concat = stringZero.concat(piradinomeriButString)
    if (isTenDiget(piradinomeri) === true) {
      return concat
    }
    else {
      return piradinomeriButString
    }
  }

  function isTenDiget(piradinomeri: number): boolean {
    if (piradinomeri < 10000000000) {
      return true
    }
    if (piradinomeri >= 1000000000) {
      return true
    }
    return false
  }

  return (
    <main className={[styles.main, 'center'].join(" ")}>
      {data.contactInfo.map((value, index) => {
        return (
          <div key={value["piadi#"]}>
            <p>{value.saxeli} {value.gvari}</p>
            <p>{addZero(value['piadi#'])}</p>
          </div>
        )
      })}
    </main>
  )
}
