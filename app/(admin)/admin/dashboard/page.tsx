'use client'

export enum SECTIONS {
    POSTS,
    CATEGORIES,
    COMMENTS
}

import { useState } from "react";
import SideNavBar, { SideNavBarProps } from "./_components/side-nav";
import PostList from "../post-list/page";
import CategoryList from "../category-list/page";

export default function AdminDashboard() {
    const [currentSection, setCurrentSection] = useState(SECTIONS.CATEGORIES)

    function changeSection(section: SECTIONS) {
        console.log('Setting', section)
        setCurrentSection(section)
    }

    const sideNavBarProps: SideNavBarProps = {
        onSectionClick: changeSection
    } 

    function renderCurrentSection(section: SECTIONS) {

        switch (section) {
            case SECTIONS.POSTS:
               return <PostList />;
            case SECTIONS.CATEGORIES:
                return <CategoryList />;
            case SECTIONS.COMMENTS:
                return <CategoryList />;
        }
        return ''

    }
    
    return ( 
    <>
    <div className="flex">s
        <SideNavBar {...sideNavBarProps}></SideNavBar>
    
       <div className="w-full">
        { renderCurrentSection(currentSection) }
       </div>
    </div>
    </>);
}