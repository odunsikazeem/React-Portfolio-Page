import React from 'react';

const styles = {
  img: {
    borderRadius: '30px',
    width: '100px',
    height: '100px',
  },
};

function Homepage() {
  return (
    <div>
      <div className="">
        <h1>Odunsi Akorede</h1>
        </div>
      
      <img style={styles.img} src="images/displaypicture.jpg" />
      <p>
      This repository contains my professional profile, personal projects,social media accounts and resume. I have supplied links to my social media accounts for further engagement and networking opportunities .I embarked on this project to showcase my dexterity in Front-End Development to potential employers or clients that might need my services.
      </p>
    </div>
  );
}

export default Homepage;
