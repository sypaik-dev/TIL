import React from 'react';
import MenuList from '../MenuListItem/MenuListItem';
import './MenuList.css'

export default function MenuList() {
    const menus = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!"];

    return (
        <ul>
            {menus.map((moodEl) => {
                <MenuList mood = {moodEl}/>
            })}
        </ul>
    )
}



