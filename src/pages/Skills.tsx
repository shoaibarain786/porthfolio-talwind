
"use client";

import React, { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'HTML', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Next.js', proficiency: 70 },
    { name: 'TypeScript', proficiency: 65 },
    { name: 'Tailwind CSS', proficiency: 50 },
  ];

  const education = [
    { name: 'Matric', year: '2022' },
    { name: 'Artifical Intelligence', year: '2025' },
    // Add more education items as needed
  ];

  return (
    <div className="bg-black py-20 w-[100%] h-auto">
      <h2 className="text-color text-[50px] font-bold text-center mb-10">
        {activeTab === 'skills' ? 'Skills' : 'Education'}
      </h2>
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`text-xl px-6 py-2 font-semibold rounded ${
            activeTab === 'skills' ? 'bg-color text-white' : 'bg-gray-700 text-gray-200'
          }`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`text-xl px-4 py-2 font-semibold rounded ${
            activeTab === 'education' ? 'bg-color text-white' : 'bg-gray-700 text-gray-200'
          }`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>
      <div className="text-white flex flex-wrap justify-center gap-8 p-5">
        {activeTab === 'skills' ? (
          skills.map((skill, index) => (
            <div
            key={index}
            className="w-36 h-36 flex flex-col justify-center items-center rounded-full p-4 lg:w-60 lg:h-60"
            style={{
              background: `conic-gradient(#FF0000 ${skill.proficiency}%, #333333 ${skill.proficiency}%)`, // Changed to red
            }}
          >
            <div className="bg-black w-28 h-28 flex flex-col justify-center items-center rounded-full lg:w-48 lg:h-48">
              <p className="text-2xl font-bold mb-1">{skill.proficiency}%</p>
              <h4 className="text-lg">{skill.name}</h4>
            </div>
          </div>
          
          ))
        ) : (
          education.map((edu, index) => (
            <div
              key={index}
              className="w-[12rem] h-[12rem] flex flex-col justify-center items-center border-[20px]  border-color rounded-full p-4 lg:w-60 lg:h-60"
            >
              <p className="text-2xl font-bold mb-1">{edu.year}</p>
              <h4 className="text-xl text-center">{edu.name}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}