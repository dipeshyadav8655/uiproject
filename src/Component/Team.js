import React from "react";
import TeamText from "../Assets/TeamText.svg";
import Team1 from "../Assets/Team1.svg";
import Team2 from "../Assets/Team2.svg";
import Team3 from "../Assets/Team3.svg";
import Team4 from "../Assets/Team4.svg";
import TeamButton from "../Assets/TeamsButton.svg";

function Team() {
  return (
    <div className="bg-black pl-[70px] pb-[70px]">
      <div className="relative h-[1080px]">
        <div className="absolute top-[271px] left-[359px]">
          <img src={Team1} alt="" />
        </div>
        <div className="absolute top-[543px] left-[17px]">
          <img src={Team2} alt="" />
        </div>
        <div className="absolute bottom-[170px] right-[510px]">
          <img src={Team3} alt="" />
        </div>
        <div className="absolute top-[294px] right-[242px]">
          <img src={Team4} alt="" />
        </div>
        <div className="absolute top-[499px] left-[175px]">
          <img src={TeamText} alt="" />
        </div>
        <div className="absolute bottom-3 left-[30%]">
          <img src={TeamButton} alt="" />
        </div>
      </div>
      <div class="bookshelf">
        <div class="book book-green">
          <h2>WELNESS GARDEN</h2>
        </div>
        <div class="book book-umber">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        <div class="book book-green">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-blue">
          <h2>WELNESS GARDEN</h2>
        </div>
        <div class="book book-green">
          <h2>TECH GARAGE</h2>
        </div>
        <div class="book book-umber">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-springer">
          <h2>TECH GARAGE</h2>
        </div>
        <div class="book book-blue">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        <div class="book-tilted">
          <div class="book book-umber">
            <h2>WELNESS GARDEN</h2>
          </div>
        </div>
        <div class="book book-blue">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-green">
          <h2>TECH GARAGE</h2>
        </div>
        <div class="book-tilted">
        <div class="book book-green">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        </div>
        <div class="book book-umber">
          <h2>WELNESS GARDEN</h2>
        </div>
        <div class="book book-springer">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-blue">
          <h2>TECH GARAGE</h2>
        </div>
        <div class="book book-green">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        <div class="book-tilted">
        <div class="book book-green">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        </div>
        <div class="book book-springer">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-green">
          <h2>TECH GARAGE</h2>
        </div>
        <div class="book book-blue">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        <div class="book book-green">
          <h2>Actionscript:</h2>
          <h3>TECH GARAGE</h3>
        </div>
        <div class="book book-springer">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-blue">
          <h2>WELNESS GARDEN</h2>
        </div>
        <div class="book book-springer">
          <h2>LITERACY ATRIUM</h2>
        </div>
        <div class="book book-blue">
          <h2>LITERACY ATRIUM</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
