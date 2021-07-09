import { lazy } from "react";
import keys from "../keys.json";
console.log(process.env.NODE_ENV);

const importBuilder = (component) => {
  console.log(keys[component]);
  return process.env.NODE_ENV === "development"
    ? "DEV/" + component
    : keys[component] + "/" + component;
};

const TestFunc1 = lazy(() => import(`./${importBuilder("SAMPLE_1")}/test1`));
const TestFunc2 = lazy(() => import(`./${importBuilder("SAMPLE_1")}/test2`));
const TestFunc3 = lazy(() => import(`./${importBuilder("SAMPLE_2")}/test3`));
const TestFunc4 = lazy(() => import(`./${importBuilder("SAMPLE_2")}/test4`));
const TestFunc5 = lazy(() => import(`./${importBuilder("SAMPLE_3")}/test5`));

export default {
  TestFunc1,
  TestFunc2,
  TestFunc3,
  TestFunc4,
  TestFunc5
};
