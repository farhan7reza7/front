import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../authContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { userId, token, user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const location = useLocation();
  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    const tn = query.get("token");
    const ur = query.get("userId");
    if (tn && ur) {
      fetch(`/api/verify-user?token=${tn}&userId=${ur}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.valid) {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("userId", JSON.stringify(ur));
          }
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetch(`/api/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data.tasks && setTasks(data.tasks);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [userId, token]);

  const handleAdd = useCallback(() => {
    fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: input, userId: userId }),
    })
      .then((res) => {
        fetch(`/api/tasks?userId=${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            data.tasks && setTasks(data.tasks);
          })
          .catch((error) => {
            console.log(error.message);
          });
        setInput("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [input, userId, token]);

  return (
    <>
      <nav className="navMain">
        <ul>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="component" style={{ overflow: "auto" }}>
        Home page
        <div>
          <p>user id: {userId}</p>
          <p>user: {user}</p>
          <h3>Tasks</h3>
          {tasks.map((el, index) => (
            <div key={el._id}>{el.content}</div>
          ))}
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button type="button" onClick={handleAdd}>
              Add new
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
