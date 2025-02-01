const SideBar = ({ handleToggleModal, data, showModal }) => {
    return (
      <div className={`sidebar ${showModal ? "show" : ""}`}>
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
          <h2>{data?.title || "No title available"}</h2>
          <div className="descriptionContainer">
            <p className="descriptionTitle">{data?.date || "No date available"}</p>
            {!data?.explanation ? <p>No description</p> : <p>{data?.explanation}</p>}
          </div>
          <button onClick={handleToggleModal}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    );
  };
  
  export default SideBar;
  