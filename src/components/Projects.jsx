import React, { useState } from 'react';
import '../styles/Projects.css';
import ProjectCarte from './ProjectCard';
import { Link } from 'react-router-dom';
import { projects } from './projectsList';

export default function Projects() {
    const [filteredProducts, setFilteredProducts] = useState('');

    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <div className="container">
                <ul>
                    <li onClick={() => setFilteredProducts('')}>All</li>
                    <li onClick={() => setFilteredProducts('vanilla js')}>Vanilla JS</li>
                    <li onClick={() => setFilteredProducts('react')}>React</li>
                    <li onClick={() => setFilteredProducts('mern stack')}>MERN</li>
                </ul>
                <div className="projectsContainer">
                    {projects.map((elem, index) => (
                        (filteredProducts === '' || elem.usedTechnologie === filteredProducts) && (
                            <Link to={elem.projectLink} key={index}>
                                <ProjectCarte img={elem.projectImg} ProjectName={elem.projectName} ProjectInfos ={elem.projectInfos} />
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}