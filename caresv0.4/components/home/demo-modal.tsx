import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://justtellone.org">
            <Image
              src="/logo.png"
              alt="JustTellOne.org"
              width={148}
              height={80}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">End-User License Agreement</h3>
          <p className="text-xsm text-gray-500 text-left">
          This End-User License Agreement (this “EULA”) is a legal agreement between you (“Licensee”) and
Mental Health Advocates of WNY (“Licensor”), the author of JustTellOne, including all HTML files, XML
files, Java files, graphics files, animation files, data files, technology, development tools, scripts and
programs, both in object code and source code (the “Software”), the deliverables provided pursuant to
this EULA, which may include associated media, printed materials, and “online” or electronic
documentation.
<br></br>
By installing, copying, or otherwise using the Software, Licensee agrees to be bound by the terms and
conditions set forth in this EULA. If Licensee does not agree to the terms and conditions set forth in this
EULA, then Licensee may not download, install, or use the Software.
<br></br>
<ol style={{ listStyle: 'decimal' }}>
  <li><b>Grant of License.</b></li>
  <ol style={{ listStyle: 'lower-alpha' }}>
        <li><b>Scope of License.</b></li>
        <li><b>Installation and Use.</b></li>
    </ol>
  <li><b>Description of Rights and Limitations.</b></li>
  <ol style={{ listStyle: 'lower-alpha' }}>
        <li><b>Limitations.</b></li>
        <li><b>Update and Maintenance.</b></li>
        <li><b>Separation of Components.</b></li>
        </ol>
  <li><b>Title to Software.</b></li>
  <li><b>Intellectual Property.</b></li>
  <li><b>Support.</b></li>
  <li><b>Duration.</b></li>
  <li><b>Jurisdiction.</b></li>
  <li><b>Non-Transferable.</b></li>
  <li><b>Severability.</b></li>
  <li><b>WARRANTY DISCLAIMER.</b></li>
  <li><b>LIMITATION OF LIABILITY.</b></li>
  <li><b>Entire Agreement.</b></li>
</ol>
<br></br>
For additional information regarding this EULA, please contact:
Mental Health Advocates of WNY
Attn: Melinda DuBois
1021 Broadway
Buffalo, NY 14209
(716) 886-1242
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
