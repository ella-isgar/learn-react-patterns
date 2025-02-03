import React, { useState } from "react";
import pageFactoryInitializer from "./pageComps/pageFactoryInitializer";

// STILL HAS THE 2ND PROBLEM - there is no seperation of concerns.
// This component is the View AND the Controller.
const condRenderHome = () => {
  const [pageName, setPageName] = useState<string>("list");
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPageName("details");
  };

  const handleBackToList = (): void => {
    setPageName("list");
  };

  // Use the factory method to get the current page component
  const currentPage = pageFactoryInitializer(
    pageName,
    handleUserClick,
    selectedUser,
    handleBackToList
  );

  return <div>{currentPage.render()}</div>;
};

export default condRenderHome;
