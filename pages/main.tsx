import { NextPage } from "next";
import React from "react";

interface MainPageProps {
  userAgent?: string;
}
const Main: NextPage<MainPageProps> = ({ userAgent }) => {
  return <>USER-AGENT : {userAgent}</>;
};

Main.getInitialProps = async ({ req, res, err }) => {
  console.log(req?.headers);
  const userAgent = req?.headers["user-agent"] || navigator["userAgent"];
  return { userAgent };
};

export default Main;
