
import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from "react";
/* this is the index page for the Chat Page */

export default function Chat() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <Balancer>
          </Balancer>
      </div>
      {/* begin card component */}
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
          <Card />

      </div>
    </>
  );
}