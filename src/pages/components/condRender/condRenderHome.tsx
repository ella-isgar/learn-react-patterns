import React, { useState } from "react";
import UsernameList from "./usernamesList";
import UserDetails from "./userDetails";

// ANOTHER PROBLEM WITH THIS CODE - there is no seperation of concerns.
// This component is the View AND the Controller.

// Define the type for the pages
type Page = "list" | "details";

const condRenderHome = () => {
  const [page, setPage] = useState<Page>("list"); // 'list' or 'details'
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPage("details");
  };

  const handleBackToList = (): void => {
    setPage("list");
  };

  // We want to be able to just call renderPage() and let the abstracted
  // object types from the factory pattern doing the heavy lifting.
  // See in solncomps under condRenderRefactored for solution.
  const renderPage = (): JSX.Element => {
    switch (page) {
      case "list":
        return <UsernameList onUserClick={handleUserClick} />;
      case "details":
        return (
          <UserDetails username={selectedUser} onBack={handleBackToList} />
        );
      default:
        return <UsernameList onUserClick={handleUserClick} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default condRenderHome;
