import React from 'react';

// importing components
import ReactAvatar from '../../Components/ReactAvatar.tsx';
import HTMLAvatar from '../../Components/HTMLAvatar.tsx';
import CSSAvatar from '../../Components/CSSAvatar.tsx';
import CPPAvatar from '../../Components/CppAvatar.tsx';
import JSAvatar from '../../Components/JSAvatar.tsx';
import JavaAvatar from '../../Components/JavaAvatar.tsx';
import SQLAvatar from '../../Components/SQLAvatar.tsx';
import GitAvatar from '../../Components/SkillsAvatars.tsx';

const Skills = () => {
  return (
    <>
        <div className="skillset-heading">
            <p>My Toolbox</p>
        </div>

        <div className="skills-icons-1">
            <ReactAvatar />

            <HTMLAvatar />

            <CSSAvatar />

            <CPPAvatar />
        </div>

        <div className="skills-icons-2">
            <JSAvatar />

            <JavaAvatar />

            <SQLAvatar />

            <GitAvatar />
        </div>
    </>
  )
}

export default Skills