import React from 'react';
import './App.css';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typist>
            <span className="intro"> Hi! I'm <span className="highlight">Cailyn</span> - a fullstack developer from Canada! </span>
          <Typist.Delay ms={500} />
          <br />
          <Typist.Delay ms={500} />
          <span className="medium">I spend my time working on my computer science degree</span>
          <Typist.Backspace count={27} delay={200} />
          <span className="medium"> amazing projects at Shopify</span>
          <Typist.Backspace count={28} delay={200} />
          <span className="medium"> personal passion projects</span>
          <Typist.Backspace count={25} delay={200} />
          <span className="medium highlight"> building cool stuff and learning all the things! </span>
          <br />
          <span> Nice to meet you! </span>
        </Typist>
      </header>

      <div id="photo" className="container">
        <div className="row">
          <div className="columnLeft">
            <img id="mainphoto" src="cailyn1.jpg" alt="CailynEdwards"></img>
            </div>
          <div className="columnRight">
            <div id="cailynJSON">
              <pre>
                <pre>	&#123; </pre>
                <pre><span className="highlight">"Name"</span>:"Cailyn Edwards",</pre>
                <pre><span className="highlight">"Experience"</span>:[ </pre>
                <pre> &#123;</pre>
                <pre>   <span className="highlight">"Employer"</span>:"Shopify",</pre>
                <pre>   <span className="highlight">"Role"</span>:"Dev Degree Intern"</pre>
                <pre>   <span className="highlight">"Team"</span>:"Infrastructure Security"</pre>
                <pre> &#125;,</pre>
                <pre> &#123;</pre>
                <pre>   <span className="highlight">"Employer"</span>:"Shopify",</pre>
                <pre>   <span className="highlight">"Role"</span>:"Dev Degree Intern"</pre>
                <pre>   <span className="highlight">"Team"</span>:"Orders - Backend Developer"</pre>
                <pre> &#125;</pre>
                <pre>],</pre>
                <pre><span className="highlight">"Education"</span>:"BCS Carleton University Class of 2021",</pre>
                <pre><span className="highlight">"Languages"</span>:[</pre>
                  <pre>  "GoLang",</pre> 
                  <pre>  "Ruby on Rails", </pre>
                  <pre>  "Java", </pre>
                  <pre>  "C", </pre>
                  <pre>  "C#", </pre>
                  <pre>  "C++", </pre>
                  <pre>  "Python", </pre>
                  <pre>  "JavaScript"</pre>
                  <pre>  ],</pre>
                <pre>"<span className="highlight">Technologies"</span>:[</pre>
                  <pre>  "Kubernetes", </pre>
                  <pre>  "Google Cloud Platform", </pre>
                  <pre>  "Git", </pre>
                  <pre>  "Shipit", </pre>
                  <pre>  "Longboat", </pre>
                  <pre>  "Bugsnag", </pre>
                  <pre>  "MySQL Pro", </pre>
                  <pre>  "Insomnia" </pre>
                  <pre>  ]</pre>
                <pre>&#125;</pre>
              </pre>
            </div>
          </div>
          </div>
          </div>
          <div id="mediaLinks">
            <a href="https://github.com/cailynse"><FontAwesomeIcon icon={faGithub} color="#78BCB5" size='3x'/></a>
            <a href="https://twitter.com/CailynEdwards"><FontAwesomeIcon icon={faTwitter} color="#78BCB5" size='3x'/></a>
            <a href="https://www.linkedin.com/in/cailyn-edwards-24b8a086/"><FontAwesomeIcon icon={faLinkedinIn} color="#78BCB5" size='3x'/></a>
          </div>
        </div>
  );
}

export default App;
