import React from "react";
import Member from "../Members.json";
import MemberCard from "./MemberCard";

function ClubMembers() {
    const members = JSON.parse(Member);
    return (
        <section className="container">
            <section className="all_members">
                {members.map((member) => (
                    <MemberCard
                        id={member.id}
                        name={member.name}
                        sex={member.sex}
                        birth={member.birth}
                        bloodtype={member.bloodtype}
                        subjects={member.subjects}
                        dream={member.dream}
                        places={member.places}
                        motivated={member.motivated}
                     />    
                ))}
            </section>
        </section>
    )
}

export default ClubMembers;