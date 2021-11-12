import Member from "../Members.json";
import { Link } from "react-router-dom";

function ClubMembers() {
    return (
        <section className="container">
            <section className="all_members">
                {Member.members.map((member) => (
                    <Link to={{
                        pathname: '/detectiveclub/clubmember/${member.name}',
                        state: {
                            id: { member.id },
                            name: { member.name },
                            sex: { member.sex },
                            birth: { member.birth },
                            bloodtype: { member.bloodtype },
                            subjects: { member.subjects },
                            dream: { member.dream },
                            places: { member.places },
                            motivated: { member.motivated }
                        }
                    }
                }>
                        <div className={'card_' + { member.name }}>
                            <img src={member.id} alt={member.name} />
                            <span>{member.name}</span>
                        </div>
                    </Link>
                ))}
            </section>
        </section>
    );
}

export default ClubMembers;