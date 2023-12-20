import "regenerator-runtime/runtime";
import React from "react";
import {
  EducationalText,
  SignInPrompt,
  SignOutButton,
  MozillaContent,
} from "./ui-components";
import "./assets/global.css";

export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();
  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    if (isSignedIn) {
      setTimeout(() => {
        // window.open("https://signax.myhubs.net/DGffrPu/kdem-near-metaverse", "_self");
        window.open("https://signax.myhubs.net/link/yewqark", "_self");
      }, 3000);
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return (
      <SignInPrompt
        greeting={valueFromBlockchain}
        onClick={() => wallet.signIn()}
      />
    );
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet
      .callMethod({
        method: "set_greeting",
        args: { message: greetingInput.value },
        contractId,
      })
      .then(async () => {
        return getGreeting();
      })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getGreeting() {
    return wallet.viewMethod({ method: "get_greeting", contractId });
  }

  return (
    <div>
      <SignOutButton
        accountId={wallet.accountId}
        onClick={() => wallet.signOut()}
      />
      <MozillaContent />
    </div>
  );
}
