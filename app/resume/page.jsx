import React from 'react'

const resume = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col items-center justify-center text-center xl:flex-row xl:items-center xl:justify-between xl:pt-8 xl:pb-24 xl:text-left">
                <div>
                <h1 className="text-5xl font-bold leading-tight">
                  Education
                </h1>
                <p className="mt-4 text-lg">University Of California, Davis Bachelor's of Science in Computer Science</p>
                <li>Relavent Coursework: Computer Organization, Computer Architecture,  Data Structures, Algorithms Design & Analysis, Operating Systems, Computer Networks, Software Engineering, Theory of Computation</li>
                <h1 className="text-5xl font-bold leading-tight">Skills</h1>
                <ul className="mt-4 text-lg">
                  <li>Languages: Java, Python, C/C++, JavaScript, TypeScript, HTML/CSS</li>
                  <li>Frameworks: React, Node.js, Git, django</li>
                  <li>Developer Tools: Git, Docker, VS Code, Visual Studio, IntelliJ, Eclipse</li>
                  <li>Libraries: pandas, NumPy, Matplotlib, BeautifulSoup, requests</li>
                </ul>
            <div className="mt-4 mb-8 xl:mb-0">
            </div>
          </div>
          {/* photo */}
          <div className="ml-4 xl:ml-8">
          </div>
        </div>
      </div>
    </section>
  );
};
export default resume