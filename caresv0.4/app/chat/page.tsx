
import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from "react";
import { Chat } from "@twilio-paste/core";
import { ChatMessage } from "@twilio-paste/core";
import { Conversation } from "@twilio/conversations";
import { ChatComposer } from "@twilio-paste/core";

/* this is the index page for the Chat Page */

export default function Chat() {
  return (
    <>
      {/* begin card component */}
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
          <Card title={""} description={""} demo={undefined} />
      </div>
    </>
  );
}