import React, { useState } from "react";
import CenterPane from "../../Componenets/CenterPane/CenterPane";
import Header from "../../Componenets/LeftPane/Header";
import RightPane from "../../Componenets/RightPane/RightPane";
import SimpleForm from "../../Componenets/UserForm/UserForm";

import "./Home.css";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="dashboardContainer">
      <Header />
      <CenterPane />
      <RightPane
        onClickShow={() => {
          setShowDialog(true);
        }}
      />
      {showDialog && (
        <SimpleForm
          onClickClose={() => {
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
}
