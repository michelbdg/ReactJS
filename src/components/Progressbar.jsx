// ProgressBar.jsx
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [boostrapProgress, setBootstrapProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [jqueryProgress, setjqueryProgress] = useState(0);
  const [umlProgress, setUmlProgress] = useState(0);
  const [sqlProgress, setSqlProgress] = useState(0);
  const [nodeProgress, setNodeProgress] = useState(0);
  const [phpProgress, setPhpProgress] = useState(0);
  const [symfonyProgress, setSymfonyProgress] = useState(0);

  useEffect(() => {
    setHtmlProgress(100);
    setCssProgress(75);
    setBootstrapProgress(75);
    setJsProgress(40);
    setReactProgress(70);
    setjqueryProgress(20);
    setUmlProgress(30);
    setSqlProgress(70);
    setNodeProgress(20);
    setPhpProgress(50);
    setSymfonyProgress(40);


  }, []);

  return (
    <div className='container'>
      <div className="progress-container">
        <p>HTML</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${htmlProgress}%` }}></div>
        </div>
        <span>{htmlProgress}%</span>
      </div>

      <div className="progress-container">
        <p>CSS</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${cssProgress}%` }}></div>
        </div>
        <span>{cssProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Bootstrap</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${boostrapProgress}%` }}></div>
        </div>
        <span>{boostrapProgress}%</span>
      </div>

      <div className="progress-container">
        <p>JavaScript</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${jsProgress}%` }}></div>
        </div>
        <span>{jsProgress}%</span>
      </div>

      <div className="progress-container">
        <p>React</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${reactProgress}%` }}></div>
        </div>
        <span>{reactProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Jquery</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${jqueryProgress}%` }}></div>
        </div>
        <span>{jqueryProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Conception UML(MCD/MLD)</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${umlProgress}%` }}></div>
        </div>
        <span>{umlProgress}%</span>
      </div>
      
      <div className="progress-container">
        <p>SQL</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${sqlProgress}%` }}></div>
        </div>
        <span>{sqlProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Nodejs</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${nodeProgress}%` }}></div>
        </div>
        <span>{nodeProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Php</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${phpProgress}%` }}></div>
        </div>
        <span>{phpProgress}%</span>
      </div>

      <div className="progress-container">
        <p>Symfony</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${symfonyProgress}%` }}></div>
        </div>
        <span>{symfonyProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
