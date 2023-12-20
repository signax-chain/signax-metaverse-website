import React from "react";
import styles from "./css/signin.module.css";

export function SignInPrompt({ greeting, onClick }) {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["logo-container"]}>
        {/* <img
          src="https://asset-signax.b-cdn.net/Signa%20X%20Black.png"
          alt="Logo"
        /> */}
      </div>
      <div className={styles["content"]}>
      <img src="https://igic.b-cdn.net/IGIC/updated-sponsors/image-9.png" className={styles["kdem-logo"]} />
        <h1><span className={styles["highlight"]}
        >SIGNAX NEAR KARNATAKA METAVERSE</span></h1>
        <p>Powered By</p>
        <div className={styles["powered-by"]}>
            {/* <img src="https://asset-signax.b-cdn.net/Signa%20X%20Black.png" className={styles["signax"]} /> */}
            <img src="https://asset-signax.b-cdn.net/near-protocol-logo_freelogovectors.net_.png" className={styles["signax"]} />
        </div>
      </div>
      <button className={styles["signin-button"]} onClick={onClick}>Enter with NEAR Wallet</button>
      {/* <p className={styles["footer-title"]}>Built with Near Wallet</p> */}
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button className={styles["signout-button"]} style={{ float: "right" }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function MozillaContent(){
  return (
    <div className={styles["iFrame-content"]}>
        <img src="https://asset-signax.b-cdn.net/Spinner-1s-200px%20(4).gif" />
        <p>Redirecting Please Wait...</p>
    </div>
  );
}