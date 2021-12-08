import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercards.css";
import database from "../Firebase";

function Tindercards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, [people]);

  return (
    <div>
      <div className="Container">
        {people.map((person) => (
          <TinderCard                                                          
            className="swipe"
            key={person.name}
            preventSwipe={["down", "up"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Tindercards;
