"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import {Button} from '@twilio-paste/button';
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";

export default function EulaButton() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  
  return(
    <div>
  <DemoModal />
  <p className= "text-gray-500 mb-2 ">
    <span >By continuing, you accept our{""}</span>
  <Button 
    variant="link" 
    onClick={() => setShowDemoModal(true)}
    // className="underline inline flex"
    >
    Terms
    <LinkExternalIcon decorative />
  </Button>
  </p>
  </div>
);
}
