import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function getRandomDate() {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toISOString().split("T")[0];
  }

  async function fetchAPIData(date = null) {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    let url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

    if (date) {
      url += `&date=${date}`;
    }

    setLoading(true);

    try {
      const res = await fetch(url);
      const apiData = await res.json();
      setData(apiData);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  function fetchRandomImage() {
    const randomDate = getRandomDate();
    fetchAPIData(randomDate);
  }

  useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : data ? (
        <Main data={data} />
      ) : null}

      {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} showModal={showModal} />}

      {data && <Footer data={data} fetchRandomImage={fetchRandomImage} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
