import '../App.css';

function Profile(){
  return (
    <div className="page">
      <h1>Shreeyansh Kumar</h1>
      <h2>BE CSE AIML</h2>
      <h2>Machine Learning Engineer</h2>
    </div>
  );
}

function DashBoard(){
  return (
    <div className="page">
      <h1>Skills</h1>
      <h2>C++</h2>
      <h2>Python</h2>
      <h2>JavaScript</h2>
    </div>
  );
}

function Contact(){
  return(
    <div className='contact'>
      <h1>Contact</h1>
      <h3>Mobile: +91 9056056156</h3>
      <h3>Email: shreeyansh1708@gmail.com</h3>
    </div>
  );
}

export {Profile, DashBoard, Contact};