/* eslint-disable max-len */
import React from 'react';
import './About.css';

const About = () => (
  <div className="About">
    <div id="titleSection">
      <h1>Data Driven README</h1>
      <p>
        Software is meant to be used, and the first step towards making your project usable is having a good README. If you&apos;re here that probably means you already know that, but what you might not know is what should be included in my README?
      </p>
      <p>
        There are many opinionated guides on how to write a README available online, but with an ever-growing number of programming languages, tools, and processes, having one definitive generic guide is bound to become outdated, and cannot take in consideration the specific details and nuances of projects built on different languages, for different systems.
      </p>
      <p>
        This tool will not write a README for you, but it will give you suggestions of what content should be included in your document, taking in consideration what programming language you&apos;re using. All suggestions are derived from live data from the most popular GitHub repositories and scientific research.
      </p>
    </div>

    <div id="contentSection">
      <h1>What should be in your README?</h1>
      <p>
        A study conducted in 2018
        <sup>
          <a
            href="https://doi.org/10.1007/s10664-018-9660-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            [1]
          </a>
        </sup>
        answered this question by querying GitHub repos and analyzing the content of each section from their READMEs. They found that the content of those sections can be classified in the following categories:
      </p>
      <ol>
        <li>
          <strong>WHAT: </strong>
          A introduction on what your project does.
        </li>
        <li>
          <strong>WHY:</strong>
          The motivation behind your project, it&apos;s advantages.
        </li>
        <li>
          <strong>HOW: </strong>
          Instructions on how to use the project.
        </li>
        <li>
          <strong>WHEN</strong>
          The status of the project, it&apos;s versions and roadmap.
        </li>
        <li>
          <strong>WHO: </strong>
          The people responsible for the project, license information, code of conduct.
        </li>
        <li>
          <strong>REFERENCES: </strong>
          External documentation, support, and related projects.
        </li>
        <li>
          <strong>CONTRIBUTION: </strong>
          Instructions on how to contribute to the project (sometimes a stand-alone file).
        </li>
        <li>
          <strong>OTHER: </strong>
          Any type of content that does not fit any of the above categories.
        </li>
      </ol>
      <p>
        Using a classifier designed by the researchers
        <sup>
          <a
            href="https://github.com/gprana/READMEClassifier/"
            rel="noopener noreferrer"
            target="_blank"
          >
            [2]
          </a>
        </sup>
        we classify the sections of READMEs from the 100 most starred repositories written in the programming language of your choice, so they can be grouped according to its content and heading level, and passed as suggestions so you can select the ones that apply to your project, knowing how often they are used by others.
      </p>
    </div>
  </div>
);

export default About;
