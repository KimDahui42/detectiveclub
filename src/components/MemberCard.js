import "../styles/ClubMembers.css";
import PropTypes from "prop-types";

function ClubMember({ id,name, sex, birth, bloodtype, subjects, dream, places, motivated }) {
	const printSubjects = () => {
		var length = subjects.length;
		var finalStr = "";
		for (var i = 0; i < length - 1; i++) {
			finalStr += subjects[i] + ', ';
		}
		finalStr += subjects[length - 1];
		return finalStr;
	}
	const printPlaces = () => {
		var length = places.length;
		var finalStr = "";
		for (var i = 0; i < length - 1; i++) {
			finalStr += places[i] + ', ';
		}
		finalStr += places[length - 1];
		return finalStr;
	}
	return (
		<div>
			<img src={id} alt={name} />
			<table>
				<tr>
					<td>학생정보</td>
					<td>
						<tr>{name} 성별: {sex}</tr>
						<tr>{birth.year}.{birth.month}.{birth.day} 혈액형: {bloodtype}</tr>
					</td>
				</tr>
				<tr>
					<td>선호과목</td>
					<td>{printSubjects()}</td>
				</tr>
				<tr>
					<td>진로희망</td>
					<td>{dream}</td>
				</tr>
				<tr>
					<td>선호구역</td>
					<td>{printPlaces()}</td>
				</tr>
				<tr>
					<td>가입동기</td>
					<td>{motivated}</td>
				</tr>
			</table>
		</div>
	);
}

ClubMember.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	sex: PropTypes.string.isRequired,
	birth: PropTypes.objectOf(PropTypes.number).isRequired,
	bloodtype: PropTypes.string.isRequired,
	subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
	dream: PropTypes.string.isRequired,
	places: PropTypes.arrayOf(PropTypes.string).isRequired,
	motivated: PropTypes.string.isRequired
};

export default ClubMember;